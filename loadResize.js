window.onload = function() {
  const fc = document.body.firstChild; // First child will be resized to satisfy maximum 16:9 ratio
  if (9*window.innerWidth > 16*window.innerHeight) {
    // If the window is too wide, first child's height is determined window.innerHeight
    fc.height = document.body.height - (document.body.height % 9);
    fc.width = (fc.height/9)*16;
  } else {
    // Else, the first child's width is determined by window.innerWidth
    fc.width = document.body.width - (document.body.width % 16);
    fc.height = (fc.width/16)*9;
  }
};

window.onresize = window.onload;