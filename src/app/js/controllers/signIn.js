/**
 * SignIn controller.
 */
app.controller('signIn', function ($scope, $location) {
  $scope.oAuthSignIn = function () {
    if (!localStorage.accessToken) {
      $location.path('/test');
    }
    else {
      // Prepare connection URL.
      var connectUrl = 'https://soundcloud.com/connect?'
          + 'client_id=' + client_id
          + '&redirect_uri=' + redirect_uri
          + '&response_type=code_and_token&scope=non-expiring&display=popup';

      var getCodeCallback = function() {
        // Close server.
        server.close();

        // Get access token.
        request.post({
          url:'https://api.soundcloud.com/oauth2/token',
          form: {
            'client_id': client_id,
            'client_secret': client_secret,
            'grant_type': 'authorization_code',
            'redirect_uri': redirect_uri,
            'code': localStorage.accessCode
          }
        }, function(err,httpResponse,body){
          var result = JSON.parse(body);
          // Save token.
          localStorage.accessToken = result.access_token;
          $location.path('/test');
          $scope.$apply();
        });
      }

      // We create simple webserver to handle callback and get access code.
      var server = http.createServer(function(request, response) {
        var query = url.parse(request.url, true).query;
        localStorage.accessCode = query.code;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end();
        authWindow.close();
        getCodeCallback();
      }).listen(3000, '127.0.0.1');

      // Create auth pop-up window.
      var authWindow = gui.Window.open(connectUrl, {
        "title": "Auth",
        "position": "center",
        "focus": true,
        "toolbar": true,
        "frame": true
      });
    }
  }
});
