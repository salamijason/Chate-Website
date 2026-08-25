/**
 * @file article.js
 * @description Controller for the single Article reader page — fetches one Blogger post by its `id` query parameter, sanitizes and renders its full content, and updates the browser tab title for the reading experience.
 * @module pages/article
 */

import DOMPurify from "dompurify";
import { mountLayout } from "../components/layout.js";
import { fetchArticle } from "../services/blogger-api.js";
import {
  formatDate,
  formatLabels,
  escapeHtml,
} from "../utils/article-utils.js";
import { wrapMyanmarScript } from "../utils/text-utils.js";

const BACK_LINK_HTML = `
  <a class="article-reader__back" href="/articles.html">
    <span class="article-reader__back-icon" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </span>
    All Articles
  </a>
`;

async function initArticlePage() {
  try {
    await mountLayout();
  } catch (err) {
    console.error("Failed to mount layout:", err);
  }

  const panel = document.getElementById("article-reader");
  if (!panel) return;

  const params = new URLSearchParams(location.search);
  const articleId = params.get("id");

  if (!articleId) {
    renderState(panel, "No article was specified.", "error");
    return;
  }

  renderState(panel, "Loading article…", "loading");

  try {
    const article = await fetchArticle(articleId);

    if (!article) {
      renderState(panel, "This article could not be found.", "error");
      return;
    }

    renderArticle(panel, article);
    updateTabTitle(article);
  } catch (err) {
    console.error("Failed to load article:", err);
    renderState(panel, "This article could not be loaded right now.", "error");
  }
}

function renderState(panel, message, modifier) {
  panel.innerHTML = `
    <div class="article-reader__article">
      <p class="series-state series-state--${modifier}">${escapeHtml(message)}</p>
    </div>
  `;
}

function renderArticle(panel, article) {
  const title = wrapMyanmarScript(escapeHtml(article.title));
  const date = wrapMyanmarScript(escapeHtml(formatDate(article.published)));
  const labels = wrapMyanmarScript(escapeHtml(formatLabels(article.labels)));

  const sanitizedContent = DOMPurify.sanitize(article.content, {
    ADD_ATTR: ["target", "rel"],
    FORBID_ATTR: ["style"],
  });
  const safeContent = wrapMyanmarScript(sanitizedContent);

  panel.innerHTML = `
    <article class="article-reader__article">
      ${BACK_LINK_HTML}
      <header class="article-reader__header">
        <h1 class="article-reader__title">${title}</h1>
        <p class="article-reader__date">${date}</p>
        <p class="article-reader__labels">${labels}</p>
      </header>
      <div class="article-reader__content">${safeContent}</div>
    </article>
  `;
}

function updateTabTitle(article) {
  const plainTitle = article.title || "Article";
  document.title = `${plainTitle} - ချိတ်`;
}

initArticlePage();
