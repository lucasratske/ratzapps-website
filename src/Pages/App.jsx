import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Presentation from './Presentation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import PageContainer from '../Components/PageContainer/PageContainer';

const App = () => (
  <Router>
    <Navbar />
    <PageContainer>
      <Switch>
        <Route exact path="/">
          <Presentation />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </PageContainer>
  </Router>
);

export default App;
