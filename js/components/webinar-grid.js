/**
 * @file webinar-grid.js
 * @description Renders a grid of webinar cards based on the provided series data.
 * @module components/webinar-grid
 */

import { renderSeriesCard } from "./series-card.js";
import { renderSeriesHeading } from "./series-heading.js";

const FILTERS = [
  { key: "above-and-beyond", label: "Above & Beyond" },
  { key: "stepping-stone", label: "A Stepping Stone" },
  { key: "kyaung-shaut", label: "ကျောင်းလျှောက်ကြမယ်", lang: "my" },
];

export function renderWebinarGrid(series) {
  const cardsHtml = series.entries
    .map((entry) =>
      renderSeriesCard({
        mediaType: entry.mediaType,
        mediaSrc: entry.mediaSrc,
        title: entry.title,
        metadata: entry.presenter
          ? { label: "Presented by", value: entry.presenter }
          : null,
        secondary: entry.date,
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
