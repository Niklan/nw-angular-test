/**
 * Main controller for app.
 */
app.controller('main', function ($scope) {
  $scope.auth = function () {
    // initialize client with app credentials
    SC.initialize({
      client_id: '',
      redirect_uri: 'app://app/src/app/index.html#/test'
    });

    // initiate auth popup
    SC.connect(function() {
      SC.get('/me', function(me) {
        alert('Hello, ' + me.username);
      });
    });
  }
});
