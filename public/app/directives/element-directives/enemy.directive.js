app.directive("enemy", [function() {
    return {
        templateUrl: '../../views/enemy.tpl.html',
        controller: 'enemyCtrl',
        replace: false
    };
}]);
