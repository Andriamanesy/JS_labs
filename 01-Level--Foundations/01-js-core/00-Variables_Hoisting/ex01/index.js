console.log("\n--- Exercice for HOISTING FONCTIONS ---");

saluer();
function saluer(){
  console.log("Bonjour depuis le sommet !");
}

try{
  coder();
}
catch(error){
  console.log("Erreur coder :", error.message);
}

var coder = function(){
  console.log("En train de coder sur Helix ....");
}
