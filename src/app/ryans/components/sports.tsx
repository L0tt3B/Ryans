// sports.tsx
"use client";

import { useEffect, useState, useRef } from "react";

type Event = {
  fixture: string;
  time: string;        // "HH:MM"
  competition: string;
  channels: string[];  // array of titles
  iso: string;         // full ISO timestamp
};

const PAGE_SIZE = 5;

export default function LiveSportsWidget() {
  const [data, setData] = useState<Record<string, Event[]>>({});
  const [activeDay, setActiveDay] = useState("Today");
  const [index, setIndex] = useState(0);
  const didAutoSeek = useRef(false);

  // fetch once
  useEffect(() => {
    fetch("/api/live-sports")
      .then((res) => res.json())
      .then((p) => {
        if (!p.success) {
          console.error("Scraper failed:", p.error);
          return;
        }
        setData(p.data);
      })
      .catch(console.error);
  }, []);

  // once we have data for Today, auto‐seek to first upcoming
  useEffect(() => {
    if (
      !didAutoSeek.current &&
      activeDay === "Today" &&
      Array.isArray(data.Today) &&
      data.Today.length > 0
    ) {
      didAutoSeek.current = true;
      const now = Date.now();

      // find first event whose ISO ≥ now
      const targetIdx = data.Today.findIndex((e) => {
        const t = Date.parse(e.iso);
        return !isNaN(t) && t >= now;
      });

      // if none upcoming, go to last match
      const finalIdx =
        targetIdx >= 0 ? targetIdx : data.Today.length - 1;

      // page‐align the index
      const pageStart =
        Math.floor(finalIdx / PAGE_SIZE) * PAGE_SIZE;
      setIndex(pageStart);
    }
  }, [data, activeDay]);

  const days = Object.keys(data);
  const events = data[activeDay] || [];

  const pageCount = Math.ceil(events.length / PAGE_SIZE) || 1;
  const currentPage = Math.floor(index / PAGE_SIZE) + 1;
  const visible = events.slice(index, index + PAGE_SIZE);

  const goFirst = () => setIndex(0);
  const goPrev = () =>
    setIndex((i) => Math.max(0, i - PAGE_SIZE));
  const goNext = () =>
    setIndex((i) =>
      Math.min((pageCount - 1) * PAGE_SIZE, i + PAGE_SIZE)
    );
  const goLast = () =>
    setIndex((pageCount - 1) * PAGE_SIZE);

  return (
    <section className="py-16 px-6 text-center bg-yellow-900/10">
      <h2 className="text-4xl md:text-5xl mb-6 font-bold text-yellow-400">
        Live Sports
      </h2>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
        Visit us to watch the action live!
      </p>

      {/* Day Tabs */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => {
              setActiveDay(day);
              setIndex(0);
              didAutoSeek.current = false; // allow re-seek if you switch back
            }}
            className={`px-4 py-2 rounded ${
              day === activeDay
                ? "bg-yellow-500 text-black"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Fixtures */}
      {visible.length === 0 ? (
        <p>Loading fixtures…</p>
      ) : (
        <ul className="max-w-3xl mx-auto space-y-4 text-left">
          {visible.map((e, i) => (
            <li
              key={i}
              className="bg-black/50 p-4 rounded shadow text-white"
            >
              <p className="text-lg font-semibold text-yellow-300">
                {e.fixture}
              </p>
              <p className="text-sm">
                🕒 {e.time} &nbsp;|&nbsp;📺 {e.channels.join(", ")}
                &nbsp;|&nbsp;🏆 {e.competition}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={goFirst}
          disabled={currentPage === 1}
          className="bg-yellow-500 text-black px-3 py-1 rounded disabled:opacity-50"
        >
          « First
        </button>

        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className="bg-yellow-500 text-black px-3 py-1 rounded disabled:opacity-50"
        >
          ← Prev
        </button>

        <div className="px-4 text-white font-semibold">
          {currentPage} of {pageCount}
        </div>

        <button
          onClick={goNext}
          disabled={currentPage === pageCount}
          className="bg-yellow-500 text-black px-3 py-1 rounded disabled:opacity-50"
        >
          Next →
        </button>

        <button
          onClick={goLast}
          disabled={currentPage === pageCount}
          className="bg-yellow-500 text-black px-3 py-1 rounded disabled:opacity-50"
        >
          Last »
        </button>
      </div>
    </section>
  );
}
