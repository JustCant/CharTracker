/*jshint esversion:6*/
describe('initiativeCtrl', function() {
  beforeEach(module('hpTracker'));

  let $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  //mock local storage
  beforeEach(function () {
    let store = {};

    spyOn(window.localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(window.localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value + '';
      return store[key];
    });
    spyOn(window.localStorage, 'clear').and.callFake(function () {
        store = {};
    });
  });//end mock local storage

  //Start Test for reset API
  describe('$scope.reset', function() {
    it('should reset all initiative values');
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
