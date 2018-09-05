
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import TodoList from './TodoList';


export default class App extends React.Component {
  
  render() {
    return (
      <ion-app>
        <ion-nav root='todolist-page'>
        </ion-nav>
      </ion-app>
    ); 
  }
  
}
