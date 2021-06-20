import { Link } from 'react-router-dom';
const ReposDetail = ({ location: { state: { item = {} } = {} } }) => {
  console.log('%citem', 'color:green;font-size:30px;', item);
  //   const repoItem = [
  //     { name: item.name },
  //     { description: item.description },
  //     { url: item.svn_url },
  //     { forks: item.forks_count },
  //     { watchers: item.watchers_count },
  //     { stars: item.stars },
  //     { createdAt: item.created_at },
  //     { updatedAt: item.updated_at },
  //     { language: item.language },
  //     { openIssues: item.open_issues },
  //     { size: item.size },
  //   ];
  return (
    <div className='table-style'>
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                <b>Name:</b>
              </label>
            </td>
            <td>
              <text>{item.name}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Description:</b>
              </label>
            </td>
            <td>
              <text>{item.description}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>URL:</b>
              </label>
            </td>
            <td>
              <text>{item.svn_url}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Forks Count:</b>
              </label>
            </td>
            <td>
              <text>{item.forks_count}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Watchers Count:</b>
              </label>
            </td>
            <td>
              <text>{item.watchers_count}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Stars:</b>
              </label>
            </td>
            <td>
              <text>{item.stargazers_count}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Created At:</b>
              </label>
            </td>
            <td>
              <text>{new Date(item.created_at).toDateString()}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Updated At:</b>
              </label>
            </td>
            <td>
              <text>{new Date(item.updated_at).toDateString()}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Description:</b>
              </label>
            </td>
            <td>
              <text>{item.language}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Open Issues:</b>
              </label>
            </td>
            <td>
              <text>{item.open_issues}</text>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <b>Size:</b>
              </label>
            </td>
            <td>
              <text>{item.size}</text>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default ReposDetail;
