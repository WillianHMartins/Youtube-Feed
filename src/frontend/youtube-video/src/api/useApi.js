import { useState, useEffect } from 'react';

import { get } from './http';

const useApi = (initialUrl, initialData, { token } = {}) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let aborted = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await get(url, token);
        if (!aborted) {
          setData(result);
        }
      } catch (error) {
        if (!aborted) {
          setIsError(true);
        }
      }
      if (!aborted) {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // cleanup
      aborted = true;
    };
  }, [token, url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useApi;
