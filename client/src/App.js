import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Dashboard from './components/Dashboard';
import AuthProvider from './contexts/AuthContext';
import Chat from './components/Chat';
import MyPost from './components/MyPosts';
import PrivateRoute from './components/Private-Routes/PrivateRoute';
import Profile from "./components/Profile"
import Post from './components/Post';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/chat" exact  component={Chat} />
          <Route path="/myposts" exact  component={MyPost} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/post/del_edit/:id" exact component={Post} />
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
