console.log("\n --- Exercice 4 : CONST MUTATION ---");

const config = { editor: "Helix", OS: "WSL" };

config.editor = "Neovim";
console.log("config modifiee :", config);

try{
  config = {editor: "VSCode"};
}catch(error){
  console.log("Erreur reassignation :", error.message);
}
