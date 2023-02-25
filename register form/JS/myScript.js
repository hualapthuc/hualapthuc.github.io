function formValid(){
    if(document.getElementById("Username").value==""){
        document.getElementById("testUsername").innerHTML="Username is required"
    }else{
        document.getElementById("testUsername").innerHTML="";
    }
    if(document.getElementById("Password").value == ""){
        document.getElementById("testPassword").innerHTML= "Password is required"
    }else{
        document.getElementById("testPassword").innerHTML="";
        }
     if(document.getElementById("Confirm").value == ""){
        document.getElementById("testCofirm").innerHTML= "Confirm password is required";
     }else if(document.getElementById("Confirm").value != document.getElementById("Password").value){
        document.getElementById("testConfirm").innerHTML= "Confirm password and password do not match !"
     }else{
      document.getElementById("testConfirm").innerHTML="";
     }
     if(document.getElementById("testConfirm").innerHTML == "" && document.getElementById("testPassword").innerHTML == "" && document.getElementById("testUsername").innerHTML == ""){
      document.getElementById("success").innerHTML= "You have registered successfully";
     }
}
