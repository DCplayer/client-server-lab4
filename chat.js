var input = document.getElementById("button"); 
var inputText = document.getElementById("text");
var listado = document.createElement("ul"); 
const display = document.getElementById("display")
const bigger_display = document.getElementById("chatContent")
const write_box = document.getElementByi('text')

//var myFetch = fetch('34.210.35.174');

const url = 'http://34.210.35.174:7000/'
	
function get_messages(){
	fetch(url)
	.then(res => res.json())
	.then(post => console.log(posts))
	.then(function(messages){
		messages.ForEach(function(message){
			const div = create_element_local(messages.id, messages.nick)
			aggregate(div, message.text)
		})
		bigger_display.scrollTop = bigger_display.scrollHeight
	})
}

function aggregate(container, content){
	var holder = document.createElement("li")
	holder.appendChild(container)
	holder.appendChild(document.createElement("br"))
	if(content.endsWith(".jpg")){
		var imagen = document.createElement("img")
		imagen.src = content
		holder.appendChild(imagen)
	}
	else{
		holder.appendChild(document.createElement(content))
	}
	display.appendChild(holder)
}

const newPost = post => {
	const options = {
		method: 'POST', 
		student_id: , 
		body:  
	}
	return fetch(url)
}


input.addEventListener("click", function(event){
	console.log("button")
  	
});

function send_message(id, text, nick) {

	if(id === ""){
		alert("No id was defined")
		return 
	}
	if(name === ""){
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
	.then(function{
		const div = create_element_local(id, nick)
		aggregate(div, text)
		write_box.value=""
		bigger_display.scrollTop = bigger_display.scrollHeight
	})
}

function create_element_local(id, nick){
	const content = nick + " - " + id
	const  result = document.createElement("div")
	
	result.setAttribute("id", "nameAndId") 
	result.appendChild(document.createTextNode(content))
    return result
}

