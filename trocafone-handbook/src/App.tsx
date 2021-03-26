import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Values from "./components/values"
import Navigation from './components/menu/index';
import { AppContainer } from './AppStyles';

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/trocafone-handbook" component={Home} />
          <Route path="/trocafone-handbook/about" component={About} />
          <Route path="/trocafone-handbook/values" component={Values} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
