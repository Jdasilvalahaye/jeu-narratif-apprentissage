// `histoire.js`
export const histoire = {
  debut: {
    texte: "Vous vous trouvez dans une forêt sombre. Deux chemins s'offrent à vous.",
    choix: [
      { texte: "Prendre le chemin de gauche", prochaineScene: "gauche" },
      { texte: "Prendre le chemin de droite", prochaineScene: "droite" },
    ],
  },
  gauche: {
    texte: "Le chemin de gauche vous mène à une rivière. Vous pouvez nager ou faire demi-tour.",
    choix: [
      {
        texte: "Nager dans la rivière",
        prochaineScene: "rivière",
        effet: "pertePv",
      },
      { texte: "Faire demi-tour", prochaineScene: "debut" },
    ],
  },
  droite: {
    texte: "Vous découvrez un vieux temple abandonné. Voulez-vous y entrer ou continuer votre chemin ?",
    choix: [
      { texte: "Entrer dans le temple", prochaineScene: "temple" },
      { texte: "Continuer votre chemin", prochaineScene: "loup" },
    ],
  },
  rivière: {
    texte:
      "La traversée vous a blessé. Sur l'autre rive, vous trouvez une petite potion rouge au sol. Voulez-vous la ramasser ?",
    choix: [
      {
        texte: "Ramasser la potion de soin",
        prochaineScene: "debut",
        effet: "ajouterPotion",
        objet: { nom: "Potion de soin", type: "potion", restaurationPv: 20 },
      },
      {
        texte: "Laisser la potion",
        prochaineScene: "debut",
      },
    ],
  },
  temple: {
    texte: "Vous explorez le temple et trouvez une épée. Voulez-vous la prendre ?",
    choix: [
      {
        texte: "Ramasser l'épée",
        prochaineScene: "debut",
        effet: "ajouterEpee",
        objet: { nom: "Épée", bonusForce: 5 }, // Objet à ajouter
      },
      {
        texte: "Ignorer l'épée",
        prochaineScene: "debut",
      },
    ],
  },
  loup: {
    texte: "Vous rencontrez un loup sauvage ! Voulez-vous l'affronter ?",
    choix: [
      {
        texte: "Combattre le loup",
        prochaineScene: "combatLoup",
        effet: "combat",
        ennemi: {
          nom: "Loup Sauvage",
          pv: 30,
          force: 8,
        },
      },
      {
        texte: "Fuir",
        prochaineScene: "debut",
      },
    ],
  },
  combatLoup: {
    texte: "Le combat commence ! Préparez-vous !",
    choix: [],
  },
};
