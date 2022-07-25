function validate()
  {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    let submit =  document.getElementById("submit");


    let navigate_to_profile = function(){
    window.location = "/profile.html"
    }

    submit.addEventListener("click", navigate_to_profile)
    
    
    if(username == "ayushi" && password == "password"){
      alert("login successful");
      return false;
      
    }
    else{
      alert("login failed");
      
    }
    
  }