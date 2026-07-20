var text = "Global";

function afficher(){
  console.log("A :", text);
  var text = "Local";
  console.log("B :", text);
}

afficher();
console.log("C :", text);
