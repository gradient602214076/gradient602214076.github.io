const myCanvas = document.createElement("canvas");
const myDiv = document.createElement("div");

window.onload = function() {
  myCanvas.style.backgroundColor = "rgb(224, 224, 224)";

  myDiv.style.marginLeft = Math.floor(window.innerWidth / 4) + "px";
  myDiv.style.marginRight = myDiv.style.marginLeft;
  myDiv.innerHTML = "<h1>Gradient</h1><p>Bacon ipsum dolor amet shoulder rump pig swine sirloin, filet mignon bresaola meatball shank buffalo leberkas andouille prosciutto tenderloin biltong. Cow fatback bresaola, shankle biltong filet mignon chuck prosciutto kielbasa pork loin burgdoggen hamburger porchetta cupim. Flank buffalo doner, pig chuck brisket jerky capicola tongue landjaeger. Ham hock pork chop short ribs buffalo. Beef pork loin brisket chicken, swine ground round cupim. Buffalo fatback cow turkey short loin chicken beef ribs swine. Strip steak beef ribs tri-tip ground round, pork chop short ribs fatback buffalo rump spare ribs tenderloin. Pork pastrami brisket, strip steak frankfurter salami meatloaf ground round kevin jowl boudin bacon. Short loin meatloaf tail ground round sausage drumstick. Sirloin pork chop jerky strip steak landjaeger porchetta leberkas tail beef ribs hamburger pancetta cow meatloaf pork ham hock.</p>";

  document.body.style.margin = "0";
  document.body.append(myCanvas);
  document.body.append(myDiv);

  window.onresize();
}

window.onresize = function() {
  myCanvas.width = window.innerWidth;
  myCanvas.height = Math.floor(window.innerHeight / 2);
}