var module = angular.module("myapp", ['ngAnimate']);

module.factory("getRandomService", function($http) {
    var getRandom = {};

    getRandom.doRequest = function(theData) {
    	var promise = $http({method: 'GET', url: '/random', data: theData});
    	return promise;
    }

    return getRandom;
});

module.controller("myCtrl", function($scope, getRandomService, $animate) {

    var elem = angular.element(document).find('div');

    setInterval(function() {

        var promise = getRandomService.doRequest();

        promise.success(function(data, status) {
            elem.animate({'left' : '' + data.number + 'px'});
        });
        
    }, 2000);
    
});