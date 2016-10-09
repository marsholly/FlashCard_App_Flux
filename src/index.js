import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';


import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import ManageQuestions from './components/ManageQuestions';
import PracticeNavbar from './components/PracticeNavbar';
import CreateNewQ from './components/CreateNewQ';
import EditAndDelQ from './components/EditAndDelQ';


injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route path='/' component={Navbar}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path='manage' component={ManageQuestions}>
        <Route path='addQuestion' component={CreateNewQ} />
        <Route path='editQuestion' component={EditAndDelQ} />
      </Route>
      <Route path='question' component={PracticeNavbar}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
