/**
 * @file
 * This file contain control elements for window created by <titlebar> element.
 */
'use strict';

var gui = require('nw.gui');
var win = gui.Window.get();
win.isMaximized = false;

/**
 * Because our toolbar can by dynamically created by angular, we look at global
 * click event.
 */
document.addEventListener('click', function (e) {
  if (e.srcElement.id == 'windowControlMinimize') {
    win.minimize();
  }

  switch (e.srcElement.id) {
    case 'windowControlMinimize':
      win.minimize();
      break;

    case 'windowControlMaximize':
      if (win.isMaximized) {
        win.unmaximize();
      } else {
        win.maximize();
      }
      break;

    case 'windowControlClose':
      win.close();
      break;
  }
});

// Track maximize event.
win.on('maximize', function() {
  win.isMaximized = true;
});

// Track unmaximize event.
win.on('unmaximize', function() {
  win.isMaximized = true;
});
