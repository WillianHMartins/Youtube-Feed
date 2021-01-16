'use strict';

const {
  buildUserYoutubeFeed,
  searchYoutubeVideos,
} = require('../../libs/youtube');

const { errorHandler } = require('../errors');

module.exports = async ctx => {
  try {
    const userId = ctx.params.id;
    const { searchTerm, timeAvailability } = ctx.request.body;

    const searchResults = await searchYoutubeVideos(searchTerm);
    const videoFeed = buildUserYoutubeFeed(
      searchResults,
      timeAvailability,
      userId
    );

    ctx.status = 200; // OK
    ctx.body = {
      status: ctx.status,
      videoFeed,
    };
  } catch (error) {
    console.log(error);
    errorHandler(ctx, error);
  }
};
