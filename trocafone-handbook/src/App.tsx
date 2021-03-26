import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Values from "./components/values"
import Navigation from './components/menu/index';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/trocafone-handbook" component={Home} />
          <Route path="/trocafone-handbook/about" component={About} />
          <Route path="/trocafone-handbook/values" component={Values} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
