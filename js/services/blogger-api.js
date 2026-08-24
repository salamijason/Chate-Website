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

/**
 * @param {{ maxResults: number, pageToken?: string, label?: string|null }} options
 * @returns {Promise<{ items: object[], nextPageToken?: string }>}
 */
export async function fetchArticles({
  maxResults,
  pageToken = "",
  label = null,
}) {
  const { data } = await axios.get(buildUrl({ maxResults, pageToken, label }));
  return data;
}
