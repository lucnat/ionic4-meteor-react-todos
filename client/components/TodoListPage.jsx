
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import TodoList from './TodoList';
import ReactiveElements from 'reactive-elements';

    class PageTwo extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <ion-header translucent>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button text="Page One"></ion-back-button>
              </ion-buttons>
              <ion-title>Page Two</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content padding fullscreen>
            <h1>Page Two</h1>
            <div>
              <ion-nav-push component="page-three">
                <ion-button class="next">Go to Page Three</ion-button>
              </ion-nav-push>
            </div>
          </ion-content>
        `;
      }
    }

        customElements.define('page-two', PageTwo);


export default class TodoListPage extends React.Component {

  onAdd() {
    console.log('yeah');
  }

  renderFab() {
    return (
      <ion-nav-push component="createtodo-page">
        <ion-fab 
          style={{bottom: 25, right: 25}} 
          slot="fixed" class="fab-horizontal-end fab-vertical-bottom fab-edge hydrated">
          <ion-fab-button ion-activable="" class="ion-color-dark hydrated activated">
            <ion-icon name="add" style={{fontSize: 30}}></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-nav-push>

    );
  }

  renderHeader() {
    return (
      <ion-header>
        <ion-toolbar>
          <ion-title>Todos</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        <ion-content fullscreen>
          {this.renderFab()}
          <TodoList />
        </ion-content>
      </>
    );
  }

}

ReactiveElements.registerReact('todolist-page', TodoListPage);
