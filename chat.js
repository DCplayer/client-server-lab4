const inputText = document.getElementById("text");
var listado = document.createElement("ul"); 
const display = document.getElementById("display")
const bigger_display = document.getElementById("chatContent")
const write_box = document.getElementById('text')
const sendbtn = document.getElementById("button").addEventListener("click", function(){
  send_message("52", inputText.value, "DC")
})

inputText.addEventListener("keypress", function(e){
  var keyCode = e.keyCode;
  if(keyCode == 13){
      console.log("enter");
      send_message('52',inputText.value,'DC')
  }
})
//var myFetch = fetch('34.210.35.174');

const url = 'http://34.210.35.174:7000/'
const id = '52'
const nick = 'DC'
	
function get_messages(){
	fetch(url)
	.then(res => res.json())
	.then(post => console.log(posts))
	.then(function(messages){
		messages.ForEach(function(message){
			const div = create_element_local(messages.id, messages.nick, inputText.value)
			aggregate(div, messages.text)
		})
		bigger_display.scrollTop = bigger_display.scrollHeight
	})
}

function aggregate(divition, content){
	//divition = div con nick y con id
	//content = el mensaje a agregar

	var texto = document.createTextNode(content)
	divition.appendChild(texto)

	console.log(content)

	var holder = document.createElement("li")
	if(content.endsWith(".jpg")){
		var imagen = document.createElement("img")
		imagen.src = content
		holder.appendChild(imagen)
	}
	else{
		holder.appendChild(document.createTextNode(content))
	}
	display.appendChild(holder)
}

const newPost = post => {
	const options = {
		method: 'POST', 
		student_id: 'id', 
		body: 'cuerpazo' 
	}
	return fetch(url)
}


function send_message(id, text, nick) {
	console.log(id)
	console.log(text)
	console.log(nick)
	if(id === ""){
		alert("No id was defined")
		return 
	}
	if(nick === ""){
		alert("No name was defined")
		return 
	}
	if(text === ""){
		alert("No message was written")
		return 
	}
  
	const struct = new FormData(); 
	struct.append('student_id', id)
	struct.append('text', text)
	struct.append('nick', nick)

	const post = {
		method: 'POST', 
		body: struct  
	}
	fetch(url, post)
	.then(function(){
		const div = create_element_local(id, nick)
		aggregate(div, text)
    	console.log("PASO")
		write_box.value=""
		bigger_display.scrollTop = bigger_display.scrollHeight

	})
}

function create_element_local(id, nick, text){
	var li = document.createElement("li")
	const content = id + " === " + nick
	const  result = document.createElement("div")

	li.appendChild(document.createTextNode(content))
	if(text.endsWith(".jpg")){
		var imagen = document.createElement("img")
		imagen.src = content
		li.appendChild(imagen)
	}
	else{
		li.appendChild(document.createTextNode(text))
	
	}
    result.setAttribute(li) 
    console.log(result)

    display.appendChild(result)
    return result
}

setInterval(function(){
  get_messages()
  console.log("")
}, 2000)

