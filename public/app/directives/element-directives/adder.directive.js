app.directive("adder", [function() {
    return {
        templateUrl: '../../views/adder.tpl.html',
        controller: 'adderCtrl',
        replace: false
    };
}]);
