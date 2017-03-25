'use strict';

angular
  .module('urbanApp')
  .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$on('$stateChangeSuccess', function () {
        window.scrollTo(0, 0);
      });
      FastClick.attach(document.body);
        },
    ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      // For unmatched routes
      $urlRouterProvider.otherwise('/');

      // Application routes
      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'views/common/layout.html',
        })


      .state('app.dashboard', {
        url: '/',
        templateUrl: 'views/dashboard.html',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                insertBefore: '#load_styles_before',
                files: [
                                'styles/climacons-font.css',
                                'vendor/rickshaw/rickshaw.min.css'
                            ]
                        },
              {
                serie: true,
                files: [
                                'vendor/d3/d3.min.js',
                                'vendor/rickshaw/rickshaw.min.js',
                                'vendor/flot/jquery.flot.js',
                                'vendor/flot/jquery.flot.resize.js',
                                'vendor/flot/jquery.flot.pie.js',
                                'vendor/flot/jquery.flot.categories.js',
                            ]
                        },
              {
                  name: 'angular-flot',
                  files: [
                                'vendor/angular-flot/angular-flot.js'
                            ]
                        }]).then(function () {
              return $ocLazyLoad.load('scripts/controllers/dashboard.js');
            });
                    }]
        },
        data: {
          title: 'Dashboard',
        }
      })

        .state('app.createSyllabus', {
            templateUrl: 'views/common/sl.html'
          }
        )
        .state('app.main', {
          url: 'nothing',
          templateUrl: 'views/createSyllabus.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                    'vendor/sweetalert2/dist/sweetalert2.min.css'
                  ]
                },
                {
                  serie: true,
                  files: [
                    'vendor/sweetalert2/dist/sweetalert2.min.js',
                    'vendor/es6-promise/es6-promise.auto.min.js'
                  ]
                },
                {
                  name: 'ui.calendar',
                  files: [
                    'vendor/angular-ui-calendar/src/calendar.js'
                  ]
                }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/calendar.js');
              });
            }]
          },
          data: {
            title: 'Create Syllabus - Home',
          }
        })

        .state('app.createSyllabus-#1', {
          url: '/create-syllabus',
          templateUrl: 'views/extras-blank.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                    'vendor/fullcalendar/dist/fullcalendar.min.css',
                    'vendor/sweetalert2/dist/sweetalert2.min.css'
                  ]
                },
                {
                  serie: true,
                  files: [
                    'vendor/jquery.ui/ui/core.js',
                    'vendor/jquery.ui/ui/widget.js',
                    'vendor/jquery.ui/ui/mouse.js',
                    'vendor/jquery.ui/ui/draggable.js',
                    'vendor/moment/moment.js',
                    'vendor/fullcalendar/dist/fullcalendar.min.js',
                    'vendor/fullcalendar/dist/gcal.js',
                    'vendor/sweetalert2/dist/sweetalert2.min.js',
                    'vendor/es6-promise/es6-promise.auto.min.js'
                  ]
                },
                {
                  name: 'ui.calendar',
                  files: [
                    'vendor/angular-ui-calendar/src/calendar.js'
                  ]
                }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/calendar.js');
              });
            }]
          },
          data: {
            title: 'Create Syllabus - Step 1#',
          }
        })
        .state('app.createSyllabus.second', {
          url: '/create-syllabus',
          templateUrl: 'views/ui-alert.html',
          data: {
            title: 'Create Syllabus - Step 2#',
          }
        })



        }
    ])
  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: false,
      events: false
    });
    }]);
