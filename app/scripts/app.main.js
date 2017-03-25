'use strict';

angular
  .module('urbanApp')
  .controller('AppCtrl', ['$scope', '$http', '$localStorage', '$state',
        function AppCtrl($scope, $http, $localStorage, $state) {

      $scope.mobileView = 767;


      $scope.app = {
        name: 'Syncabi',
        author: 'Gabriel Nieves',
        version: '1.0.0',
        year: (new Date()).getFullYear(),
        layout: {
          isSmallSidebar: false,
          isChatOpen: false,
          isFixedHeader: true,
          isFixedFooter: false,
          isBoxed: false,
          isStaticSidebar: false,
          isRightSidebar: false,
          isOffscreenOpen: false,
          isConversationOpen: false,
          isQuickLaunch: false,
          sidebarTheme: '',
          headerTheme: ''
        },
        isMessageOpen: false,
        isConfigOpen: false
      };
      $scope.currentCourse = {};

      $scope.setCurrentCourse = function(){

        for(var ctr = 0; ctr < $scope.course.length; ctr++)
        {

          if(Boolean($scope.course[ctr].current) == true)
          {
            $scope.currentCourse = $scope.course[ctr];

          }
        }


      };

      $scope.courseChange = function(e){
        console.log($scope.course);

            angular.forEach($scope.course, function(course){
              if(course != e){
                course.current = false;
              }


            });

        $scope.setCurrentCourse();
          };





      $scope.course = [{id: 123, title: 'PHP 201', courseCode: "ITE 201", current: true, courseType: "Hybrid", generalInfo: {expectations: "Do Good"}, instructor: "Jeremy Cook", textbook: "Learning To Read for beginners", courseMeetingDate: [{day: "Monday", time: "12:00"}], weight: [{
        name: 'total', points: 1000}, {name: 'quiz', points: 250},{name: 'exam', points : 500}, {name: 'assistance', points: 175},{name: 'inClassWork', points: 75
      }], courseDuration: {start: "1/1/2017", end: "5/5/2017"} },
        {id: "124", title: 'Java OOP Concepts', courseCode: "CSC 201", current: false, courseType: "Class", generalInfo: {expectations: "Wait Your Turn"}, instructor: "Carolyn Davis", textbook: "Learning To code OOP, courseMeetingDate" [{day: "Tuesday", time: "11:00"}], weight: [{
          name: 'total', points: 1000}, {name: 'quiz', points: 250},{name: 'exam', points : 500}, {name: 'assistance', points: 175},{name: 'inClassWork', points: 75
        }], courseDuration: {start: "3/3/2017", end: "5/4/2017"} },
          {id: "125", title: 'Micro Economics', courseCode: "ECO 201", current: false, courseType: "Class", generalInfo: {expectations: "Awesome Class"}, instructor: "Michael Polcen", textbook: "Learning To Analyze Using Econ Prinicples", courseMeetingDate: [{day: "Monday", time: "1:00"}], weight: [{
            name: 'total', points: 1000}, {name: 'quiz', points: 250},{name: 'exam', points : 500}, {name: 'assistance', points: 175},{name: 'inClassWork', points: 75
          }], courseDuration: {start: "3/1/2017", end: "5/7/2017"}}
      ];

      $scope.courseChange();

      $scope.syllabusContainer = {letterGrades: {F: [0,59], D:[60,69], C : [70,79], B: [80,89], A: [90,99]}, pointDistribution: [], generalInformation: {}, Assignments: []};


      $scope.user = {
        fname: 'Gabriel',
        lname: 'Nieves',
        role: 'Professor',
        id: '6933633',
        jobDesc: 'Human Resources Guy',
        avatar: 'images/avatar.jpg',
        courses: [{id: "123", name: 'PHP 201', current:false},{id: "124", name: 'JAVA Basics 202', current: false},{id: "125", name: 'Intro. To communications', current: false}],
      };





      if (angular.isDefined($localStorage.layout)) {
        $scope.app.layout = $localStorage.layout;
      } else {
        $localStorage.layout = $scope.app.layout;
      }

      $scope.$watch('app.layout', function () {
        $localStorage.layout = $scope.app.layout;
      }, true);

      $scope.getRandomArbitrary = function () {
        return Math.round(Math.random() * 100);
      };
    }
]);
