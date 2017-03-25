'use strict';

function CalendarCtrl($scope, $compile, uiCalendarConfig) {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $scope.changeTo = 'Hungarian';
  /* event source that pulls from google.com */

var currentStart = $scope.currentCourse.courseDuration.start.split('/');
var currentEnd = $scope.currentCourse.courseDuration.end.split('/');

  var a = function populate_week_range_options(){
    var start_week_date = new Date(currentStart[2], currentStart[1]-2, currentStart[0]); // no queries exist before this
    var todays_date = new Date(currentEnd[2], currentEnd[1]-1,currentEnd[0]);

    // array to hold week commencing dates
    var week_commencing_dates = new Array();


    while(start_week_date < todays_date){
      var next_date = start_week_date.setDate(start_week_date.getDate() + 1);

      var next_days_date = new Date(next_date);
      var day_index = next_days_date.getDay();
      if(day_index == 1){
        var current = next_days_date.toISOString().replace(/T.*/,'').split('-');
        week_commencing_dates.push(current);

      }
      // increment the date
      start_week_date = new Date(next_date);
    }

    return week_commencing_dates;
  }

  var a = a();



  /* event source that contains custom events on the scope */
  $scope.events = [
    ];

  for(var i = 0; i < a.length; i++){
    var z = {title: "Class",start: new Date(a[i][0], a[i][1], a[i][2]), listColor: 'success', className: ['event-success']};
    $scope.events.push(z);
    console.log(z);

  }


  /* event source that calls a function on every view switch */
  $scope.eventsF = function (start, end, timezone, callback) {
    var s = new Date(start).getTime() / 1000;
    var e = new Date(end).getTime() / 1000;
    var m = new Date(start).getMonth();
    var events = [{
      title: 'Feed Me ' + m,
      start: s + (50000),
      end: s + (100000),
      allDay: false,
      className: ['customFeed']
    }];
    callback(events);
  };

  $scope.calEventsExt = {
    color: '#f00',
    textColor: 'yellow',
    events: [
      {
        type: 'party',
        title: 'Lunch',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        type: 'party',
        title: 'Lunch 2',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        type: 'party',
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/'
      }
    ]
  };


  /* alert on eventClick */
  $scope.alertOnEventClick = function (date, jsEvent, view) {
    $scope.alertMessage = (date.title + ' was clicked ');
  };
  /* alert on Drop */
  $scope.alertOnDrop = function (event, delta, revertFunc, jsEvent, ui, view) {
    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
  };
  /* alert on Resize */
  $scope.alertOnResize = function (event, delta, revertFunc, jsEvent, ui, view) {
    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };
  /* add and removes an event source of choice */
  $scope.addRemoveEventSource = function (sources, source) {
    var canAdd = 0;
    angular.forEach(sources, function (value, key) {
      if (sources[key] === source) {
        sources.splice(key, 1);
        canAdd = 1;
      }
    });
    if (canAdd === 0) {
      sources.push(source);
    }
  };
  /* add custom event*/
  $scope.addEvent = function () {

    $scope.events.push({
      title: 'Open Sesame',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      className: ['event-primary'],
      listColor: 'default'
    });
  };
  /* remove event */
  $scope.remove = function (index) {
    $scope.events.splice(index, 1);
    calendar.fullCalendar('refetchEvents');
  };
  /* Change View */
  $scope.changeView = function (view, calendar) {
    uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
  };
  /* Change View */
  $scope.renderCalender = function (calendar) {
    if (uiCalendarConfig.calendars[calendar]) {
      uiCalendarConfig.calendars[calendar].fullCalendar('render');
    }
  };
  /* Render Tooltip */
  $scope.eventRender = function (event, element, view) {
    element.attr({
      'tooltip': event.title,
      'tooltip-append-to-body': true
    });
    $compile(element)($scope);
  };
  $scope.eventSource = [$scope.events];
  /* config object */
  $scope.uiConfig = {

    calendar: {

      height: 550,
      editable: true,
      header: {
        left: 'title',
        right: 'month,agendaWeek,agendaDay today prev,next'
      },
      buttonIcons: {
        prev: ' fa fa-caret-left',
        next: ' fa fa-caret-right',
      },
      droppable: true, // this allows things to be dropped onto the calendar !!!
      axisFormat: 'h:mm',
      columnFormat: {
        month: 'ddd', // Mon
        week: 'ddd D', // Mon 7
        day: 'dddd M/d', // Monday 9/7
        agendaDay: 'dddd D'
      },
      allDaySlot: false,
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
    }
  };

  $scope.changeLang = function () {
    if ($scope.changeTo === 'Hungarian') {
      $scope.uiConfig.calendar.dayNames = ['VasÃ¡rnap', 'HÃ©tfÅ‘', 'Kedd', 'Szerda', 'CsÃ¼tÃ¶rtÃ¶k', 'PÃ©ntek', 'Szombat'];
      $scope.uiConfig.calendar.dayNamesShort = ['Vas', 'HÃ©t', 'Kedd', 'Sze', 'CsÃ¼t', 'PÃ©n', 'Szo'];
      $scope.changeTo = 'English';
    } else {
      $scope.uiConfig.calendar.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      $scope.uiConfig.calendar.dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      $scope.changeTo = 'Hungarian';
    }
  };
  /* event sources array*/
  $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
  $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
}

angular
  .module('urbanApp')
  .controller('CalendarCtrl', ['$scope', '$compile', 'uiCalendarConfig', CalendarCtrl]);
