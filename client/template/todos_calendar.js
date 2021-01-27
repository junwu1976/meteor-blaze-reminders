import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../../lib/collection/tasks.js';

import './todos_calendar.html';

Template.todos_calendar.onRendered(() => {

    // this.state = new ReactiveDict();
    // Meteor.subscribe('tasks');
    const tasksArr = Tasks.find({}).fetch();
    
    console.log(tasksArr);
    console.log("myCalendar onRendered!");

    var calendarEl = document.getElementById('myCalendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: tasksArr
    });
    calendar.render();
});

