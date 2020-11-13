import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import CreateAccount from './components/CreateAccount/CreateAccount';
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
