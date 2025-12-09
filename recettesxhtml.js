
function afficheEnConsole(recette){
    console.log(`%c${recette.nom}`,"color:red; font-size:42px; text-transform:uppercase")
    console.log(`Diffculté : ${recette.difficulte}`)
    console.log(`Temps de préparation : ${recette.tempPreparation}`)
    console.log(`Temps de cuisson : ${recette.tempCuisson}`)
    console.log(`Pour ${recette.nbrPortions} personnes`)
    console.log("%cIngredients : ", "color:green; font-size: 18px; font-weight: bold")
    recette.ingredients.forEach(ingr=>{
        console.log(`- ${ingr}`)
    })

}


let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];

 //role : afficher les recettes dans la page
 //parametre : des recettes -> tableau d'objet 
 //return : rien

 function afficherRecette(tableauRecettes){

    //aller chercher les recettes une par une 
    // construire une carte a chaque fois qu'elle recupere une recette
    // envoyer la carte dans l'html

    tableauRecettes.forEach(recette => {
                let liste =""
        recette.ingredients.forEach(ingredient =>{
            liste += `<li> ${ingredient} </li>`

       document.getElementById("section1").innerHTML +=
        `
        <div class="card">
        <h2>${recette.nom}</h2>
        <p> difficultés: ${recette.difficulte}</p>
        <p> Tps de préparation : ${recette.tempPreparation}</p>
        <p> Pour ${recette.nbrPortions}personnes</p>
        <ul>${liste}</ul>

        </div>
        `

    });

        `
        
        `
    });
 }


 afficherRecette(recettes)