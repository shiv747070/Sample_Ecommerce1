function paste() {
navigator.clipboard.readText().then(clipText => document.getElementById("output").placeholder = clipText);
};

document.getElementById("remove").addEventListener("click",myfunction);
function myfunction(){
  document.getElementById("output").placeholder = "Authorisation code"
};
