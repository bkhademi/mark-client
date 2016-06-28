'use strict'
var api = "http://ezgrade.ddns.net/api";
var ezApp = angular.module('ezgrade', ['ngRoute', 'ngSanitize', 'ngDropzone', 'localytics.directives',
    //extend template
    'app',
    // ezgrade specific dependencies
    'satellizer'
]);

