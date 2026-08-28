/**
 * @file advisor-card.js
 * @description Renders a single advisor's summary card, linking to their Calendly booking page and detail modal.
 * @module components/advisor-card
 */

import { escapeHtml } from "../utils/article-utils.js";
import { wrapMyanmarScript } from "../utils/text-utils.js";

function renderUniversityLogos(universities) {
  return universities
    .map(
      ({ name, logo }) =>
        `<img class="advisor-card__uni-logo" src="${escapeHtml(logo)}" alt="${escapeHtml(name)}" loading="lazy">`,
    )
    .join("");
}

export function renderAdvisorCard(advisor) {
  const name = escapeHtml(advisor.name);
  const role = escapeHtml(advisor.role);
  const intro = wrapMyanmarScript(escapeHtml(advisor.cardIntro));
  const highlight = wrapMyanmarScript(escapeHtml(advisor.cardHighlight));

  return `
    <div class="advisor-card__col">
      <div class="advisor-card">
        <img
          class="advisor-card__photo"
          src="${escapeHtml(advisor.photo)}"
          alt="${name}"
          loading="lazy"
        >
        <h2 class="advisor-card__name">${name}</h2>
        <p class="advisor-card__role">${role}</p>
        <p class="advisor-card__intro">
          ${intro}
          <span class="advisor-card__highlight">${highlight}</span>
        </p>
        <p class="advisor-card__read-more">
          To read more about ${name}'s profile, please click
          <button
            type="button"
            class="advisor-card__read-more-link"
            data-bs-toggle="modal"
            data-bs-target="#advisorModal-${advisor.id}"
          >here</button>
        </p>
        <div class="advisor-card__universities">
          ${renderUniversityLogos(advisor.universities)}
        </div>
        <div class="advisor-card__cta">
          <a
            class="btn btn-primary"
            href="${escapeHtml(advisor.calendlyUrl)}"
            target="_blank"
            rel="noopener noreferrer"
          >Meet</a>
        </div>
      </div>
    </div>
  `;
}

export function renderAdvisorCards(advisors) {
  return advisors.map(renderAdvisorCard).join("");
}
