app.directive("characters", [function() {
    return {
        templateUrl: '../../views/characters.tpl.html',
        controller: 'characterCtrl',
        replace: false
    };
}]);
