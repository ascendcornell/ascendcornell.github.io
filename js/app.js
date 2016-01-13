var app = angular.module('main', ['ctrls', 'ngRoute']);

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});

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
      .when("/about/professional",
      {
        templateUrl: "templates/about/professional.html",
        controller: "about.ctrl"
      })
      .when("/about/marketing",
      {
        templateUrl: "templates/about/marketing.html",
        controller: "about.ctrl"
      })
      .when("/about/internal",
      {
        templateUrl: "templates/about/internal.html",
        controller: "about.ctrl"
      })
      .when("/about/career",
      {
        templateUrl: "templates/about/career.html",
        controller: "about.ctrl"
      })

    .when("/events",
    {
      templateUrl: "templates/events.html",
      controller: "events.ctrl"
    })
      .when("/events/senior",
      {
        templateUrl: "templates/events/senior.html",
        controller: "events.ctrl"
      })    
      .when("/events/mentor",
      {
        templateUrl: "templates/events/mentor.html",
        controller: "events.ctrl"
      })
      .when("/events/national",
      {
        templateUrl: "templates/events/national.html",
        controller: "events.ctrl"
      })

    .when("/join",
    {
      templateUrl: "templates/join.html",
      controller: "join.ctrl"
    })

  ;
});