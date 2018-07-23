app.directive("player", [function() {
    return {
        templateUrl: '../../views/player.tpl.html',
        controller: 'playerCtrl',
        replace: false
    };
}]);
