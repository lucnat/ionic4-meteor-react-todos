
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';

class TodoList extends React.Component {

  renderTodos(done) {
    const todos = done ? this.props.doneTodos : this.props.notDoneTodos;
    return todos.map(todo => (
      <ion-item key={todo._id} onClick={() => {Todos.update(todo._id, {$set: {done: !todo.done}})}}>
        <ion-checkbox checked={todo.done}></ion-checkbox>

        <ion-label>
          <h2>{todo.text}</h2>
          <p>{todo.createdAt.toGMTString()}</p>
        </ion-label>
      </ion-item>
    ));
  }
  
  render() {
    return (
      <ion-list>
        <h1 style={{paddingLeft: 10}}>Todo</h1>
        {this.renderTodos(false)}
        <h1 style={{paddingLeft: 10}}>Completed</h1>
        {this.renderTodos(true)}
      </ion-list>
    ); 
  }
  
}

export default withTracker(props => {
  return {
    doneTodos: Todos.find({done: true}).fetch(),
    notDoneTodos: Todos.find({done: false}).fetch()
  };
})(TodoList);