import { useState } from 'react';
import PropTypes from 'prop-types';

const useQuery = (
  request,
  { onError = () => {}, onComplete = () => {}, variables } = {}
) => {
  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [data, setData] = useState(null);

  const fetch = () => {
    onRequest();
  };

  const onRequest = async () => {
    setLoading(true);

    setError(null);

    await request(variables)
      .then((response) => {
        const { data } = response || {};
        setData(data);

        onComplete(data);
      })
      .catch((error) => {
        setError(error);
        onError(error);
      });

    setLoading(false);
  };

  return { fetch, isLoading, error, data };
};

useQuery.propTypes = {
  onError: PropTypes.func,
  onComplete: PropTypes.func,
  variables:
    PropTypes.bool || PropTypes.string || PropTypes.object || PropTypes.array,
  request: PropTypes.func.isRequired,
};

export default useQuery;
