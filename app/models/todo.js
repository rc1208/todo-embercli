import DS from "ember-data";
var Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted : DS.attr('boolean')
});
Todo.reopenClass({
  FIXTURES : [
      {
          id:1,
          title:"learn ember.js",
          isCompleted:true
      },
      {
          id:2,
          title:"learn ember.js again",
          isCompleted:true
      },
      {
          id:3,
          title:"revise ember.js",
          isCompleted:false
      }
  ]
});

export default Todo;