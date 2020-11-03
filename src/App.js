import Home from './components/Home';
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/logIn">
          <LogIn/>
        </Route>
        <Route path="/createAccount">
          <CreateAccount/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
