
window.onload = function(){
var btn = document.getElementById('submit');
btn.onclick = function(){
    var user = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;
    if(user == ''){
    alert('The username is required');
    return false;
    }
    
    if(email == ''){
    alert('The email is required');
    return false;
    }
    if(feedback == ''){
        alert('The feedback is required');
        return false;
    }
    else{
        alert("Submit successfully");
        
    }
}
}
