
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
        style={{bottom: 25, right: 25}} 
        slot="fixed" class="fab-horizontal-end fab-vertical-bottom fab-edge hydrated">
        <ion-fab-button ion-activable="" class="ion-color-dark hydrated activated">
          <ion-icon name="add" style={{fontSize: 30}}></ion-icon>
        </ion-fab-button>
      </ion-fab>
    );
  }
  
  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <ion-title>Todos</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content style={{backgroundColor: 'transparent'}}>
          {this.renderFab()}
          <TodoList />
        </ion-content>
      </ion-app>
    ); 
  }
  
}
