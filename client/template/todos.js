import { Template } from 'meteor/templating';
import { Tasks } from '../../lib/collection/tasks.js';
import { ReactiveDict } from 'meteor/reactive-dict';


import './todos.html';

Template.todos.onCreated(()=>{
    this.state = new ReactiveDict();
    Meteor.subscribe('tasks');
});

Template.todos.helpers({
    tasks() {
        console.log(Tasks.find({}).count());
        return Tasks.find({}, { sort: { createdAt: -1 }});
    },

    // tasks: [
    //     { title: 'This is task 1' },
    //     { title: 'This is task 2' },
    //     { title: 'This is task 3' },
    // ],
    
});