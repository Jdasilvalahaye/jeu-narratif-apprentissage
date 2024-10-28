// `moteurJeu.js`
import { histoire } from "./histoire.js";
import { joueur, afficherStats, afficherInventaire } from "./joueur.js";

let sceneActuelle = "debut";
let ennemiActuel = null; // Variable pour stocker l'ennemi en cours de combat

export function afficherScene() {
  const texteElement = document.getElementById("texte");
  const choixContainer = document.getElementById("choix");

  texteElement.textContent = histoire[sceneActuelle].texte;
  choixContainer.innerHTML = "";

  histoire[sceneActuelle].choix.forEach((choix, index) => {
    const bouton = document.createElement("button");
    bouton.textContent = choix.texte;
    bouton.classList.add("choix-btn");
    bouton.onclick = () => faireUnChoix(index);
    choixContainer.appendChild(bouton);
  });
}

export function faireUnChoix(index) {
  const choix = histoire[sceneActuelle].choix[index];

  // Appliquer l'effet si défini
  if (choix.effet === "pertePv") {
    joueur.pv -= 20;
    afficherStats();
  } else if (choix.effet === "ajouterEpee" && choix.objet) {
    joueur.inventaire.push(choix.objet);
    afficherInventaire();
    joueur.force += 5;
    afficherStats();
  } else if (choix.effet === "ajouterPotion" && choix.objet) {
    joueur.inventaire.push(choix.objet);
    afficherInventaire();
  } else if (choix.effet === "combat" && choix.ennemi) {
    ennemiActuel = choix.ennemi;
    commencerCombat();
    return; // Sortie de la fonction pour le pas changer de scène
  }

  sceneActuelle = choix.prochaineScene;
  afficherScene();
}

// Fonction de combat
function commencerCombat() {
  const texteElement = document.getElementById("texte");
  texteElement.textContent = `Vous affrontez ${ennemiActuel.nom}`;

  let combatEnCours = true;

  while (combatEnCours) {
    // Tour du joueur
    ennemiActuel.pv -= joueur.force;
    if (ennemiActuel.pv <= 0) {
      texteElement.textContent += `\nVous avez vaincu ${ennemiActuel.nom} !`;
      combatEnCours = false;
      break;
    }
    //Tour de l'ennemi
    joueur.pv -= ennemiActuel.force;
    if (joueur.pv <= 0) {
      texteElement.textContent += `\nVous avez été vaincu par ${ennemiActuel.nom}...`;
      combatEnCours = false;
      break;
    }
    afficherStats(); // Mise à jour des PV à chaque tour
  }
  // Si le joueur gagne, retour à la scène initiale
  if (joueur.pv > 0) {
    sceneActuelle = "debut";
  }
  afficherScene();
}
