/* eslint-disable no-useless-escape */

'use strict';

const stopWord = require('stopword');
const { getLanguageCodeFromString } = require('./languageDetection');

const prepareString = (language, string) => {
  let newString = string
    // Normalize
    .toLowerCase()
    // Strip quotes and brackets
    .replace(/["""(\[{}\])]|\B['‘]([^'’]+)['’]/g, '$1')
    // Strip dashes and ellipses
    .replace(/[‒–—―…]|--|\.\.\./g, ' ')
    // Strip punctuation marks
    .replace(/[!?;:.,]\B/g, '');

  // Perform the language detection of the 'title' + 'description' string,
  // if the YouTube API language is not defined, and make sure that
  // the detected language code is supported by the lib that removes the stop words.
  const detectedLanguage = language || getLanguageCodeFromString(newString);

  const languageCode = detectedLanguage
    ? Object.keys(stopWord).filter(code => code === detectedLanguage)[0]
    : null;

  // Remove stop words for the detected language. If no language is detected,
  // do the filtering for the default lib language, which is english.
  newString = languageCode
    ? stopWord.removeStopwords(newString.split(' '), stopWord[languageCode])
    : stopWord.removeStopwords(newString.split(' '));

  return {
    detectedLanguage: languageCode,
    preparedString: newString.join(' '),
  };
};

const calculateWordFrequency = (language, string) => {
  const { detectedLanguage, preparedString } = prepareString(language, string);

  const frequencyReducer = (frequencies, word) => {
    if (Object.prototype.hasOwnProperty.call(frequencies, word)) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
    return frequencies;
  };

  const matches = preparedString.match(/\w+/g);

  return {
    detectedLanguage,
    wordFrequencies: Array.isArray(matches)
      ? matches.reduce(frequencyReducer, {})
      : {},
  };
};

const sortFrequenciesDesc = wordFrequencies => {
  let sortedWords = [];

  sortedWords = Object.keys(wordFrequencies).map(key => {
    return {
      word: key,
      frequency: wordFrequencies[key],
    };
  });

  // Sort by count in descending order
  sortedWords.sort((a, b) => b.frequency - a.frequency);

  return sortedWords;
};

const wordFrequency = {
  calculateWordFrequency,
  sortFrequenciesDesc,
};

module.exports = wordFrequency;
