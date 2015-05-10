/**
 * Routing for app.
 * @param $routeProvider
 */
function router($routeProvider) {
  $routeProvider.
    when('/test', {
      templateUrl: 'templates/test.html',
      controller: 'testController'
    }).
    otherwise({
      redirectTo: '/'
    });
}
