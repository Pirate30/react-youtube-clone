import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Recs from "./components/recs/Recs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/search-results/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:input">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Recs />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
