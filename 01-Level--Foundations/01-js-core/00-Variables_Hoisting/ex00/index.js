console.log("---- Exercice 1 : TDZ ----");
try
{
  console.log(futur);
}
catch (error)
{
  console.log("Erreur capturee :", error.message);
}

let futur = "Maintenant accessible !";
console.log(futur);
