/**
 * @file series-heading.js
 * @description Renders a shared heading and filter navigation for series pages.
 * @module components/series-heading
 */

import { wrapMyanmarScript } from "../utils/text-utils.js";

export function renderSeriesHeading({ titleMain, titleAccent, filters }) {
  const filterButtons = filters
    .map(
      ({ key, label, lang }) => `
        <button id="${key}-button" class="selector" type="button">
          <span class="fw-bold"${lang ? ` lang="${lang}"` : ""}>${wrapMyanmarScript(label)}</span>
        </button>
      `,
    )
    .join("");

  return `
    <section class="series-heading">
      <h1 class="series-heading__title">
        ${wrapMyanmarScript(titleMain)}
        <span class="series-heading__highlight">${wrapMyanmarScript(titleAccent)}</span>
      </h1>
      <nav class="series-heading__filters" aria-label="Series category filter">
        ${filterButtons}
      </nav>
    </section>`;
}
