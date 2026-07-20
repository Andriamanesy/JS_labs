console.log("\n--- Exercice SHADOWING ---");

let outils = "Helix";
console.log("1. Externe :", outils);

{
  let outils = "Tmux";
  console.log("2. Interne :", outils);
}

console.log("3. Externe apres le bloc :", outils);
