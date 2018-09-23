app.directive("characters", [function() {
    return {
        templateUrl: '/public/views/characters.tpl.html',
        controller: 'characterCtrl',
        replace: false
    };
}]);
