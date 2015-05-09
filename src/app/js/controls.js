'use strict';

win.isMaximized = false;

// Minimize button.
document.getElementById('windowControlMinimize').onclick = function () {
  console.log('minimize');
  win.minimize();
};

// Maximize button.
document.getElementById('windowControlMaximize').onclick = function () {
  if (win.isMaximized) {
    win.unmaximize();
  } else {
    win.maximize();
  }
};

// Close button.
document.getElementById('windowControlClose').onclick = function () {
  win.close();
};

// Track maximize event.
win.on('maximize', function() {
  win.isMaximized = true;
});

// Track unmaximize event.
win.on('unmaximize', function() {
  win.isMaximized = true;
});