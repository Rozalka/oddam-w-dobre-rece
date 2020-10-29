import Home from './components/Home';
import Local from './components/Local';
import Organizations from './components/Organizations';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/logIn"/>
        <Route path="/createAccount"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
