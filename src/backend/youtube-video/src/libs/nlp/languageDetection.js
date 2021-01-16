'use strict';

const LanguageDetect = require('languagedetect');

/**
 * Detects the language of the incoming string and
 * return a language code.
 * @param {string} string the string to be analyzed
 * @returns {string} languageCode a two-letter language code
 * @example returns 'en'
 * getLanguageCodeFromString('It\'s time to kick ass and chew bubble gum. And I\'m all outta gum!')
 */
const getLanguageCodeFromString = string => {
  const languageDetector = new LanguageDetect();

  // Set two-letter language format
  languageDetector.setLanguageType('iso2');

  /*
  The detections array comes in the format:
  [
    [ 'en', 0.5969230769230769 ],
    [ 'hu', 0.407948717948718 ],
    ...
  ]
  */
  const detections = languageDetector.detect(string);

  const maxRating = detections
    .flat() // returns [ 'en', 0.59.., 'hu', 0.40... ]
    .filter(item => !isNaN(item)) // returns [ 0.59.., 0.40... ]
    .reduce((a, b) => Math.max(a, b), 0); // returns 0.59

  const languageCode = detections.filter(
    detection => detection[1] === maxRating
  )[0][0]; // returns 'en'

  return languageCode;
};

const languageDetection = {
  getLanguageCodeFromString,
};

module.exports = languageDetection;
