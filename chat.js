
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
			let number = 1; 
			if(myJson[i].student_id == '15151'){
				number = 2; 
			} 
			console.log(number)
			var div = create_post(post, number); 
			message_section.appendChild(div); 
		}
	});
}

function create_post(content, number){
	var post_ccl = document.createElement('div')
	let color = '#87CEEB'
	post_ccl.style.width = '60%'
	post_ccl.style.padding = '10px'
	post_ccl.style.margin = '5px 0px'
	post_ccl.style.height = 'auto'
	post_ccl.style.borderRadius = '10px'
	if(number === 2){
		color = '#90EE90'
		post_ccl.style.margin = '5px 0px 5px 100px'
	}
	post_ccl.style.background = color 
	post_ccl.appendChild(content)
	return post_ccl
}

function send_message(){
	var data = new FormData();
	data.append('student_id', '15151')
	data.append('text', message.value)
	data.append('nick', 'DC')
	
    console.log(data)

    var request = new XMLHttpRequest(); 
    request.open("POST", url)
    request.send(data)
    get_messages();

}

setInterval(function() {
    get_messages()
}, 5000);