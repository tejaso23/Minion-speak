/*var input = document.querySelector("#textinput");
var translatebutton = document.querySelector("#buttontxt");
var serverurl =
  "https://api.funtranslations.com/translate/minion.json?text=";
var outputvar = document.querySelector("#output");
function error() {
  prompt("there is an error");
}
function onclicking() {
 /* var jsonconverter = fetch(constructurl(input.value))
    .then((response) => response.json())
    .then((json) => {
      var saved = json.contets.translated;
      outputvar.innerText = saved;
    })
    .catch(error);
    var inputtext = input.value ;
    fetch(constructurl(inputtext)).then(response => response.json()).then(json => {
        var saved = json.contets.translated;
      outputvar.innerText = saved;
    })
}
function constructurl(input) {
  return serverurl + input;
}
translatebutton.addEventListener("click", onclicking);*/

var inputtext = document.querySelector("#textinput");
var translatebutton = document.querySelector("#buttontxt");
var serverurl = "https://api.funtranslations.com/translate/minion.json";
var outputvar = document.querySelector("#output");

function error() {
  prompt("there is an error");
}


function onclicking() {
  var input = inputtext.value;

  fetch(serverurl + "?text=" + input)
    .then(response => response.json())
    .then(json => {
      var translated = json.contents.translated;
      outputvar.textContent = translated;
    })
    .catch(error);
}

translatebutton.addEventListener("click", onclicking);

/*var inputtext = document.querySelector("#textinput");
var translatebutton = document.querySelector("#buttontxt");
var serverurl = "https://api.funtranslations.com/translate/minion.json";
var outputvar = document.querySelector("#output");

function error() {
  prompt("there is an error");
}


function onclicking() {
  var input = inputtext.value;

  fetch(serverurl + "?text=" + input)
    .then(response => response.json())
    .then(json => {
      var translated = json.contents.translated;
      outputvar.textContent = translated;
    })
    .catch(error);
}

translatebutton.addEventListener("click", onclicking);*/
