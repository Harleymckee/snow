

var app = angular.module('snowZone', []);







app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
}); 




app.directive('theImage', function() {
		return {

			restrict: 'E',
			templateUrl: 'the-image.html',
			controller: 'ImgController',
			controllerAs: 'imgCtrl' 

		};
	});



app.controller('ImgController', ['$scope', '$http', 'socket', function($scope, $http, socket) {	

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



$scope.imgCtrl.tag = 'welcome';



  socket.on('supguys', function(msg){






$http.get('http://api.giphy.com/v1/gifs/random?api_key=5xaOcLHMQRWQPesDyc8&tag=' + $scope.imgCtrl.tag).then( function(response, err) {

/*

$scope.imgCtrl.topp = getRandomInt(-10, rangeNum) + 'vh';
$scope.imgCtrl.leftt = getRandomInt(-10, rangeNum) + 'vw';

*/

		var re = response.data, sponse = re.data;
	
	sponse.topp = getRandomInt(-20, 80) + 'vh';
	sponse.leftt = getRandomInt(-20, 80) + 'vw';
	sponseArr.push(sponse);
	$scope.imgCtrl.pics = sponseArr;



	
	}); 




  });



var sponseArr = [];






$scope.imgCtrl.changeImage = function() {








	$http.get('http://api.giphy.com/v1/gifs/random?api_key=5xaOcLHMQRWQPesDyc8&tag=' + $scope.imgCtrl.tag).then( function(response, err) {




		var re = response.data, sponse = re.data;


			sponse.topp = getRandomInt(-20, 80) + 'vh';
	sponse.leftt = getRandomInt(-20, 80) + 'vw';

		sponseArr.push(sponse);
	$scope.imgCtrl.pics = sponseArr;



	
	}); 


};




$scope.imgCtrl.clear = function() {

if (confirm('Are ya sure?')) {
		sponseArr = [];
		$scope.imgCtrl.pics = [];

	} else { 
		return;
	}


};




}]);



