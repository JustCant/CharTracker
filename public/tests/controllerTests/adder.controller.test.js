/*jshint esversion:6*/
describe('adderCtrl', function() {
  beforeEach(module('hpTracker'));

  let $controller, appService;

  beforeEach(inject(function(_$controller_, _appService_){
    $controller = _$controller_;
    appService = _appService_;
  }));

  describe('$scope.addChar', function() {
    let $scope, controller;

    beforeEach(function(){
      $scope = {};
      controller = $controller('adderCtrl', { $scope: $scope});
    });

    it("adds a character to the hero cloumn");

    it("adds a character to the enemy cloumn");

    it("returns because no name exists");

    it("returns because no hitpoints exist");
  });
});
