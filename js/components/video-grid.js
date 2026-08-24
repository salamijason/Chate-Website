/**
 * @file video-grid.js
 * @description Renders a grid of video cards based on the provided series data.
 * @module components/video-grid
 */

import { renderSeriesCard } from "./series-card.js";
import { renderSeriesHeading } from "./series-heading.js";

const FILTERS = [
  { key: "su-tu-pyu", label: "စုတုပြု", lang: "my" },
  { key: "scholars-diaries", label: "Scholars' Diaries" },
];

export function renderVideoGrid(series) {
  const cardsHtml = series.entries
    .map((entry) =>
      renderSeriesCard({
        mediaSrc: entry.videoSrc,
        title: entry.title,
        metadata: {
          label: entry.rolePrefix,
          value: entry.personName,
        },
        secondary: entry.secondaryLine,
        notes: entry.notes,
      }),
    )
    .join("");

  return `
    ${renderSeriesHeading({ ...series, filters: FILTERS })}
    <div class="series-grid">
      ${cardsHtml}
    </div>`;
}
