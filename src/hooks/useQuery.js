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
        console.log('%cdata', 'color:green;font-size:30px;', data);
        setData(data);

        onComplete(data);
      })
      .catch((error) => {
        setError(error);
        console.log('%cerror is', 'color:red;font-size:30px;', error);
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
