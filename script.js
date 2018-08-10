const myCanvas = document.createElement("canvas");
const myHeading = document.createElement("h1");
const myBody = document.createElement("div");

window.onload = function() {
  myCanvas.style.backgroundColor = "rgb(224, 224, 224)";
  myHeading.innerHTML = "Gradient";

  document.body.append(myCanvas);
  document.body.append(myHeading);
  document.body.append(myBody);
  window.onresize();
}

window.onresize = function() {
  myCanvas.width = document.body.clientWidth;
  myBody.innerHTML = "Resize detected!"
    + "<br>myCanvas.width: " + eval(myCanvas.width)
    + "<br>myCanvas.height: " + eval(myCanvas.height)
    + "<br>clientWidth: " + eval(document.body.clientWidth);
}