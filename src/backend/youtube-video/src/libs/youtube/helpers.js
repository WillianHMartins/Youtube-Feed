'use strict';

const {
  youtube: {
    api: { allowedResources, baseUrl },
  },
} = require('config');

/**
 * Receives a time duration string in the format ISO8601 and returns
 * an object containing the duration components (years, months, etc.) and
 * also the equivalent value in minutes.
 * More info: https://en.wikipedia.org/wiki/ISO_8601#Durations
 * @param {*} durationString
 * @returns {Object}
 * @example
 * // returns
 *  {
 *    components: {
 *      sign: 1,
 *      years: 3,
 *      months: 6,
 *      weeks: 0,
 *      days: 4,
 *      hours: 12,
 *      minutes: 30,
 *      seconds: 5
 *    },
 *    durationInMinutes: 1820880300.08333333333333333
 *  }
 *  getDurationComponents("P3Y6M4DT12H30M5S");
 */
const getDurationComponents = durationString => {
  // Regex literal for P[n]Y[n]M[n]D, where [n] is the extracted number and:
  const periodRegex = /P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?/;
  // Regex literal for T[n]H[n]M[n]S, where [n] is the extracted number and:
  const timeRegex = /T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;

  const durationRegex = periodRegex.source + timeRegex.source;
  const matches = durationString.match(durationRegex);

  const extractNumericMatch = index =>
    matches[index] === undefined ? 0 : parseFloat(matches[index]);

  const components = {
    years: extractNumericMatch(2),
    months: extractNumericMatch(3),
    weeks: extractNumericMatch(4),
    days: extractNumericMatch(5),
    hours: extractNumericMatch(6),
    minutes: extractNumericMatch(7),
    seconds: extractNumericMatch(8),
  };

  const durationInMinutes =
    components.years * 12 * 30 * 24 * 60 +
    components.months * 30 * 24 * 60 +
    components.weeks * 7 * 24 * 60 +
    components.days * 24 * 60 +
    components.hours * 60 +
    components.minutes +
    components.seconds / 60;

  return {
    components,
    durationInMinutes,
  };
};

const extractVideoData = items => {
  return items.map(item => {
    const {
      id,
      snippet: {
        title,
        description,
        thumbnails: { default: thumbnail },
        defaultLanguage,
      },
      contentDetails: { duration: ISO8601Duration, regionRestriction },
    } = item;

    return {
      id,
      title,
      language: defaultLanguage !== undefined ? defaultLanguage : null,
      description,
      duration: getDurationComponents(ISO8601Duration).durationInMinutes,
      regionRestriction,
      thumbnail,
    };
  });
};

const extractVideoIds = items => {
  return items.map(item => {
    const {
      id: { videoId },
    } = item;
    return videoId;
  });
};

const extractRelevantData = (items, resource) => {
  switch (resource) {
    case 'search':
      return extractVideoIds(items);
    case 'videos':
      return extractVideoData(items);
    default:
      throw new Error(`Resource ${resource} not supported by the Youtube API.`);
  }
};

const queryUrl = resource => {
  return allowedResources.includes(resource) ? `${baseUrl}/${resource}` : '';
};

const sliceVideoIdList = (sliceSize, videoIds) => {
  let startIndex = 0;

  const slicedVideoIds = [];
  const listSize = videoIds.length;

  while (startIndex < listSize) {
    const commaSeparatedSlice = videoIds
      .slice(startIndex, sliceSize + startIndex)
      .join(',');
    slicedVideoIds.push(commaSeparatedSlice);
    startIndex += sliceSize;
  }

  return slicedVideoIds;
};

const updateQueryParams = (maxResults, pageToken, resource) => {
  let part = null;

  switch (resource) {
    case 'search':
      part = 'id';
      break;
    case 'videos':
      part = 'contentDetails,snippet';
      break;
    default:
      throw new Error(`Resource ${resource} not supported by the Youtube API.`);
  }

  return {
    part,
    pageToken,
    maxResults,
  };
};

const youtubeRedirectUrl = videoId =>
  `https://www.youtube.com/watch?v=${videoId}`;

const helpers = {
  extractRelevantData,
  getDurationComponents,
  queryUrl,
  sliceVideoIdList,
  updateQueryParams,
  youtubeRedirectUrl,
};

module.exports = helpers;
