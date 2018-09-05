import './main.html'

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
