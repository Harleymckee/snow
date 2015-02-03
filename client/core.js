
var app = angular.module('snowZone', []);

app.directive('theImage', function() {
		return {

			restrict: 'E',
			templateUrl: 'the-image.html',
			controller: 'ImgController',
			controllerAs: 'imgCtrl' 

		};
	});



app.controller('ImgController', ['$scope', '$http', function($scope, $http) {	


var here = this;

	$http.get('http://api.giphy.com/v1/gifs/search?q=science&api_key=dc6zaTOxFJmzC&limit=5%22').then( function(response) {

			var re = response.data, sponse = re.data;

		console.log(sponse);

		here.pics = sponse;


	});







}]);



