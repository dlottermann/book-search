import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Detail from './components/Detail';
import { initialState, reducer } from "./reducers";
import { StateProvider } from "./store";
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
     <Router>
    
      <Route exact path="/" component={App} />
    {/* <Route exact path="/detail/:id" render={(props) => <Detail {...props} />} />
      */}
    <Route path="/detail/:id">
          <Detail />
        </Route>

     </Router>
  </StateProvider>,
  document.getElementById('root')
);

