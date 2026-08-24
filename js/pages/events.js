/**
 * @file events.js
 * @description Handles the rendering of webinar series pages and manages the active series based on URL hash.
 * @module pages/events
 */

import { mountLayout } from "../components/layout.js";
import { renderWebinarGrid } from "../components/webinar-grid.js";
import {
  ABOVE_AND_BEYOND,
  STEPPING_STONE,
  KYAUNG_SHAUT,
} from "../data/webinars/index.js";
import { initializeSeriesController } from "../controllers/series-controller.js";

async function initEventsPage() {
  try {
    await mountLayout();
  } catch (err) {
    console.error("Failed to mount layout:", err);
  }

  const VALID_HASHES = new Set([
    "above-and-beyond",
    "stepping-stone",
    "kyaung-shaut",
  ]);
  const DEFAULT_HASH = "above-and-beyond";

  const eventsPanel = document.getElementById("events-panel");

  const eventSeries = {
    "above-and-beyond": {
      titleMain: "Above & Beyond",
      titleAccent: "Webinars",
      entries: ABOVE_AND_BEYOND,
    },
    "stepping-stone": {
      titleMain: "Stepping Stone",
      titleAccent: "Webinars",
      entries: STEPPING_STONE,
    },
    "kyaung-shaut": {
      titleMain: "ကျောင်းလျှောက်ကြမယ်",
      titleAccent: "Webinars",
      entries: KYAUNG_SHAUT,
    },
  };

  initializeSeriesController({
    defaultKey: DEFAULT_HASH,
    validKeys: VALID_HASHES,
    series: eventSeries,
    container: eventsPanel,
    renderSeries: renderWebinarGrid,
    getButtons: () => ({
      "above-and-beyond": document.getElementById("above-and-beyond-button"),
      "stepping-stone": document.getElementById("stepping-stone-button"),
      "kyaung-shaut": document.getElementById("kyaung-shaut-button"),
    }),
  });
}

initEventsPage();
