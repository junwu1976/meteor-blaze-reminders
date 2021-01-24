import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import { Tasks } from '../../lib/collection/tasks.js';

import './todo_show.html';

Template.todo_show.events({
    'submit .reminder-update'(event){
        event.preventDefault();
        console.log("update reminder!");
        //  Get value from form element
        const target = event.target;
        const id = target.id.value;
        const title = target.title.value;
        const description = target.description.value;
        console.log("id:["+id+"]");
        Tasks.update( id, {
            $set: {
                title: title,
                description: description
            },
        });   
        Router.go('/todos');
    },
});

// Template.todo_create.events({
//     'submit .new-reminder'(event){
//         event.preventDefault();

//         console.log("create new task!");
//         //  Get value from form element
//         const target = event.target;
//         const title = target.title.value;
//         const description = target.description.value;

//         //  Insert a reminder into the collection
//         Tasks.insert({
//             title,
//             description,
//             completed: false,
//             createdAt: new Date(),  //  current time
//         });

//         //  Clear form
//         target.title.value = '';
//         target.description.value = '';
//     }
// });