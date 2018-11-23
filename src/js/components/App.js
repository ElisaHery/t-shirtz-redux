import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import List from "./List";
// import Form from "./Form";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import "./App.css";

const App = () => (
  <div>
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/themes" component={Themes} />
      </Switch>
    </Router> */}

    <Header />
    <div className="entire_page">
      <Sidebar />
      <Main />
    </div>
  </div>
);
export default App;
