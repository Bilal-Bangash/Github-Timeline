import './App.css';
import { ToastContainer ,toast as showToast } from 'react-toastify';
import { useQuery } from './hooks';
import { Api } from './services';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isLoading } = useQuery(Api.githubTimeline.getTimelineResponse, {
    onError: () => {
      console.log('%cError','color:red;font-size:30px;');
      showToast.error('Invalid UserName')
    },
    onComplete: (profile) => {
      console.log('%cProfile','color:green;font-size:30px;',profile);
    },
    variables:'Bilal-Bangash123'
  });
  return (
    <div className="App">
      Git Timeline
      <ToastContainer hideProgressBar={false} />
    </div>
  );
}

export default App;
