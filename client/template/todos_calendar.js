import { Template } from 'meteor/templating';
import { Tasks } from '../../lib/collection/tasks.js';

import './todos_calendar.html';

Template.todos_calendar.onRendered(() => {
    console.log("myCalendar onRendered!");
    var calendarEl = document.getElementById('myCalendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
});

