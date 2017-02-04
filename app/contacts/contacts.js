'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])
.config(function() {
   var config = {
     apiKey: "AIzaSyCfbR_7B7ZeqoYoE5L9AEOtwKqUEzJWxmU",               // Your Firebase API key
     authDomain: "mycontacts-f69c4.firebaseapp.com",       // Your Firebase Auth domain ("*.firebaseapp.com")
     databaseURL: "https://mycontacts-f69c4.firebaseio.com",     // Your Firebase Database URL ("https://*.firebaseio.com")
     storageBucket: "mycontacts-f69c4.appspot.com",  // Your Firebase Storage bucket ("*.appspot.com")
     messagingSenderId: "47057769927"
   };
   firebase.initializeApp(config);
 })

.controller('ContactsCtrl', ['$scope', '$firebaseObject' ,function($scope, $firebaseObject) {
    var ref = firebase.database().ref();

    var obj = $firebaseObject(ref);

    console.log(obj);

    $scope.showAddForm = function(){
        $scope.showAddForm = true;
    }
}]);