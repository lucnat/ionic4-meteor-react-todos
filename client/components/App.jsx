
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';

import TodoList from './TodoList';

export default class App extends React.Component {

  onAdd() {
    console.log('yeah');
  }

  renderFab() {
    return (
      <ion-fab 
        onClick={this.onAdd.bind(this)}
        style={{bottom: 25, left: 25}} 
        slot="fixed" class="fab-horizontal-end fab-vertical-bottom fab-edge hydrated">
        <ion-fab-button ion-activable="" class="hydrated activated">
          <ion-icon name="add" style={{fontSize: 30}}></ion-icon>
        </ion-fab-button>
      </ion-fab>
    );
  }
  
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
          {this.renderFab()}
          <TodoList />
        </div>
      </ion-app>
    ); 
  }
  
}
