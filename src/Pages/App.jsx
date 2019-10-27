import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Presentation from './Presentation/Presentation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import PageContainer from '../Components/PageContainer/PageContainer';
import { spring, AnimatedSwitch } from 'react-router-transition';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

const App = () => (
  <Router>
    <Navbar />
    <PageContainer>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        <Route exact path="/">
          <Presentation />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </AnimatedSwitch>
    </PageContainer>
  </Router>
);

export default App;
