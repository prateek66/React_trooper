import Dashboard from './components/dashboard';
import Add_user from "./components/add_user";
import Edit_user from "./components/Edit_user";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router> 
    <Switch>
      <Route path="/" exact component={Dashboard}></Route>
      <Route path="/add/users" exact component={Add_user} />
      <Route path="/user/edit/:userId" exact component={Edit_user} />
      <Route> 404 not found!!</Route>
    </Switch>
  </Router>
  );
}

export default App;
