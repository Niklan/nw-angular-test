/**
 * Routing for app.
 * @param $routeProvider
 */
function router($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/welcome.html',
      controller: 'main'
    })
    .when('/test', {
      templateUrl: 'templates/test.html',
      controller: 'testController'
    }).
    otherwise({
      redirectTo: '/'
    });
}
