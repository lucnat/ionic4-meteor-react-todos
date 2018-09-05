
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactiveElements from 'reactive-elements';

export default class CreateTodoPage extends React.Component {

  state = {
    text: ''
  }

  renderHeader() {
    return (
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button text="Back"></ion-back-button>
            </ion-buttons>
          <ion-title>Add</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        <ion-content padding fullscreen>
          <h1>Add todo item</h1>
          <ion-list>
            <ion-item>
              <ion-input placeholder="enter text"></ion-input>
            </ion-item>
          </ion-list>
          <ion-nav-pop component="page-three">
            <ion-button>Cancel</ion-button>
          </ion-nav-pop>
          <ion-button>Save</ion-button>
        </ion-content>
      </>
    );
  }

}

ReactiveElements.registerReact('createtodo-page', CreateTodoPage);
