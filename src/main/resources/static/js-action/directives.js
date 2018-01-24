actionApp.directive('datePicker',function () {
    return{
        restrict:'AC',
        link:function (scope,elem) {
            elem.datepicker();
        }
    };
});
