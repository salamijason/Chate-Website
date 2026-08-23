/**
 * @file videos.js
 * @description Handles the rendering of video series pages and manages the active series based on URL hash.
 * @module pages/videos
 */

import { mountLayout } from "../components/layout.js";
import { renderVideoGrid } from "../components/video-grid.js";
import { SU_TU_PYU, SCHOLARS_DIARIES } from "../data/videos/index.js";
import { initializeSeriesController } from "../controllers/series-controller.js";

async function initVideosPage() {
  try {
    await mountLayout();
  } catch (err) {
    console.error("Failed to mount layout:", err);
  }

  const VALID_HASHES = new Set(["su-tu-pyu", "scholars-diaries"]);
  const DEFAULT_HASH = "su-tu-pyu";

  const videosPanel = document.getElementById("videos-panel");

  const videoSeries = {
    "su-tu-pyu": {
      titleMain: "စုတုပြု",
      titleAccent: "Video Series",
      entries: SU_TU_PYU,
    },
    "scholars-diaries": {
      titleMain: "Scholars'",
      titleAccent: "Diaries",
      entries: SCHOLARS_DIARIES,
    },
  };

  initializeSeriesController({
    defaultKey: DEFAULT_HASH,
    validKeys: VALID_HASHES,
    series: videoSeries,
    container: videosPanel,
    renderSeries: renderVideoGrid,
    getButtons: () => ({
      "su-tu-pyu": document.getElementById("su-tu-pyu-button"),
      "scholars-diaries": document.getElementById("scholars-diaries-button"),
    }),
  });
}

initVideosPage();
