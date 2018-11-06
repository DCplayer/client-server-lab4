
const url = 'http://34.210.35.174:7000'
const message_section = document.getElementById('chatContent')
const message = document.getElementById('text')
const button = document.getElementById('button').addEventListener("click", function(){
send_message()
})

message.addEventListener("keypress", function(e){
	var keyCode = e.keyCode; 
	if(keyCode == 13){
		console.log("enter")
		send_message(); 
	}
})

function get_messages(){
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(myJson){
		console.log(myJson);

		message_section.innerHTML = ""; 
		for (var i = 0; i< myJson.length; i++){
			//create element post and fill it up D:
			var post = document.createTextNode(myJson[i].student_id + '-'+ myJson[i].nick + ': ' + myJson[i].text) 
			var div = create_post(post); 

			message_section.appendChild(div); 
		}
	});
}

function create_post(content){
	var post_ccl = document.createElement('div')
	post_ccl.style.width = '60%'
	post_ccl.style.height = 'auto'
	post_ccl.style.borderRadius = '10px'

	post_ccl.appendChild(content)
	return post_ccl
}

function send_message(){
	var obj = '{'
       +'"student_id" : "15151",'
       +'"text"  : '+ message.value +','
       +'"nick" : DC'
       +'}';
    console.log(obj)
    get_messages();

}

setInterval(function() {
    get_messages()
}, 5000);