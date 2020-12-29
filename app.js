var inputTxt = document.querySelector("#inputText");
var button = document.querySelector("#btn");
var output = document.querySelector("#out");
button.addEventListener("click",clickHandler);
var serverUrl = "https://api.funtranslations.com/translate/dothraki.json"
function outUrl(text){
    return serverUrl+"?"+"text="+text;
}
function errorHandler(error){
    console.log("Error occured",error);
    alert("Oops something went worng try again later :) ");
}
function clickHandler(){
    var input=inputTxt.value;
    console.log(input)
    fetch(outUrl(input))
        .then(response => response.json())
        .then(json => {
            var txt = json.contents.translated;
            output.innerText = txt;
        })
        .catch(errorHandler)
}