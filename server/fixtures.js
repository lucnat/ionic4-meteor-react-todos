
Meteor.startup(() => {

  if(Todos.find().count() == 0) {
    const todos = [
      {text: 'Call Hugo', done: false, createdAt: new Date()},
      {text: 'Go Jogging', done: true, createdAt: new Date()},
      {text: '15 mins of meditation', done: false, createdAt: new Date()},
      {text: 'Write the piano app', done: false, createdAt: new Date()}
    ];
    todos.forEach(t => {
      Todos.insert(t);
    })
  }

});
