import { useState, Fragment } from 'react';
import { useQuery } from '../hooks';
import { Api } from '../services';
import { ListItem, FilterRepos } from '../components';

function HomeScreen() {
  const [userId, setUserId] = useState('Bilal-Bangash');
  const [userTimeline, setUserTimeline] = useState(
    JSON.parse(localStorage.getItem('user-timeline')) || []
  );
  const { fetch, error } = useQuery(Api.githubTimeline.getTimelineResponse, {
    onComplete: (data) => {
      setUserTimeline(data);
      localStorage.setItem('user-timeline', JSON.stringify(data));
    },
    variables: userId,
  });

  const handleFilter = (e) => {
    const reposFilter = JSON.parse(
      localStorage.getItem('user-timeline')
    )?.filter((repo) => {
      if (e.target.name === 'month')
        return (
          parseInt(e.target.value) === new Date(repo.created_at).getMonth() + 1
        );
      else {
        return (
          parseInt(e.target.value) === new Date(repo.created_at).getFullYear()
        );
      }
    });
    reposFilter.length
      ? setUserTimeline(reposFilter)
      : setUserTimeline(JSON.parse(localStorage.getItem('user-timeline')));
  };

  return (
    <Fragment>
      <div className='container'>
        <input
          type='text'
          placeholder='Enter Git User ID....'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type='submit' onClick={() => fetch()}>
          Generate
        </button>
      </div>
      {!error && userTimeline && (
        <div>
          <ul className='timeline'>
            <FilterRepos handleFilter={handleFilter} />
            {userTimeline?.map((gitRepo, index) => (
              <ListItem item={gitRepo} key={index} index={index} />
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default HomeScreen;
