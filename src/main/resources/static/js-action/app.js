/**
 * Created by Administrator on 2018/1/24.
 */
var actionApp = angular.module('actionApp',['ngRoute']);
actionApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/oper',{
        controller:'View1Controller',
        templateUrl:'Views/view1.html',
    }).when('/directive',{
        controller:'View2Controller',
        templateUrl:'Views/view2.html',
    });
}]);