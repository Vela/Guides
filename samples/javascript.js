// AJAX Examples
// =============

// ### Angular
$http.get("/path/to/server/" + $scope.id, params).
  then(function(response) {
    // Success handler
  },
  function(response) {
    // Error handler
  });


// ### jQuery
var id = 5;
jQuery.get("/path/to/server/" + id, params, function(response) {
  // Success handler
});



// Data Manipulation
// =================

// ### Angular
myArray = ["one", "two"];
angular.forEach(myArray, function(item) {
  // item
});

// ### Underscore.js
myArray = ["one", "two"];
_.each(myArray, function(item) {
  // item
});
