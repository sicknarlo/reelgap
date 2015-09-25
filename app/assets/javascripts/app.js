// var app = angular.module('app', ['ui.router', 'restangular', 'googlechart'])

//   .config(["RestangularProvider", function(RestangularProvider){
//     RestangularProvider.setBaseUrl("/api/v1")
//     RestangularProvider.setRequestSuffix(".json")

//   }])

//   .config(['$stateProvider', '$urlRouterProvider',
//     function($stateProvider, $urlRouterProvider){
//       $urlRouterProvider.otherwise('/');

//       $stateProvider

//         .state('app', {
//           url: "/",
//           views: {
//             "navbar": {
//               templateUrl: 'templates/partials/navbar.html',
//             },
//             "content": {
//               templateUrl: 'templates/movies/index.html',
//               controller: 'movieIndexCtrl'
//             }
//           },
//           resolve: {
//                 movies: function(){
//                   return Restangular.all("movies").getList();
//                 }
//               }
//         })

//         .state('app.login', {
//           url: "login",
//           views: {
//             "content@": {
//               templateUrl: 'templates/auth/login.html',
//               controller: 'LoginCtrl',
//               resolve: {
//                 userPromise: ['Auth', function(Auth) {
//                   console.log("resolving promise")
//                   if (Auth.isAuthenticated()) {
//                     return Auth.currentUser()
//                   } else { return };
//                 }]
//               }
//             }
//           }
//         })

//         .state('app.logout', {
//           url: "logout",
//           controller: 'LogoutCtrl',
//         })

//         .state('app.boards', {
//           url: "boards",
//           views: {
//             "content@": {
//               templateUrl: 'templates/boards/layout.html',
//               controller: 'BoardsCtrl',
//               resolve: {
//                 userPromise: ['Auth', function(Auth) {
//                   return Auth.currentUser()
//                 }]
//               }
//             },
//             "index@app.boards": {
//               templateUrl: 'templates/boards/index.html',
//               controller: 'BoardsCtrl',
//               resolve: {
//                 userPromise: ['Auth', function(Auth) {
//                   return Auth.currentUser()
//                 }]
//               }
//             },
//             "newList@app.boards": {
//               templateUrl: 'templates/lists/new.html',
//             },
//             "newCard@app.boards": {
//               templateUrl: 'templates/cards/new.html',
//             }
//           }
//         })

//         .state('app.boards.newList', {
//           url: "/list/new",
//           views: {
//             "newList@app.boards": {
//               templateUrl: 'templates/lists/form.html',
//             }
//           }
//         })

//         .state('app.boards.newCard', {
//           url: "/card/new",
//           views: {
//             "newCard@app.boards": {
//               templateUrl: 'templates/cards/form.html',
//             }
//           }
//         })

//         .state('app.boards.new', {
//           url: "/new",
//           views: {
//             "index@app.boards": {
//               templateUrl: 'templates/boards/new.html',
//               controller: 'BoardsNewCtrl'
//             }
//           }
//         })
//     }])
