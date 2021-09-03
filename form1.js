  let firstname=document.getElementById("firstname");
  let lastname=document.getElementById("lastname");
  let emailid=document.getElementById("emailid");
  let password=document.getElementById("pwd");
  let phone=document.getElementById("phonenumber");
  let retypepassword=document.getElementById("retypepassword");
  let pass=document.getElementById("pass");
  let checkbody=document.getElementById("checkbody");

  let regexp=/^([A-Z a-z 0-9\.-]+)@([A-Z a-z 0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
  let passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
function signup(){

    firstname.style.border="none";
    lastname.style.border="none";
    emailid.style.border="none";
    phone.style.border="none";
    password.style.border="none";
    retypepassword.style.border="none";
    checkbody.innerHTML="";

    let check = "Y";
    if(firstname.value==""){
        firstname.style.border="2px solid red";
        check = "N";       
    }
    if(lastname.value==""){
        lastname.style.border="2px solid red";
        check = "N";      
    }
    if(emailid.value==""){
        emailid.style.border="2px solid red";
        check = "N";     
    }else{
        if(!regexp.test(emailid.value)){
            emailid.style.border="2px solid red";
            checkbody.innerHTML="Email invalid";
            checkbody.style.color="red";
            check = "N"; 
        }
    }
    if(phone.value==""){
        phone.style.border="2px solid red";
        check = "N";     
    }else{
        if(!phone.value.match(phoneno)) {
            phone.style.border="2px solid red";
            alert("Phone number not valid! - Acceptable formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX");
            check = "P"; 
          }        
    }
    if(password.value==""){
        password.style.border="2px solid red";
        check = "N";      
    }
    if(retypepassword.value==""){
        retypepassword.style.border="2px solid red";
        check = "N";      
    }

    if(check == "Y"){
        if(!passregex.test(password.value)){
            password.style.border="2px solid red";
            alert("Password invalid! - Min 8 cherecters, Atleast one Upper and Lower Cases, Must contain numbers and special charecters.");
            return false;
        }else if(password.value != retypepassword.value){

            password.style.border="2px solid red";
            retypepassword.style.border="2px solid red";
            alert("Password not match!");
        }else{
        alert("Success!");
        pass.innerHTML="";
        firstname.value="";
        lastname.value="";
        emailid.value="";
        phone.value="";
        password.value="";
        retypepassword.value="";
        document.getElementById("signupform").action = "login.html";
        
        return true;
        }
    }else if(check == "N"){
        alert("fields cannot be empty");
        return false;
    }else{
        return false;
    }
   
}

var myInput = document.getElementById("pwd");

myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(passregex.test(pwd.value)){
        pwd.style.border="2px solid #7fff00"; 
        pass.innerHTML="Strong!";
        pass.style.color="#7fff00"; 
    }
    else if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && myInput.value.match(numbers)) {  
        pwd.style.border="2px solid #FFA500"; 
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500";
    } 
    else if(myInput.value.match(upperCaseLetters) && myInput.value.match(numbers) && myInput.value.length >= 8) {  
        pwd.style.border="2px solid #FFA500";
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500"; 
    }
    else if(myInput.value.match(lowerCaseLetters) && myInput.value.match(numbers) && myInput.value.length >= 8) {  
        pwd.style.border="2px solid #FFA500"; 
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500"; 
    }
    else if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && myInput.value.length >= 8){
        pwd.style.border="2px solid #FFA500"; 
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500"; 
    }
    else if(myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters)){
        pwd.style.border="2px solid #FFA500"; 
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500"; 
    }
    else if(myInput.value.match(upperCaseLetters) && myInput.value.match(numbers)){
        pwd.style.border="2px solid #FFA500"; 
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500"; 
    }
    else if(myInput.value.match(numbers) && myInput.value.length >= 8){
        pwd.style.border="2px solid #FFA500"; 
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500"; 
    }
    else if(myInput.value.match(lowerCaseLetters) && myInput.value.length >= 8){
        pwd.style.border="2px solid #FFA500"; 
        pass.innerHTML="Medium!";
        pass.style.color="#FFA500"; 
    }
    else if(myInput.value.match(lowerCaseLetters)) {  
        pwd.style.border="2px solid red"; 
        pass.innerHTML="Poor!";
        pass.style.color="red";
    } 
    else if(myInput.value.match(upperCaseLetters)) {  
        pwd.style.border="2px solid red";
        pass.innerHTML="Poor!";
        pass.style.color="red"; 
    }
    else if(myInput.value.match(numbers)) {  
        pwd.style.border="2px solid red"; 
        pass.innerHTML="Poor!";
        pass.style.color="red";
    } 
    else if(myInput.value.length >= 8) {
        pwd.style.border="2px solid red"; 
        pass.innerHTML="Poor!";
        pass.style.color="red";
    }
}