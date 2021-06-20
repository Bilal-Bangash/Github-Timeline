import { useState, Fragment } from 'react';
import { toast as showToast } from 'react-toastify';
import { useQuery } from '../hooks';
import { Api } from '../services';
import { ListItem } from '../components';

function HomeScreen() {
  const [userId, setUserId] = useState('Bilal-Bangash');
  const [timeline, setTimeline] = useState([]);
  const { fetch, isLoading } = useQuery(
    Api.githubTimeline.getTimelineResponse,
    {
      onError: () => {
        showToast.error('Invalid UserName');
      },
      onComplete: (profile) => {
        console.log('%cProfile', 'color:green;font-size:30px;', profile);
        setTimeline(profile);
      },
      variables: userId,
    }
  );
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
      {!isLoading && timeline && (
        <ul className='timeline'>
          {timeline?.map((gitRepo, index) => (
            <ListItem item={gitRepo} key={index} index={index} />
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default HomeScreen;
