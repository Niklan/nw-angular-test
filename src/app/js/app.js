'use strict';

var os = require('os');
var fs = require('fs');
var gui = require('nw.gui');
var win = gui.Window.get();
var app = angular.module('app', ['ngRoute'])
  .config(router);

