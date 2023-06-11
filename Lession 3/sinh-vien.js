var myApp = angular.module('myModule', []).controller('myController',function ($scope) {
    var sinhVien = {
        name: 'Sinh Vien',
        age: 20,
        gender: 1,
        address: {
            city: 'Ho Chi Minh City',
            country: 'Vietnam'
        }
    } 
    $scope.sinhVien = sinhVien;
});