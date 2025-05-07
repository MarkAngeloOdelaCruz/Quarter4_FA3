var a, b;
var num = parseInt(prompt("Please enter a number:"));
let shape = "";

let cList = "";
const contact = [];

while (Number.isInteger(num) == false){
  num = parseInt(prompt("Please enter a number:"));
}

document.getElementById("numinput").innerHTML = "Number inputted: " + num;

if(num%2 == 0){
  for(a=num; a>=1; a--){
    for(b=0; b<a; b++){
      shape = shape + a + " ";
    }
  shape = shape + "<br>";
  }
  document.getElementById("shape").innerHTML = shape;
}

else{
  for(a=num; a>=1; a--){
    for(b=0; b<num; b++){
      shape = shape + a + " ";
    }
    shape = shape + "<br>";
  }
  document.getElementById("shape").innerHTML = shape;
}

function addContact(){
  let newContact = document.getElementById("entry").value;
  
  if(contact.length < 7){
    contact.push(newContact);
    list = ""
    for(a=0; a<contact.length; a++){
      list = list + contact[a] + " ";
    }
    document.getElementById("contactList").innerHTML = list;
  }
  
  else{
    contact.shift();
    contact.push(newContact);
    list = ""
    for(a=0; a<contact.length; a++){
      list = list + contact[a] + " ";
    }
    document.getElementById("contactList").innerHTML = list;
  }
}

function removeContact(){
  contact.pop();
  list = ""
  for(a=0; a<contact.length; a++){
    list = list + contact[a] + " ";
  }
  document.getElementById("contactList").innerHTML = list;
}