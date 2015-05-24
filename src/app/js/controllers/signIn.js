/**
 * SignIn controller.
 */
app.controller('signIn', function ($scope, $location) {
  $scope.oAuthSignIn = function () {
    // Prepare connection URL.
    var connectUrl = 'https://soundcloud.com/connect?'
        + 'client_id=' + client_id
        + '&redirect_uri=' + redirect_uri
        + '&response_type=code_and_token&scope=non-expiring&display=popup';

    // We create simple webserver to handle callback and get acces token.
    var server = http.createServer(function(request, response) {
      var query = url.parse(request.url, true).query;
      access_token = query.code;
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end();
      authWindow.close();
      $scope.getTokenCallback();
      server.close();
    }).listen(3000, '127.0.0.1');

    // Create auth pop-up window.
    var authWindow = gui.Window.open(connectUrl, {
      "title": "Auth",
      "position": "center",
      "focus": true,
      "toolbar": false,
      "frame": true
    });
  }

  /**
   * This callback calls after we get access token.
   */
  $scope.getTokenCallback = function() {
    $location.path('/test');
  }
});
