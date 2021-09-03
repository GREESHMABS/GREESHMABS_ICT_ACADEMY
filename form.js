let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let error=document.getElementById("error");
let regexp=/^([A-Z a-z 0-9\.-]+)@([A-Z a-z 0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
let passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function validate(){

    pwd.style.border="none";
    email.style.border="none";
    checkbody.innerHTML="";

    if(email.value=="" && pwd.value==""){
        alert("fields cannot be empty");
        pwd.style.border="2px solid red";
        email.style.border="2px solid red";
        return false;
    }
    else if(email.value==""){
        alert("Email cannot be empty!");
        email.style.border="2px solid red";
        return false;
    }
    else if(!regexp.test(email.value)){
        email.style.border="2px solid red";
        checkbody.innerHTML="Email invalid";
        checkbody.style.color="red";
        return false;
    }
    else if(pwd.value==""){
        alert("Password cannot be empty!");
        pwd.style.border="2px solid red";
        return false;
    }
    else if(pwd.value.length<8){
         alert("password is too short");
         pwd.style.border="2px solid red";
         return false;
    }
    else if(!passregex.test(pwd.value)){
        pwd.style.border="2px solid red";
        checkbody.innerHTML="Password invalid";
        checkbody.style.color="red";
        return false;
    }
    else{
        alert("Success!");
        document.getElementById("loginform").action = "Intex.html";
        return true;
    }
}
  
