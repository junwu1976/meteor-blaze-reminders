import { Template } from 'meteor/templating';
import { Tasks } from '../../lib/collection/tasks.js';


import './todos.html';

Template.todos.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 }});
    },

    // tasks: [
    //     { title: 'This is task 1' },
    //     { title: 'This is task 2' },
    //     { title: 'This is task 3' },
    // ],
    
});