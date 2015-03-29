'use strict';

var _ = require('lodash');

module.exports = function($scope) {
    $scope.stuff = _.map(['neil','cat','tom','lottie'], function(name) {
        return _.capitalize(name);
    });

    $scope.nodeVersion = process.version;
    $scope.atomVersion = process.versions['atom-shell'];

};

