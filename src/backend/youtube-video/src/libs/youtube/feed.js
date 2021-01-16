'use strict';

const { youtubeRedirectUrl } = require('./helpers');
const { calculateWordFrequency, sortFrequenciesDesc } = require('../nlp');

const getTitleAndDescriptionTopWords = (
  description,
  language,
  title,
  topWordsQty
) => {
  const titleAndDescription = `${title} ${description}`;
  const { detectedLanguage, wordFrequencies } = calculateWordFrequency(
    language,
    titleAndDescription
  );
  const topWords = sortFrequenciesDesc(wordFrequencies).slice(0, topWordsQty);

  return {
    detectedLanguage,
    topWords,
  };
};

const buildUserYoutubeFeed = (searchResults, timeAvailability, userId) => {
  let { minutesPerDay } = timeAvailability;
  const longestDay = minutesPerDay.reduce((a, b) => Math.max(a, b));
  const userYoutubeFeed = { userId, feed: [] };

  // Auxiliary, to be used in later feed filtering
  const originalFeedSize = minutesPerDay.length;

  // Videos longer than the longest day will be ignored
  const filteredSearchResults = searchResults.filter(
    videoData => videoData.duration <= longestDay
  );

  if (filteredSearchResults.length > minutesPerDay.length) {
    const sizeDiff = filteredSearchResults.length - minutesPerDay.length;
    console.info(
      `You need possibly ${sizeDiff} more days to watch all videos.`
    );
    // Here is attributed to the additional days, the maximum time availability
    const additionalDays = [...Array(sizeDiff).keys()].map(() => longestDay);
    minutesPerDay = minutesPerDay.concat(additionalDays);
  }

  // Initiates index shifting, to ensure that the selected
  // videos for the feed will not be revisited in the loop
  let indexShift = 0;

  minutesPerDay.forEach(dailyMaxTime => {
    // Cumulative sum for the videos' durations
    let totalMinutes = 0;
    // Object that contain data relative to a daily YouTube video feed
    const dailyFeed = {
      dailyMaxTime: parseFloat(dailyMaxTime),
      totalMinutes,
      videos: [],
    };

    for (let i = indexShift; i < filteredSearchResults.length; i++) {
      const {
        id,
        duration,
        title,
        description,
        language,
        regionRestriction: restrictions,
        thumbnail,
      } = filteredSearchResults[i];
      totalMinutes += duration;

      // If the user still has time to watch videos, updates the feed
      if (totalMinutes <= dailyMaxTime) {
        const topWords = getTitleAndDescriptionTopWords(
          description,
          language,
          title,
          5
        );

        dailyFeed.totalMinutes = totalMinutes;
        dailyFeed.videos.push({
          description,
          duration,
          language,
          restrictions,
          title,
          topWords,
          thumbnail,
          url: youtubeRedirectUrl(id),
        });
        // Increments the index shift, to avoid starting the loop
        // at the beginning of the searchResults
        indexShift++;
      }
    }
    // Saves the feed for the day
    userYoutubeFeed.feed.push(dailyFeed);
  });

  // Filter the additional days that weren't used to include videos in the feed
  const feedItemsToBeRemoved = userYoutubeFeed.feed
    .slice(originalFeedSize - 1, userYoutubeFeed.feed.length)
    .filter(feedItem => {
      const { dailyMaxTime, totalMinutes, videos } = feedItem;
      return (
        dailyMaxTime === longestDay && totalMinutes === 0 && videos.length === 0
      );
    });

  // Remove the unused days from the feed
  return userYoutubeFeed.feed.filter(
    feedItem => !feedItemsToBeRemoved.includes(feedItem)
  );
};

const feed = {
  buildUserYoutubeFeed,
};

module.exports = feed;
