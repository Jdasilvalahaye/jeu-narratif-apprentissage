// Objet joueur avec les statistiques de base
export const joueur = {
  pv: 100, // Points de vie
  force: 10,
  intelligence: 10,
  inventaire: [], // Liste vite au départ pour les objets
};

export function afficherStats() {
  document.getElementById("pv").textContent = joueur.pv;
  document.getElementById("force").textContent = joueur.force;
  document.getElementById("intelligence").textContent = joueur.intelligence;
  document.getElementById("mana").textContent = joueur.mana;
}

// Fonction pour afficher l'inventaire
export function afficherInventaire() {
  const inventaireElement = document.getElementById("inventaire");
  inventaireElement.innerHTML = ""; // Vider l'inventaire actuel

  joueur.inventaire.forEach((objet) => {
    const item = document.createElement("li");
    item.textContent = objet.nom;

    // Bouton pour utiliser l'objet s'il s'agit d'une potion
    if (objet.type === "potion") {
      const utiliserBtn = document.createElement("button");
      utiliserBtn.textContent = "Utiliser";
      utiliserBtn.onclick = () => utiliserObjet(index);
      item.appendChild(utiliserBtn);
    }

    inventaireElement.appendChild(item);
  });
}
// Fonction pour utiliser un objet dans l'inventaire
export function utiliserObjet(index) {
  const objet = joueur.inventaire[index];

  // Appliquer les effets de l'objet s'il s'agit d'une potion
  if (objet.type === "potion" && objet.restaurationPv) {
    joueur.pv += objet.restaurationPv;
    if (joueur.pv > 100) joueur.pv = 100; // Limite les PV à 100 max
    afficherStats();
  }

  // Retirer l'objet après utilisation
  joueur.inventaire.splice(index, 1);
  afficherInventaire();
}
