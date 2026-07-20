console.log("\n --- EXERCICE 5 : Boucles ---");

for (var i = 0; i < 3; i++){
  
}

console.log("Valeur de i hor de la boucle (var) :", i);

for(let j = 0; j < 3; j++){
  
}
try{
  console.log(j);
}catch(error){
  console.log("J n'est pas accesible ici (let) :", error.message);
}
