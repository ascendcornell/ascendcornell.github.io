var app = angular.module('main', ['ctrls', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "templates/main.html",
      controller: "main.ctrl"
    })
    .when("/about",
    {
      templateUrl: "templates/about.html",
      controller: "about.ctrl"
    })
    .when("/events",
    {
      templateUrl: "templates/events.html",
      controller: "events.ctrl"
    })
    .when("/join",
    {
      templateUrl: "templates/join.html",
      controller: "join.ctrl"
    })

  ;
});