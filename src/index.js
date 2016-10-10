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
import RandomQuestions from './components/RandomQuestions';
import CategoryQuestions from './components/CategoryQuestions';


injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route path='/' component={Navbar}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path='manage' component={ManageQuestions}>
        <Route path='addQuestion' component={CreateNewQ} />
        <Route path='editQuestion' component={EditAndDelQ} />
      </Route>
      <Route path='practices' component={PracticeNavbar}>
        <Route path="randomQuestion" component={RandomQuestions}/>
        <Route path='categoryQuestion/:categoryName' component={CategoryQuestions}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
