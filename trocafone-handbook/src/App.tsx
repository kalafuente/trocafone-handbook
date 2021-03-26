import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Values from "./components/values"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <Link to="/trocafone-handbook">Home</Link> <br></br>
              <Link to="/trocafone-handbook/about">Trocafone</Link><br></br>
              <Link to="/trocafone-handbook/values">vida</Link><br></br>
            </nav>
            <Switch>
              <Route exact path="/trocafone-handbook" component={Home} />
              <Route path="/trocafone-handbook/about" component={About} />
              <Route path="/trocafone-handbook/values" component={Values} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
