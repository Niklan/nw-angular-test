'use strict';
var os = require('os');
var fs = require('fs');
var http = require('http');
var request = require('request');
var url = require('url');
var gui = require('nw.gui');
var win = gui.Window.get();
var app = angular.module('app', ['ngRoute'])
  .config(router);

/**
 * Global variables.
 */
 // SoundCloud API app data.
var client_id = '72f8a844fd35244a554ba608d521aa8b';
var client_secret = 'SECRET';
var redirect_uri = 'http://localhost:3000';
