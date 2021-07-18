import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { Home } from './pages/Home';
import { Simulate } from './pages/Simulate';

export const App: React.FC = () => {
  return <Router>
    <div className={`grid min-h-screen`} style={{ gridTemplate: 'minmax(0, auto) minmax(0, 1fr) minmax(0, auto) / minmax(0, 1fr)' }}>
      <AppBar />
      <div>
        <Switch>
          <Route path="/:league/:contest">
            <Simulate />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/">
            <Redirect to={`/`}/>
          </Route>
        </Switch>
      </div>
      <div className="p-4 bg-green-200">Footer</div>
    </div>
  </Router>;
};
