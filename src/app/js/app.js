'use strict';

var os = require('os');
var gui = require('nw.gui');
var win = gui.Window.get();
var app = angular.module('app', ['ngRoute']);

app.config(router);

