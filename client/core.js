
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


var here = this, sponseArr = [];

this.tag = '8bit';



this.changeImage = function() {


var tagg = this.tag;


	$http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + tagg).then( function(response) {

		var re = response.data, sponse = re.data;

		//console.log(sponse);



		sponseArr.push(sponse);
		here.pics = sponseArr;
	});

};




this.clear = function() {

		sponseArr = [];
		here.pics = [];


};




}]);



