import React, { useState } from 'react';

import { number, shape } from 'prop-types';
import ReactJson from 'react-json-view';

import Filters from '../../../components/Filters';
import Main from '../../App/Main';
import AwaitingPromise from '../../App/Loading/AwaitingPromise';
import { getUserVideoFeed } from '../../../api/users';

const VideoFeed = ({ data: { user } }) => {
  const [results, setResults] = useState({});

  const handleVideoFeedQuery = async filters => {
    console.warn(filters);
    const { id } = user;
    const { searchTerm, timeAvailability } = filters;
    const body = {
      searchTerm,
      timeAvailability,
    };

    return getUserVideoFeed({
      id,
      body,
    });
  };

  return (
    <Main>
      <Filters
        onSearch={handleVideoFeedQuery}
        onSearchSuccess={result => {
          console.info(result);
          setResults(result);
        }}
      />
      <AwaitingPromise />
      {// TODO: remove this and implement better feed renderization
      results && (
        <ReactJson
          displayDataTypes
          enableClipboard
          iconStyle="circle"
          src={results}
          theme="monokai"
        />
      )}
    </Main>
  );
};

VideoFeed.propTypes = {
  data: shape({
    user: shape({
      id: number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default VideoFeed;
