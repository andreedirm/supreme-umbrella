var myApp = angular.module('myApp', []);

myApp.controller('DemoController', ['$scope', '$http', function($scope, $http) {


    activate();

    function activate() {
        $http({
            method: 'GET',
            url: 'spots.json'
        }).then(function(response) {

$scope.list = response.data;


        });
    }

}]);
