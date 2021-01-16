'use strict';

const {
  buildUserYoutubeFeed,
  //searchYoutubeVideos
} = require('..');

const searchResults = require('./mockSearchResults');

if (module === require.main) {
  //const searchTerm = 'sochi 2014';
  //searchYoutubeVideos(searchTerm).catch(console.error);

  const userId = 1;
  const timeAvailability = {
    minutesPerDay: [15, 120, 30, 150, 20, 40, 90],
  };
  const userYoutubeFeed = buildUserYoutubeFeed(
    searchResults,
    timeAvailability,
    userId
  );
  console.info(JSON.stringify(userYoutubeFeed, null, 2));
}
