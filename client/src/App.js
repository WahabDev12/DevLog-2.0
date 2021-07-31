import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
