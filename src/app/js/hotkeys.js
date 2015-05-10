/**
 * @file
 * Hotkeys for app.
 */

document.onkeydown = function (e) {
  /**
   * Dev tools.
   * Ctrl+Shift+I.
   */
  if (e.ctrlKey === true && e.shiftKey === true && e.keyCode === 73) {
    e.preventDefault();
    win.showDevTools();
    return false;
  }
};
