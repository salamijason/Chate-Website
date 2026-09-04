/**
 * @file article-card.js
 * @description Renders article listing cards with links to the dedicated article reader page.
 * @module components/article-card
 */

import {
  formatDate,
  formatLabels,
  extractThumbnail,
  escapeHtml,
} from "../utils/article-utils.js";
import { wrapMyanmarScript } from "../utils/text-utils.js";

function renderArticleCard(article) {
  const image = extractThumbnail(article.content);
  const date = formatDate(article.published);
  const labels = formatLabels(article.labels);
  const title = wrapMyanmarScript(escapeHtml(article.title));
  const safeDate = wrapMyanmarScript(escapeHtml(date));
  const safeLabels = wrapMyanmarScript(escapeHtml(labels));

  return `
    <article class="article-card">
      <a class="article-card__link" href="article.html?id=${encodeURIComponent(article.id)}">
        <img class="article-card__image" src="${escapeHtml(image)}" alt="${escapeHtml(article.title)}" loading="lazy" />
        <div class="article-card__body">
          <h2 class="article-card__title">${title}</h2>
          <p class="article-card__date">${safeDate}</p>
          <p class="article-card__labels">${safeLabels}</p>
          <span class="article-card__action">Read article</span>
        </div>
      </a>
    </article>
  `;
}

export function renderArticleCards(articles) {
  return articles.map(renderArticleCard).join("");
}

/**
 * Renders placeholder article cards to show while articles are being
 * fetched from the Blogger API. Purely decorative — hidden from screen readers.
 */
export function renderArticleCardSkeletons(count = 12) {
  return Array.from(
    { length: count },
    () => `
      <article class="article-card article-card--skeleton" aria-hidden="true">
        <div class="article-card__link">
          <div class="article-card__skeleton-image"></div>
          <div class="article-card__body">
            <div class="article-card__skeleton-line article-card__skeleton-line--title"></div>
            <div class="article-card__skeleton-line"></div>
            <div class="article-card__skeleton-line article-card__skeleton-line--short"></div>
            <div class="article-card__skeleton-action"></div>
          </div>
        </div>
      </article>
    `,
  ).join("");
}
