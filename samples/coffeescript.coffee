# Angular module declaration
angular.module("my.module").factory "MyService", [
  "$rootScope"
  "$http"
  "$q"
  ($rootScope, $http, $q) ->
    class MyService
      @classMethod: ->
        # ...
]
