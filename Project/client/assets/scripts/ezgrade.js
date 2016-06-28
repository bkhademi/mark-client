'use strict'
var api = "http://54.236.223.103/api";
var ezApp = angular.module('ezgrade', ['ngRoute', 'ngSanitize', 'ngDropzone', 'localytics.directives',
    //extend template
    'app',
    // ezgrade specific dependencies
    'satellizer'
]);

