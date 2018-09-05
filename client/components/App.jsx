
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';

import TodoList from './TodoList';

export default class App extends React.Component {
  
  render() {
    return (
      <ion-app mode="ios">
        <ion-header translucent>
          <ion-toolbar color="secondary">
            <ion-buttons slot="start" class="sc-ion-buttons-ios-h sc-ion-buttons-ios-s hydrated">
              <ion-menu-button class="button hydrated"></ion-menu-button>
            </ion-buttons>
            <ion-title>Todos</ion-title>
          </ion-toolbar>
        </ion-header>
        <div>
          <TodoList />
        </div>
      </ion-app>
    ); 
  }
  
}
