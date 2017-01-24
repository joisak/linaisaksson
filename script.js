

    // create the module and name it scotchApp
 var scotchApp = angular.module('scotchApp', ['ngRoute']);

  scotchApp.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/about.html',
                controller  : 'mainController'
            })

            .when('/home', {
                templateUrl : 'pages/about.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            $locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = '';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    scotchApp.controller('projectController', function($scope) {
    	$scope.message('Project yeah yeah yeah');
    });

    $(document).ready(function(){
        
    var pathname = window.location.pathname;
    console.log(pathname);
        var windowH = $(window).height();
        console.log(windowH);
        $('.wrapper').css({'height' :windowH});
        

          $(function(){
          $("#jumbotron").typed({
            strings: ["Lina Isaksson."],
            typeSpeed: 120
          });
        });

    $('#home').click(function(){
        $('#jumbotron').css({'top' : windowH / 2 - 160  + 'px'});
        $(function(){
          $("#jumbotron").typed({
            strings: ["Lina Isaksson."],
            typeSpeed: 120
          });
        });

    });


    });


