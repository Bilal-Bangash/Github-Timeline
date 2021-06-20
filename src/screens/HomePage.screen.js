import { useState, Fragment } from 'react';
import { useQuery } from '../hooks';
import { Api } from '../services';
import { ListItem } from '../components';

function HomeScreen() {
  const [userId, setUserId] = useState('Bilal-Bangash');
  const { fetch, isLoading, error, data } = useQuery(
    Api.githubTimeline.getTimelineResponse,
    {
      onComplete: (data) => {
        localStorage.setItem('user-timeline', JSON.stringify(data));
      },
      variables: userId,
    }
  );
  const userTimeline =
    data || JSON.parse(localStorage.getItem('user-timeline'));
  console.log('%cuserTime', 'color:green;font-size:30px;', userTimeline);
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
      {!error && userTimeline && (
        <ul className='timeline'>
          {userTimeline?.map((gitRepo, index) => (
            <ListItem item={gitRepo} key={index} index={index} />
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default HomeScreen;
