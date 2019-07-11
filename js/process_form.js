function init(){

  function validateData(x){
    let regex;

    switch(x){

      case first:
        regex = /^\D+$/gi;
        if (first.value.match(regex)){
          error(first, true);
          valid.first = true;
        } else {
          error(first, false);
          valid.first = false;
        }
        break;

      case last:
        regex = /^\D+$/gi;
        if (last.value.match(regex)){
          error(last, true);
          valid.last = true;
        } else {
          error(last, false);
          valid.last = false;
        }
        break;

      case email:
        regex = /[\D\d]+@\D+\.\D+$/gi;
        if (email.value.match(regex)){
          error(email, true);
          valid.email = true;
        } else {
          error(email, false);
          valid.email = false;
        }
        break;

      case phone:
        regex = /^\(?\d{3}\)?[ ]?-?\d{3}-?[ ]?\d{4}$/g;
        if (phone.value.match(regex)){
          error(phone, true);
          valid.phone = true;
        } else {
          error(phone, false);
          valid.phone = false;
        }
        break;

      case server:
        regex = /(http|https):\/\/students\.cah\.ucf\.edu\/\~.+/gi;
        if (server.value.match(regex)){
          error(server, true);
          valid.server = true;
        } else {
          error(server, false);
          valid.server = false;
        }
        break;
    }
  }

  function error (x, valid){
    let span = x.nextElementSibling;
    span.firstChild.nodeValue = '';
    span.removeChild(span.firstChild);
    let img = document.createElement("img");
    img.style.width = "20px";
    if (valid) {
        img.setAttribute("src", "img/valid.png");
        x.style.border = "3px solid green";
    } else {
      img.setAttribute("src", "img/invalid.png");
      x.style.border = "3px solid red";
    }
    span.appendChild(img);
  }

  function giveResult(result){

    switch(result){
      case "jon":
        badge.setAttribute("src", "img/jon.jpg");
        if (!h2.firstChild){
          h2.appendChild(document.createTextNode("You're Jon Snow!"));
        } else h2.firstChild.nodeValue = "You're Jon Snow!";
        caption.nodeValue = "https://students.cah.ucf.edu/~ta741447/dig3716c/assignment2/img/jon.jpg";
        break;

      case "tyrion":
        badge.setAttribute("src", "img/tyrion.jpg");
        if (!h2.firstChild){
          h2.appendChild(document.createTextNode("You're Tyrion Lannister!"));
        } else h2.firstChild.nodeValue = "You're Cersei Lannister";
        caption.nodeValue = "https://students.cah.ucf.edu/~ta741447/dig3716c/assignment2/img/tyrion.jpg";
        break;

      case "cersei":
        badge.setAttribute("src", "img/cersei.jpg");
        if (!h2.firstChild){
          h2.appendChild(document.createTextNode("You're Cersei Lannister"));
        } else h2.firstChild.nodeValue = "You're Cersei Lannister";
        caption.nodeValue = "https://students.cah.ucf.edu/~ta741447/dig3716c/assignment2/img/cersei.jpg";
        break;
    }
  }

  // variables for form elements
  let form = document.forms[0];
  let first = document.getElementById("firstName");
  let last = document.getElementById("lastName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let server = document.getElementById("server");
  let a1a = document.getElementById('a1a');
  let a1b = document.getElementById('a1b');
  let a2a = document.getElementById('a2a');
  let a2b = document.getElementById('a2b');


  // variables to check validity of inputs
  let valid = {
    first: false,
    last: false,
    email: false,
    phone: false,
    server: false
  };

  // variables and elements for quiz results
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let badgeDiv = document.createElement("div");
  let badge = document.createElement("img");
  let caption = document.createTextNode("");
  badge.style.width = "450px";
  badgeDiv.style.width = "450px";
  badgeDiv.style.textAlign = "center";
  document.getElementsByTagName("main")[0].appendChild(badgeDiv);

  // form validation
  first.onfocus = function(){
    if (!valid.first){
      let hint = first.nextElementSibling;
      if (hint.firstChild){
        hint.removeChild(hint.firstChild);
      }
      hint.appendChild(document.createTextNode("Please enter your first name"));

      first.onblur = function(){
        validateData(this);
      }
    }
  }

  last.onfocus = function(){
    if (!valid.last){
      let hint = last.nextElementSibling;
      if (hint.firstChild){
        hint.removeChild(hint.firstChild);
      }
      hint.appendChild(document.createTextNode("Please enter your last name"));

      last.onblur = function(){
        validateData(this);
      }
    }
  }

  email.onfocus = function(){
    if (!valid.email){
      let hint = email.nextElementSibling;
      if (hint.firstChild){
        hint.removeChild(hint.firstChild);
      }
      hint.appendChild(document.createTextNode("Please enter your email"));

      email.onblur = function(){
        validateData(this);
      }
    }
  }

  phone.onfocus = function(){
    if (!valid.phone){
      let hint = phone.nextElementSibling;
      if (hint.firstChild){
        hint.removeChild(hint.firstChild);
      }
      hint.appendChild(document.createTextNode("Please enter your phone number"));

      phone.onblur = function(){
        validateData(this);
      }
    }
  }

  server.onfocus = function(){
    if (!valid.server){
      let hint = server.nextElementSibling;
      if (hint.firstChild){
        hint.removeChild(hint.firstChild);
      }
      hint.appendChild(document.createTextNode("Please enter your Students Server URL"));

      server.onblur = function(){
        validateData(this);
      }
    }
  }

  // on submit
  form.onsubmit = function(){
    while (badgeDiv.firstChild){
      badgeDiv.removeChild(badgeDiv.firstChild);
    }
    if ((Object.values(valid).every(Boolean)) && (a1a.checked || a1b.checked) && (a2a.checked || a2b.checked)){

        badgeDiv.appendChild(document.createTextNode("First Name: " + first.value));
        badgeDiv.appendChild(document.createElement("br"));
        badgeDiv.appendChild(document.createTextNode("Last Name: " + last.value));
        badgeDiv.appendChild(document.createElement("br"));
        badgeDiv.appendChild(document.createTextNode("Email: " + email.value));
        badgeDiv.appendChild(document.createElement("br"));
        badgeDiv.appendChild(document.createTextNode("Phone Number: " + phone.value));
        badgeDiv.appendChild(document.createElement("br"));
        badgeDiv.appendChild(document.createTextNode("Students Server URL: " + server.value));
        badgeDiv.appendChild(document.createElement("br"));

        badgeDiv.appendChild(h2);
        badgeDiv.appendChild(badge);
        badgeDiv.appendChild(caption);

        if (a1a.checked && a2a.checked){
          var result = "jon";
          giveResult(result);
          return false;
        }
        else if (a1a.checked && a2b.checked) {
          var result = "cersei";
          giveResult(result);
          return false;
        }
        else {
          var result = "tyrion";
          giveResult(result);
          return false;
        }
    } else {
        badgeDiv.appendChild(document.createTextNode("Error: Form completed incorrectly!"));
        return false;
      }
  }
}

window.addEventListener("load", init, false);
