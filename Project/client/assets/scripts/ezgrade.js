'use strict'
var  api = "http://ezgrade-api.ddns.net/api";
var ezApp = angular.module('ezgrade', ['ngRoute', 'ngSanitize', 'ngDropzone', 'localytics.directives', 'mgo-angular-wizard','xeditable',
    //extend template
    'app',
    // ezgrade specific dependencies
    'satellizer',
    'ngResource'
    
]);

