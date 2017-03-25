'use strict';

function dashboardCtrl($scope, $interval, COLORS) {
var colors = [{
  "hex": "#FDD9B5",
  "name": "Apricot",
  "rgb": "(253, 217, 181)"
},
  {
    "hex": "#78DBE2",
    "name": "Aquamarine",
    "rgb": "(120, 219, 226)"
  },
  {
    "hex": "#87A96B",
    "name": "Asparagus",
    "rgb": "(135, 169, 107)"
  },
  {
    "hex": "#FFA474",
    "name": "Atomic Tangerine",
    "rgb": "(255, 164, 116)"
  },
  {
    "hex": "#FAE7B5",
    "name": "Banana Mania",
    "rgb": "(250, 231, 181)"
  },
  {
    "hex": "#9F8170",
    "name": "Beaver",
    "rgb": "(159, 129, 112)"
  },
  {
    "hex": "#FD7C6E",
    "name": "Bittersweet",
    "rgb": "(253, 124, 110)"
  },
  {
    "hex": "#000000",
    "name": "Black",
    "rgb": "(0,0,0)"
  },
  {
    "hex": "#ACE5EE",
    "name": "Blizzard Blue",
    "rgb": "(172, 229, 238)"
  },
  {
    "hex": "#1F75FE",
    "name": "Blue",
    "rgb": "(31, 117, 254)"
  },
  {
    "hex": "#A2A2D0",
    "name": "Blue Bell",
    "rgb": "(162, 162, 208)"
  },
  {
    "hex": "#6699CC",
    "name": "Blue Gray",
    "rgb": "(102, 153, 204)"
  },
  {
    "hex": "#0D98BA",
    "name": "Blue Green",
    "rgb": "(13, 152, 186)"
  },
  {
    "hex": "#7366BD",
    "name": "Blue Violet",
    "rgb": "(115, 102, 189)"
  },
  {
    "hex": "#DE5D83",
    "name": "Blush",
    "rgb": "(222, 93, 131)"
  },
  {
    "hex": "#CB4154",
    "name": "Brick Red",
    "rgb": "(203, 65, 84)"
  },
  {
    "hex": "#B4674D",
    "name": "Brown",
    "rgb": "(180, 103, 77)"
  },
  {
    "hex": "#FF7F49",
    "name": "Burnt Orange",
    "rgb": "(255, 127, 73)"
  },
  {
    "hex": "#EA7E5D",
    "name": "Burnt Sienna",
    "rgb": "(234, 126, 93)"
  },
  {
    "hex": "#B0B7C6",
    "name": "Cadet Blue",
    "rgb": "(176, 183, 198)"
  },
  {
    "hex": "#FFFF99",
    "name": "Canary",
    "rgb": "(255, 255, 153)"
  },
  {
    "hex": "#1CD3A2",
    "name": "Caribbean Green",
    "rgb": "(28, 211, 162)"
  },
  {
    "hex": "#FFAACC",
    "name": "Carnation Pink",
    "rgb": "(255, 170, 204)"
  },
  {
    "hex": "#DD4492",
    "name": "Cerise",
    "rgb": "(221, 68, 146)"
  },
  {
    "hex": "#1DACD6",
    "name": "Cerulean",
    "rgb": "(29, 172, 214)"
  },
  {
    "hex": "#BC5D58",
    "name": "Chestnut",
    "rgb": "(188, 93, 88)"
  },
  {
    "hex": "#DD9475",
    "name": "Copper",
    "rgb": "(221, 148, 117)"
  },
  {
    "hex": "#9ACEEB",
    "name": "Cornflower",
    "rgb": "(154, 206, 235)"
  },
  {
    "hex": "#FFBCD9",
    "name": "Cotton Candy",
    "rgb": "(255, 188, 217)"
  },
  {
    "hex": "#FDDB6D",
    "name": "Dandelion",
    "rgb": "(253, 219, 109)"
  },
  {
    "hex": "#2B6CC4",
    "name": "Denim",
    "rgb": "(43, 108, 196)"
  },
  {
    "hex": "#EFCDB8",
    "name": "Desert Sand",
    "rgb": "(239, 205, 184)"
  },
  {
    "hex": "#6E5160",
    "name": "Eggplant",
    "rgb": "(110, 81, 96)"
  },
  {
    "hex": "#CEFF1D",
    "name": "Electric Lime",
    "rgb": "(206, 255, 29)"
  },
  {
    "hex": "#71BC78",
    "name": "Fern",
    "rgb": "(113, 188, 120)"
  },
  {
    "hex": "#6DAE81",
    "name": "Forest Green",
    "rgb": "(109, 174, 129)"
  }];
  var visits = [
        [0, 8],
        [1, 1],
        [2, 1],
        [3, 6],
        [4, 4],
        [5, 3],
        [6, 9],
        [7, 7],
        [8, 1]
        ];

  $scope.lineDataset = [{
      data: visits,
      color: COLORS.success
    }];

  $scope.lineOptions = {
    series: {
      lines: {
        show: true,
        lineWidth: 1,
        fill: true
      },
      shadowSize: 0
    },
    grid: {
      color: COLORS.border,
      borderWidth: 0,
      hoverable: true,
    },
    xaxis: {
      min: 0,
      max: 8
    },
    yaxis: {
      min: 0,
      max: 10
    }
  };





  $scope.pieDataset = [
    {
      label: 'IE',
      data: 15,
      color: colors[12].hex
        },
    {
      label: 'Safari',
      data: 14,
      color: colors[22].hex
        },
    {
      label: 'Chrome',
      data: 34,
      color: colors[32].hex
        },
    {
      label: 'Opera',
      data: 13,
      color: colors[17].hex
        },
    {
      label: 'Firefox',
      data: 24,
      color: colors[23].hex
        }
    ];


  $scope.pieOptions = {
    series: {
      pie: {
        show: true,
        innerRadius: 0.5,
        stroke: {
          width: 2
        },
        label: {
          show: true,
        }
      }
    },
    legend: {
      show: true
    },
  };

  $scope.barDataset = [
    {
      data: [['M', 80], ['T', 40], ['W', 20], ['Th', 20], ['F', 50]],
      bars: {
        show: true,
        barWidth: 0.6,
        align: 'center',
        fill: true,
        lineWidth: 0,
        fillColor: COLORS.default
      }
        }
    ];

  $scope.barOptions = {
    grid: {
      hoverable: false,
      clickable: false,
      color: 'white',
      borderWidth: 0,
    },
    yaxis: {
      show: false
    },
    xaxis: {
      mode: 'categories',
      tickLength: 0,
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: 'Roboto',
      axisLabelPadding: 5
    }
  };

  var seriesData = [[], [], []];
  var random = new Rickshaw.Fixtures.RandomData(150);

  for (var i = 0; i < 150; i++) {
    random.addData(seriesData);
  }


  $scope.options2 = {
    renderer: 'area',
    height: 250,
    padding: {
      top: 2, left: 0, right: 0, bottom: 0
    },
    interpolation: 'cardinal'
  };

  $scope.series = [{
    color: COLORS.primary,
    data: seriesData[0],
    name: 'Upload'
    }, {
    color: COLORS.bodyBg,
    data: seriesData[1],
    name: 'Download'
    }];

  $interval(function () {
    $scope.series = null;
    random.removeData(seriesData);
    random.addData(seriesData);

    $scope.series = [{
      data: seriesData[0],
        }, {
      data: seriesData[1],
        }];
  }, 1000);

  var seriesData2 = [[], [], []];
  var random2 = new Rickshaw.Fixtures.RandomData(100);

  for (var v = 0; v < 100; v++) {
    random2.addData(seriesData2);
  }

  $scope.options5 = {
    renderer: 'area',
    height: 133,
    padding: {
      top: 2, left: 0, right: 0, bottom: 0
    },
    interpolation: 'cardinal',
    stroke: false,
    strokeWidth: 1,
    preserve: true,
  };

  $scope.features5 = {

    hover: {
      xFormatter: function (x) {
        return new Date(x * 1000).toString();
      },
      yFormatter: function (y) {
        return Math.round(y);
      }
    }
  };

  $scope.series5 = [{
    color: COLORS.success,
    name: 'Earnings',
    data: seriesData2[0]
    }];

}

angular
  .module('urbanApp')
  .controller('dashboardCtrl', ['$scope', '$interval', 'COLORS', dashboardCtrl]);
