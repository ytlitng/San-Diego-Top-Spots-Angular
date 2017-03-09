angular.module('app', []);


angular
    .module('app')
    .controller('HomeController', HomeController);

// define a function to pass to the ^^ HomeController.controller ^^ function
function HomeController($http) {
var vm = this;

vm.place=[];

  $http.get('topSpots.json').then(function(response) {
 vm.place = response.data;
});
 }

    // in the function, you always need the following line of code.
