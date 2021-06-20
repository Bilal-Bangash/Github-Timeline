import { useState, Fragment } from 'react';
import { toast as showToast } from 'react-toastify';
import { useQuery } from '../hooks';
import { Api } from '../services';
import { ListItem } from '../components';

function HomeScreen() {
  const [userId, setUserId] = useState('Bilal-Bangash');
  const { fetch, isLoading, error, data } = useQuery(
    Api.githubTimeline.getTimelineResponse,
    {
      onError: () => {
        // showToast.error('User not found');
      },
      variables: userId,
    }
  );
  console.log('%ceror', 'color:green;font-size:30px;', error);
  return (
    <Fragment>
      <input
        type='text'
        placeholder='Enter Git User ID....'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type='submit' onClick={() => fetch()}>
        Generate
      </button>
      {isLoading && <div>Fetching Data</div>}
      {!isLoading && !error && data && (
        <ul className='timeline'>
          {data?.map((gitRepo, index) => (
            <ListItem item={gitRepo} key={index} index={index} />
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default HomeScreen;
