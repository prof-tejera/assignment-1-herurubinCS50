import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import './App.css'

import './components/generic/bar-fill/bar-fill.css';
import './components/generic/button/button.css';
import './components/generic/numerical-readout/readout.css';
import './components/timers/Stopwatch/stop-watch.css';
import './components/timers/Countdown/countdown.css';
import './components/timers/XY/xy.css';

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <Container>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/">
            <TimersView />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
