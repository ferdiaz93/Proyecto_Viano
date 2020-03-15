(function(){
    var app = angular.module('app', []);
    
    app.controller('HomeController', function ($scope) {
        $scope.test = "este es un test";
    });
})();