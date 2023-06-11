var myApp = angular.module('scopeDemo',[]);

myApp.controller('classController', classController);
myApp.controller('schoolController', schoolController);

function classController($scope,$rootScope) {
    $scope.name = 'John';
}
function schoolController($scope,$rootScope) {
    $scope.name = 'Đức';
}