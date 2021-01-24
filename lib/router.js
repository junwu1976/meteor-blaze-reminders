import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';

import { Tasks } from './collection/tasks.js';

Router.route('/', function(){
    this.render('home');
});
  
Router.route('/about', function(){
    this.render('about');
});
  
Router.route('/todos', function(){
    this.render('todos');
});

Router.route('/todos/create', function(){
    console.log("userId:"+ Meteor.userId());
    this.render('todo_create');    
});

Router.route('/todos/:_id', function(){
    var item = Tasks.findOne({_id: this.params._id});
    console.log(item);
    this.render('todo_show',{data: item});
});

Router.onBeforeAction(function(){
    //  all properties available in the route function 
    //  are also available here such as this.params
    if(!Meteor.userId()){
        //  if the user is not logged in, render the login template
        this.render('Login');
    }else {
        //  otherwise don't hold up the rest of hooks or our route/action 
        //  function from running
        this.next();
    }
});