/**
 * @file series-card.js
 * @description Renders a shared media card for webinar and video series entries.
 * @module components/series-card
 */

import { wrapMyanmarScript } from "../utils/text-utils.js";

export function renderSeriesCard({
  mediaType = "video",
  mediaSrc,
  title,
  details = [],
  notes = [],
}) {
  const mediaHtml =
    mediaType === "image"
      ? `<img class="series-card__image" src="${mediaSrc}" alt="${title}" loading="lazy" decoding="async">`
      : `<iframe
          class="series-card__iframe lazy-iframe"
          data-src="${mediaSrc}"
          title="${title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>`;

  const detailsHtml = details
    .filter((detail) => detail.text)
    .map(
      ({ text, label, value, className = "series-card__detail" }) => `
      <p class="${className}">
        ${label ? `${label} ` : ""}
        ${value ? `${wrapMyanmarScript(text)} <span class="series-card__name">${wrapMyanmarScript(value)}</span>` : wrapMyanmarScript(text)}
      </p>
    `,
    )
    .join("");
  const notesHtml = notes
    .map(
      (note) => `<p class="series-card__note">${wrapMyanmarScript(note)}</p>`,
    )
    .join("");

  return `
    <article class="series-card">
      <div class="series-card__frame">${mediaHtml}</div>
      <h2 class="series-card__title">${wrapMyanmarScript(title)}</h2>
      ${detailsHtml}
      ${notesHtml}
    </article>`;
}
