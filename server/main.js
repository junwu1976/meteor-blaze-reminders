import { Meteor } from 'meteor/meteor';
import { Tasks } from '../lib/collection/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('tasks',function(){
  return Tasks.find({});
});