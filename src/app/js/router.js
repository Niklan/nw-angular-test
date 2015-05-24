/**
 * Routing for app.
 * @param $routeProvider
 */
function router($routeProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'templates/signin.html',
      controller: 'signIn'
    })
    .when('/test', {
      templateUrl: 'templates/test.html',
      controller: 'testController'
    }).
    otherwise({
      redirectTo: '/'
    });
}
