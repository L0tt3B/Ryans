// scrapeLiveSports.js
const axios = require("axios");
const cheerio = require("cheerio");

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
  "eurosport", // Eurosport UK
];

async function scrapeLiveSports() {
  const { data: html } = await axios.get(BASE + MAIN_PATH);
  const $ = cheerio.load(html);

  // grab each day-tab link (minus "7 Days" & "31 Days")
  const daysAndUrls = $("#new-tabs ul li a")
    .map((i, a) => {
      const $a = $(a);
      const abbr = $a.find("abbr");
      const day = (abbr.attr("title") || $a.text()).trim();
      const href = $a.attr("href");
      const url = href.startsWith("http") ? href : BASE + href;
      return { day, url };
    })
    .get()
    .filter(({ day }) => day !== "7 Days" && day !== "31 Days");

  const allData = {};

  for (const { day, url } of daysAndUrls) {
    console.log(`→ Scraping ${day} @ ${url}`);
    const { data: pageHtml } = await axios.get(url);
    const $$ = cheerio.load(pageHtml);

    // scrape each BroadcastEvent row
    const events = $$('tr[itemtype="https://schema.org/BroadcastEvent"]')
      .map((i, row) => {
        const $row = $$(row);

        // Match name
        const fixture =
          $row
            .find('td.fixture-details[itemprop="name"]')
            .attr("content")
            ?.trim() ||
          $row.find("td.fixture-details").text().trim() ||
          "Unknown Match";

        // full ISO timestamp
        const iso =
          $row
            .find('td.start-details[itemprop="startDate"]')
            .attr("content")
            ?.trim() ||
          "";

        // formatted HH:MM
        const m = iso.match(/T(\d{2}):(\d{2})/);
        const time = m ? `${m[1]}:${m[2]}` : iso;

        // Competition
        const competition =
          $row.find("td.competition-name").text().trim() || "TBD";

        // All channel titles
        const channels = $row
          .find("td.channel-details img[title], td.channel-details a[title]")
          .map((i, el) => $$(el).attr("title").trim())
          .get();

        return { fixture, time, competition, channels, iso };
      })
      .get();

    // only UK broadcasters
    const ukEvents = events.filter((e) =>
      e.channels.some((ch) =>
        UK_CHANNEL_KEYWORDS.some((kw) =>
          ch.toLowerCase().includes(kw)
        )
      )
    );

    console.log(
      `   • ${ukEvents.length}/${events.length} UK events on ${day}`
    );
    allData[day] = ukEvents;
  }

  return allData;
}

module.exports = scrapeLiveSports;
