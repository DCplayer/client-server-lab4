var input = document.getElementById("button"); 
var inputText = document.getElementById("text");
var listado = document.createElement("ul"); 

//var myFetch = fetch('34.210.35.174');


inputText.addEventListener("keyup", function(event){
	event.preventDefault();
	console.log("keycode", event.keyCode);
	if(event.keyCode === 13){
  	document.getElementById("button").on("click");
	}
	

});

input.addEventListener("click", function(event){
	console.log("button")
  	
});

function Send() {
	console.log("sending")
    }