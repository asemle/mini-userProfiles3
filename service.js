angular.module('userProfiles').service('mainService', function($http, $q) {


  this.getUsers = function() {

      var defer = $q.defer();

      $http.get('http://reqres.in/api/users?page=1')
        .then(function(response) {
          var parsedResponse = response.data.data
          for(var i = 0; i < parsedResponse.length; i++) {
            parsedResponse[i].first_name = 'Ralf';
          }
          defer.resolve(parsedResponse)
        })
        return defer.promise;
  }

});
