app.controller('testController', function ($scope) {
  $scope.message = localStorage.accessToken;
  request('https://api.soundcloud.com/me.json?oauth_token=' + localStorage.accessToken, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });
});
