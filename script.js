// Ecoute l'évenement click sur le bouton '-'
document.getElementById('moins').addEventListener("click", function() {
    let nbrePersonne = document.getElementById('nbrePersonne');
    if (parseFloat(nbrePersonne.textContent) != 1) { // Pour ne pas descendre en dessous 1 personne
        nbrePersonne.textContent = parseFloat(nbrePersonne.textContent) - 1; // On diminue de 1 le nbre de personne
        let quantity = document.getElementsByClassName("quantiy");
        for (i = 0; i < quantity.length; i++) { // Parcours les quantités
            quantity[i].textContent = ( parseFloat(quantity[i].textContent) * parseFloat(nbrePersonne.textContent) ) / ( parseFloat(nbrePersonne.textContent) +1); // Calcule les nouvelles quantités
        }
    }
// Ecoute l'évenement click sur le bouton '+'  
});
document.getElementById('plus').addEventListener("click", function() {
    let nbrePersonne = document.getElementById('nbrePersonne');
    nbrePersonne.textContent = parseFloat(nbrePersonne.textContent) + 1;
    let quantity = document.getElementsByClassName("quantiy");
    for (i = 0; i < quantity.length; i++) {
        quantity[i].textContent = ( parseFloat(quantity[i].textContent) * parseFloat(nbrePersonne.textContent) ) / ( parseFloat(nbrePersonne.textContent) -1);
    }
});