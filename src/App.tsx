import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Simulate } from './pages/Simulate';

export const App: React.FC = () => {
  return <Router>
    <div className={`grid min-h-screen`} style={{ gridTemplateRows: 'minmax(0, auto) minmax(0, 1fr) minmax(0, auto)' }}>
      <div className="p-4 bg-green-50">
        <div>
          <Link to="/">Home</Link> | <Link to="/whatis">What is ?</Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/:league/:contest">
            <Simulate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="p-4 bg-green-200">Footer</div>
    </div>
  </Router>;
};
