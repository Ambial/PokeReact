import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Views/About'

function App() {
  return (
    <Router>
      <div className="App">
        <h3 className='text-2xl'>Hello React World!</h3>
      </div>

      <Switch>
        <Route path='/about'>
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
