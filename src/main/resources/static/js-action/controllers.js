actionApp.controller('View1Controller',['$rootScope','$scope','$http',/*定义ViewController,并注入三者*/
function ($rootScope,$scope,$http) {
    //使用$scope.$on监听$viewContentLoaded事件
    $scope.$on('$viewContentLoaded',function () {
        console.log('页面加载完成');
    });

    $scope.search=function () {
        personName= $scope.personName;
        $http.get('search',{
            params:{personName:personName}
        }).success(function (data) {
            $scope.person=data;
        });
    };
}]);
actionApp.controller('View2Controller',['$rootScope','$scope',
function ($rootScope,$scope) {
    $scope.$on('$viewContentLoaded',function () {
        console.log('页面加载完成');
    });
}
]);