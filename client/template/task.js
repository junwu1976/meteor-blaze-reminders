import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import { Tasks } from '../../lib/collection/tasks.js';
import './task.html';

Template.task.events({
    'click .delete'(){
        Tasks.remove(this._id);
    },
    
    'click .view'(){
        console.log("You choose reminder id:", this._id);
        let url = "/todos/"+ this._id;
        Router.go(url);
    },
});