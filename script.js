window.onload = function() {
  document.body.append(document.createElement("h1"));
  document.body.lastChild.innerHTML = "Gradient";

  document.body.append(document.createElement("p"));
  document.body.lastChild.innerHTML = "I'm an amateur educator, musician, game designer, and animator who wants to help people understand difficult theories. Check out some of my lessons, music, and other work below.";

  document.body.append(document.createElement("button"));
  document.body.lastChild.innerHTML = "Lessons";
  document.body.lastChild.setAttribute("onclick", "alert('Lessons')");

  document.body.append(document.createElement("button"));
  document.body.lastChild.setAttribute("onclick", "alert('Music')");
  document.body.lastChild.innerHTML = "Music";

  document.body.append(document.createElement("button"));
  document.body.lastChild.innerHTML = "Games";
  document.body.lastChild.setAttribute("onclick", "alert('Games')");

  document.body.append(document.createElement("button"));
  document.body.lastChild.setAttribute("onclick", "alert('Animations')");
  document.body.lastChild.innerHTML = "Animations";
}