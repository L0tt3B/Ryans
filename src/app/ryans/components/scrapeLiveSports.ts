import axios from "axios";
import { load } from "cheerio";

const BASE = "https://www.wheresthematch.com";
const MAIN_PATH = "/live-sport-on-tv/";

// Strict UK broadcasters only
const UK_CHANNEL_KEYWORDS = [
  "sky sports",
  "bbc",
  "itv",
  "channel 4",
  "channel 5",
  "bt sport",
  "eurosport",
];

export default async function scrapeLiveSports() {
  const { data: html } = await axios.get(BASE + MAIN_PATH);
  const $ = load(html);

  // grab each day-tab link (minus "7 Days" & "31 Days")
  const daysAndUrls = $("#new-tabs ul li a")
    .map((i, a) => {
      const $a = $(a);
      const abbr = $a.find("abbr");
      const day = (abbr.attr("title") || $a.text()).trim();
      const href = $a.attr("href")!;
      const url = href.startsWith("http") ? href : BASE + href;
      return { day, url };
    })
    .get()
    .filter(({ day }) => day !== "7 Days" && day !== "31 Days");

  const allData: Record<string, Array<{
    fixture: string;
    time: string;
    competition: string;
    channels: string[];
    iso: string;
  }>> = {};

  for (const { day, url } of daysAndUrls) {
    console.log(`→ Scraping ${day} @ ${url}`);
    const { data: pageHtml } = await axios.get(url);
    const $$ = load(pageHtml);

    const events = $$('tr[itemtype="https://schema.org/BroadcastEvent"]')
      .map((_, row) => {
        const $row = $$(row);
        const fixture =
          $row.find('td.fixture-details[itemprop="name"]').attr("content")?.trim() ||
          $row.find("td.fixture-details").text().trim() ||
          "Unknown Match";
        const iso =
          $row.find('td.start-details[itemprop="startDate"]').attr("content")?.trim() ||
          "";
        const m = iso.match(/T(\d{2}):(\d{2})/);
        const time = m ? `${m[1]}:${m[2]}` : iso;
        const competition =
          $row.find("td.competition-name").text().trim() || "TBD";
        const channels = $row
          .find("td.channel-details img[title], td.channel-details a[title]")
          .map((_, el) => $$(el).attr("title")!.trim())
          .get();

        return { fixture, time, competition, channels, iso };
      })
      .get();

    const ukEvents = events.filter((e) =>
      e.channels.some((ch) =>
        UK_CHANNEL_KEYWORDS.some((kw) => ch.toLowerCase().includes(kw))
      )
    );

    console.log(`   • ${ukEvents.length}/${events.length} UK events on ${day}`);
    allData[day] = ukEvents;
  }

  return allData;
}
