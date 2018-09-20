/*jshint esversion:6*/
describe('initiativeCtrl', function() {
  beforeEach(module('hpTracker'));

  let $controller, appService;

  beforeEach(inject(function(_$controller_, _appService_){
    $controller = _$controller_;
    appService = _appService_;
  }));

  beforeEach(function() {
    window.localStorage.clear();
  });

  //Start Test for reset API
  describe('$scope.reset', function() { 
    let $scope, controller;

    beforeEach(function(){
      $scope = {};
      controller = $controller('initiativeCtrl', { $scope: $scope});
      appService.localChars = [];
    });

    it("should reset a single object's initiative and init values", function() {
      appService.localChars = [{id: 'Mario', initiative: 15, init: true}];
      expect($scope.reset()).toEqual([{id: 'Mario', initiative: '', init: false}]);
    });

    it('should reset multiple initiative and init values', function() {
      appService.localChars = [{id: 'Mario', initiative: 15, init: true}, {id: 'Luigi', initiative: 20, init: true}];
      expect($scope.reset()).toEqual([{id: 'Mario', initiative: '', init: false}, {id: 'Luigi', initiative: '', init: false}]);
    });

    it('should return an unchanged object', function() {
      appService.localChars = [{id: 'Bowser', initiative: '', init: false}];
      expect($scope.reset()).toEqual([{id: 'Bowser', initiative: '', init: false}]);
    });
  });// end $scope.reset

  //Start Test for setInitiative API
  describe('$scope.setInitiative', function(){
    let $scope, controller;

    beforeEach(function(){
      $scope = {};
      controller = $controller('initiativeCtrl', { $scope: $scope});
    });

    it('should return a local object with 2 key value pairs', function() {
      let char = {
        name: 'Mario',
        initiative: 12
      };
      expect($scope.setInitiative(char)).toEqual(JSON.parse('{"name": "Mario","initiative": 12}'));
    });//end test 1

    it('should return a local object with 3 key value pairs', function() {
      let char = {
        name: 'Luigi',
        initiative: 5,
        hitPoints: 100
      };
      expect($scope.setInitiative(char)).toEqual(JSON.parse('{"name": "Luigi","initiative": 5, "hitPoints": 100}'));
    });//end test 2

    it('should return an empty local object', function() {
      let char = {};
      expect($scope.setInitiative(char)).toEqual(JSON.parse('{}'));
    });//end test 3
  });// end $scope.setInitiative
});
