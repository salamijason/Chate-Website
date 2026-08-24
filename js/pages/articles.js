/**
 * @file articles.js
 * @description Controller for the Articles page — wires the Blogger API service,
 * the article-card component, filter buttons, "load more" pagination, and hash routing.
 * @module pages/articles
 */

import { mountLayout } from "../components/layout.js";
import { renderSeriesHeading } from "../components/series-heading.js";
import { renderArticlePagination } from "../components/article-pagination.js";
import { fetchArticles } from "../services/blogger-api.js";
import { renderArticleCards } from "../components/article-card.js";
import { resolveActiveKey } from "../utils/hash-routing.js";

async function initArticlesPage() {
  try {
    await mountLayout();
  } catch (err) {
    console.error("Failed to mount layout:", err);
  }

  const PAGE_SIZE = 12;
  const DEFAULT_HASH = "scholarships";

  const ARTICLE_FILTERS = [
    { key: "scholarships", label: "Scholarships" },
    { key: "testing-and-curriculum", label: "Testing & Curriculum" },
    { key: "uk", label: "UK" },
    { key: "us", label: "US" },
    { key: "about-chate", label: "About ချိတ် - The Hook" },
    { key: "all-articles", label: "All Articles" },
  ];

  let filterButtons = {};

  const articlesPanel = document.getElementById("article-cards");
  const articleHeading = document.getElementById("article-heading");
  const pagination = document.getElementById("article-pagination");

  const articleSeries = {
    scholarships: { label: "Scholarships", heading: "Scholarships" },
    "testing-and-curriculum": {
      label: "Testing & Curriculum",
      heading: "Testing & Curriculum",
    },
    uk: { label: "UK", heading: "UK" },
    us: { label: "US", heading: "US" },
    "about-chate": {
      label: "About ချိတ် - The Hook",
      heading: "About ချိတ် - The Hook",
    },
    "all-articles": { label: null, heading: "Articles" },
  };

  let pages = [];
  let totalItems = 0;
  let requestVersion = 0;
  let discoveryPromise = null;

  function highlightActiveButton(activeKey) {
    Object.entries(filterButtons).forEach(([key, button]) => {
      button?.classList.toggle("clicked", key === activeKey);
    });
  }

  function renderHeading(activeKey) {
    articleHeading.innerHTML = renderSeriesHeading({
      titleMain: "All",
      titleAccent: articleSeries[activeKey].heading,
      filters: ARTICLE_FILTERS,
    });

    filterButtons = Object.fromEntries(
      ARTICLE_FILTERS.map(({ key }) => [
        key,
        document.getElementById(`${key}-button`),
      ]),
    );

    highlightActiveButton(activeKey);

    Object.entries(filterButtons).forEach(([key, button]) => {
      button?.addEventListener("click", () => {
        location.hash = key;
      });
    });
  }

  function renderPagination(activePage) {
    const totalPages = totalItems
      ? Math.ceil(totalItems / PAGE_SIZE)
      : pages.length;
    const startItem = activePage * PAGE_SIZE + 1;
    const currentItems = pages[activePage]?.items || [];
    const endItem = totalItems
      ? Math.min((activePage + 1) * PAGE_SIZE, totalItems)
      : startItem + currentItems.length - 1;
    const displayedTotal = totalItems || endItem;

    pagination.innerHTML = renderArticlePagination({
      activePage,
      totalPages,
      startItem,
      endItem,
      displayedTotal,
    });

    pagination.querySelectorAll("[data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        showPage(Number(button.dataset.page), resolveActiveKey());
      });
    });
  }

  async function fetchPage(pageIndex, activeKey) {
    const page = pages[pageIndex];

    if (!page || page.items) return;

    const response = await fetchArticles({
      maxResults: PAGE_SIZE,
      pageToken: page.token,
      label: articleSeries[activeKey].label,
    });

    console.log(response);

    page.items = response.items || [];
    page.nextToken = response.nextPageToken || "";

    if (page.nextToken && !pages[pageIndex + 1]) {
      pages.push({ token: page.nextToken });
    }
  }

  async function discoverRemainingPages(activeKey, expectedVersion) {
    while (pages[pages.length - 1]?.nextToken) {
      pages.push({ token: pages[pages.length - 1].nextToken });
      await fetchPage(pages.length - 1, activeKey);

      if (expectedVersion !== requestVersion) return;
    }

    totalItems = pages.reduce(
      (count, page) => count + (page.items?.length || 0),
      0,
    );
  }

  async function showPage(pageIndex, activeKey) {
    const currentRequestVersion = requestVersion;
    const totalPages = totalItems ? Math.ceil(totalItems / PAGE_SIZE) : null;

    if (
      pageIndex < 0 ||
      (totalPages && pageIndex >= totalPages) ||
      (pageIndex >= pages.length && !pages[pages.length - 1]?.nextToken)
    ) {
      return;
    }

    while (!pages[pageIndex]?.items && pages.length <= pageIndex) {
      await fetchPage(pages.length - 1, activeKey);

      if (currentRequestVersion !== requestVersion) return;
      if (!pages[pages.length - 1]?.nextToken && !pages[pageIndex]) return;
    }

    await fetchPage(pageIndex, activeKey);

    if (currentRequestVersion !== requestVersion || !pages[pageIndex]) return;

    articlesPanel.innerHTML = renderArticleCards(pages[pageIndex].items);
    renderPagination(pageIndex);

    if (pageIndex === 0 && !discoveryPromise) {
      discoveryPromise = discoverRemainingPages(
        activeKey,
        currentRequestVersion,
      )
        .then(() => {
          if (currentRequestVersion === requestVersion) {
            renderPagination(pageIndex);
          }
        })
        .finally(() => {
          discoveryPromise = null;
        });
    }
  }

  const VALID_KEYS = new Set(Object.keys(articleSeries));

  function update() {
    const activeKey = resolveActiveKey(VALID_KEYS, DEFAULT_HASH);
    requestVersion += 1;
    pages = [{ token: "" }];
    totalItems = 0;
    discoveryPromise = null;
    renderHeading(activeKey);
    pagination.innerHTML = "";
    showPage(0, activeKey).catch((error) => {
      console.error("Failed to load articles:", error);
      articlesPanel.innerHTML = `<p class="series-state series-state--error">Articles could not be loaded right now.</p>`;
    });
  }

  window.addEventListener("hashchange", update);
  update();
}

initArticlesPage();
