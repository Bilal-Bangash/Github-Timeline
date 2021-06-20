import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomeScreen } from './screens';
import './App.css';

function App() {
  return (
    <div className='App'>
      <b>GIT Timeline</b>
      <ToastContainer hideProgressBar={false} />
      <Router>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
