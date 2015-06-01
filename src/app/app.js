(function() {
    'use strict';

    angular
        .module('theme', [
            'ngSanitize',
            'mgcrea.ngStrap',
            'ui.bootstrap.carousel'
        ])
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, $modal) {

        $scope.openModal = openModal;
        $scope.slides = [
            'http://placehold.it/1140x500',
            'http://placehold.it/1140x500',
            'http://placehold.it/1140x500'
        ];
        $scope.dropdown = [{
            "text": "<i class=\"glyphicon glyphicon-download\"></i>&nbsp;Another action",
            "href": "#"
        }, {
            "text": "<i class=\"glyphicon glyphicon-globe\"></i>&nbsp;Display an alert",
            "href": "#"
        }, {
            "text": "<i class=\"glyphicon glyphicon-link\"></i>&nbsp;External link",
            "href": "#"
        }, {
            "divider": true
        }, {
            "text": "Separated link",
            "href": "#"
        }];

        function openModal() {
            $modal({
                title: 'Modal title',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                show: true
            });
        }

    }

}());
