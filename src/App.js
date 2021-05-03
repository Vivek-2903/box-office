import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route path exact="/starred">
        This is starred
      </Route>

      <Route> page 404 not found</Route>
    </Switch>
  );
}

export default App;
