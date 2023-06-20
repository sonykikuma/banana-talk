var btnTranslate= document.querySelector("#btn-translate")

var txtInput= document.querySelector("#txt-input")
var outputDiv= document.querySelector("#output")


var url="https://api.funtranslations.com/translate/minion.json";

function getTranslation(text){
return url +"?"+"text=" +text
}



function clickEventhandler(){
    //console.log("clicked");
   // console.log("input", txtInput.value)
    //outputDiv.innerText="translate:  " + txtInput.value
var inputText= txtInput.value
fetch(getTranslation(inputText)).then(response=> response.json())
.then(data=>{
    var translatedText= data.contents.translated
    outputDiv.innerText= translatedText})
    //console.log(data.contents.translated))
    .catch(err=> console.log(err))

}

btnTranslate.addEventListener("click",clickEventhandler
)
//document.body.style.backgroundColor="green" ---write in console after inspect to change