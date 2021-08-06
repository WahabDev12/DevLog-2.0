import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Dashboard from './components/Dashboard';
import AuthProvider from './contexts/AuthContext';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
