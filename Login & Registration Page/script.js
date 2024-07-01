function login() {
    let email, password;
    email = document.getElementById("tbemail").value;
    password = document.getElementById("tbpwd").value;
  
    let user_data = new Array();
    user_data = JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : [];
    if (
      user_data.some((val) => {
        return val.email == email && val.password == password;
      })
    ) {
      alert("Login successful");
      window.location.href = "profile.html";
      let current_user = user_data.filter((val) => {
        return val.email == email && val.password == password;
      })[0];
  
      localStorage.setItem("name", current_user.name);
      localStorage.setItem("email", current_user.email);
      window.location.href = "profile.html";
    } else {
      alert("Login fail");
    }
  }
  function registerUser() {
    let name, email, password;
    name = document.getElementById("tbname").value;
    email = document.getElementById("tbemail").value;
    password = document.getElementById("tbpwd").value;
  
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("password"));
    let user_data = new Array();
    user_data = JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : [];
    if (
      user_data.some((val) => {
        return val.email == email;
      })
    ) {
      document.getElementById("display").innerHTML =
        "&#33; &nbsp;Account already exists &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x";
      window.location.href = "login.html";
    } else {
      user_data.push({
        name: name,
        email: email,
        password: password
      });
      /* alert("Registation successful , Click Login!"); 
      document.getElementById("display").innerHTML =
        "&#9989; &nbsp;Registration successful";  */
    }
  
    localStorage.setItem("userData", JSON.stringify(user_data));
  }
  