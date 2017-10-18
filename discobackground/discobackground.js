/* Change the background color whenever the page is refreshed */


function disco() {
  
  var couleur = ["yellow","blue","red","pink","green","purple"];
  
  var blop= couleur[Math.round(Math.random()*(couleur.length-1))];
  
  document.body.style.backgroundColor = blop
}

window.onload = disco;

