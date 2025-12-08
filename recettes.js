let recette={
    nom:"poulet rôti au thym et à l'ail",
    difficulte:"Facile",
    tempPreparation:"15 min",
    tempCuisson:"1H15 min",
    nbrPortions: 6,
    ingredients : ["huile d'olive","beurre fondu","",""]
}

console.log(
    `
    ${recette.nom}
    difficulté: ${recette.difficulte}
    temps de prepa : ${recette.tempPreparation}
    temps cuisson : ${recette.tempCuisson}
    nombres de portions : ${recette.nbrPortions}
    ingredients : ${recette.ingredients}
     `
)

recette.ingredients.forEach(ingredients =>{
    console.log(`-${ingredients}`)
});



//je veux recup chaque recettes une par une
//a chaque recette recup je veux afficher dans la console : son nom, sa difficulté, etc..

ingredients.forEach(element => {
    
});