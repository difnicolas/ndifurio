alert(document.title)
function changeBGColor(){
	document.body.background = red;
}
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function sendEmailStatus(){
	var email = "difnicolas@gmail.com"
	if(validateEmail(email))
		alert("Valid Email")
	else
		alert("Invalid Email")
}