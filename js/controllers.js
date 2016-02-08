var controllers = angular.module("ctrls", ['ngAnimate', 'ui.bootstrap']);

controllers.controller('main.ctrl', ["$scope", function($scope){
	$scope.test = "derpderp";
}]);

controllers.controller('about.ctrl', ["$scope", function($scope){
	
}]);

controllers.controller('events.ctrl', ["$scope", function($scope){
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  var currIndex = 1;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
  		image:"resources/events/seniorPanel2.jpg",
  		text: "Senior Student Panel",
  		id: 0
  	},
  	{
  		image:"resources/logo.png",
  		text: "Mentorship",
  		id: 1
  	},
  	{
  		image:"resources/logo.png",
  		text: "National Convention",
  		id: 2
  	});
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  $scope.addSlide();

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }

}]);

controllers.controller('join.ctrl', ["$scope", "$http", function($scope, $http){
	  $scope.first = "";
    $scope.last = "";
    $scope.email = "";

    $scope.add=function () {
        $http({
            method: 'POST',
            url: 'https://sheetsu.com/apis/47921c28',
            headers: {
                'Content-Type': "application/json"
            },
            data: {
                "first": $scope.first,
                "last": $scope.last,
                "email": $scope.email,
            }
        }).then(function success(resp){
            console.log(resp);
        }, function error(resp){
            console.log(resp);
        });

        //Clear the fields
        $scope.first= "";
        $scope.last = "";
        $scope.email="";
      };
}]);