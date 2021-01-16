'use strict';

const {
  youtube: {
    pagination: { maxVideoCount, maxResultsPerPage },
  },
} = require('config');
const { getAccessToken } = require('./auth');
const { makeYoutubeAPIRequest } = require('./http');
const {
  extractRelevantData,
  queryUrl,
  sliceVideoIdList,
  updateQueryParams,
} = require('./helpers');

const searchByResource = async (accessToken, resource, searchQueryParams) => {
  let pageCounter = 0;
  let queryParams = searchQueryParams;

  const convergedItems = [];
  const url = queryUrl(resource);
  const maxNumOfPages = Math.floor(maxVideoCount / maxResultsPerPage);

  while (pageCounter < maxNumOfPages) {
    const pageResults = await makeYoutubeAPIRequest(
      accessToken,
      url,
      queryParams
    );

    if (!pageResults.error) {
      const { items, nextPageToken } = pageResults;

      const relevantData = extractRelevantData(items, resource);
      convergedItems.push(...relevantData);

      if (nextPageToken === undefined) {
        break;
      }

      pageCounter++;
      queryParams = updateQueryParams(
        maxResultsPerPage,
        nextPageToken,
        resource
      );
    } else {
      console.info(JSON.stringify(pageResults.error, null, 2));
      const {
        error: { message },
      } = pageResults;
      throw new Error(message);
    }
  }

  return convergedItems;
};

const searchYoutubeVideos = async searchTerm => {
  let searchResults = [];
  const accessToken = await getAccessToken();

  if (accessToken !== '') {
    const ytVideoIds = await searchByResource(accessToken, 'search', {
      part: 'id',
      q: searchTerm,
      maxResults: maxResultsPerPage,
    });

    // Remove undefined video IDs
    const filteredVideoIds = Array.isArray(ytVideoIds)
      ? ytVideoIds.filter(videoId => videoId !== undefined)
      : [];

    // Apparently, the 'video' resource does not allow queries with a comma-separated
    // list, for the 'id' query parameter, with more than 50 IDs, which is the maximum
    // page size specified in the docs. So here the video ID list is slice into chunks
    // of size 50, whenever necessary.
    const commaSeparatedIds =
      filteredVideoIds.length > maxResultsPerPage
        ? sliceVideoIdList(maxResultsPerPage, filteredVideoIds)
        : [filteredVideoIds.join(',')];

    const promises = commaSeparatedIds.map(async videoIds => {
      const data = await searchByResource(accessToken, 'videos', {
        part: 'contentDetails,snippet',
        id: videoIds,
      });
      // Returns a list of video-related data.
      return data;
    });

    // Flatten the pages returned by the resolved promises
    const resolvedPromises = await Promise.all(promises);
    searchResults = resolvedPromises.flat();
  }

  return searchResults;
};

const api = {
  searchYoutubeVideos,
};

module.exports = api;
