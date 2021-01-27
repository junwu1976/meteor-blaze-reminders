import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import { Tasks } from '../../lib/collection/tasks.js';

import './todo_create.html';

Template.todo_create.events({
    'submit .new-reminder'(event){
        event.preventDefault();

        console.log("create new task!");
        //  Get value from form element
        const target = event.target;
        const title = target.title.value;
        const description = target.description.value;
        const start = target.start.value;

        //  Insert a reminder into the collection
        Tasks.insert({
            title,
            description,
            completed: false,
            start,
            createdAt: new Date(),  //  current time
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });

        //  Clear form
        target.title.value = '';
        target.description.value = '';
        Router.go('todos');
    }
});