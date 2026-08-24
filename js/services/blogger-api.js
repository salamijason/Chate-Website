/**
 * @file blogger-api.js
 * @description Blogger API service — fetches posts with optional server-side label filtering and pagination.
 * @module services/blogger-api
 */

import BLOGGER_API_KEY from "../../src/bloggerapikey.js";

const BASE_URL = `https://www.googleapis.com/blogger/v3/blogs/136726928350551179/posts`;

function buildUrl({ maxResults, pageToken, label }) {
  const params = new URLSearchParams({ key: BLOGGER_API_KEY, maxResults });

  if (pageToken) params.set("pageToken", pageToken);
  if (label) params.set("labels", label);

  return `${BASE_URL}?${params}`;
}

function buildArticleUrl(articleId) {
  const postId = articleId.split("post-").pop();
  const params = new URLSearchParams({ key: BLOGGER_API_KEY });
  return `${BASE_URL}/${encodeURIComponent(postId)}?${params}`;
}

/**
 * @param {{ maxResults: number, pageToken?: string, label?: string|null }} options
 * @returns {Promise<{ items: object[], nextPageToken?: string }>}
 */
export async function fetchArticles({
  maxResults,
  pageToken = "",
  label = null,
}) {
  const response = await fetch(buildUrl({ maxResults, pageToken, label }));

  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.status}`);
  }

  return response.json();
}

export async function fetchArticle(articleId) {
  const response = await fetch(buildArticleUrl(articleId));

  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.status}`);
  }

  return response.json();
}
