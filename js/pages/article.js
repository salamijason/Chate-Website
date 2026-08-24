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
  panel.innerHTML = `<p class="series-state series-state--${modifier}">${escapeHtml(message)}</p>`;
}

function renderArticle(panel, article) {
  const title = wrapMyanmarScript(escapeHtml(article.title));
  const date = wrapMyanmarScript(escapeHtml(formatDate(article.published)));
  const labels = wrapMyanmarScript(escapeHtml(formatLabels(article.labels)));
  const safeContent = DOMPurify.sanitize(article.content, {
    ADD_ATTR: ["target", "rel"],
  });

  panel.innerHTML = `
    <article class="article-reader__article">
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
