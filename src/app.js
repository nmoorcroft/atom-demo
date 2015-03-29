var _ = require('lodash');

var atomApp = angular.module('atomApp', []);

atomApp.controller('MainCtrl', function ($scope) {
    $scope.stuff = _.map(['neil','cat','tom','lottie'], function(name) {
       return _.capitalize(name);
    });

    $scope.nodeVersion = process.version;
    $scope.atomVersion = process.versions['atom-shell'];

});


