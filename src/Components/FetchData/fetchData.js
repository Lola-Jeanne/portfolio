import { useState, useEffect } from "react"

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {

      const fetchedProjects = [
        {
          "id": "1",
          "title": "Kasa",
          "pictures": [
            "/assets/Kasa1.png",
            "/assets/Kasa2.png",
            "/assets/Kasa3.png",
            "/assets/Kasa4.png"
          ],
          "description": "Application web de location immobilière avec React. Utilisation de React, React Router, Node.js et SASS pour un rendu dynamiques moderne et réactif",
          "lien": "https://github.com/Lola-Jeanne/Kasa/tree/dev"
        },
        {
          "id": "2",
          "title": "OhMyFood",
          "pictures": [
            "/assets/Ohmyfood1.png",
            "/assets/Ohmyfood2.png",
            "/assets/Ohmyfood3.png",
            "/assets/Ohmyfood4.png"
          ],
          "description": "Site qui répertorie les menus de restaurants gastronomiques avec animations CSS. Intégration faite en mobile-first, et utilisation du pré-processeur CSS: SASS",
          "lien": "https://github.com/Lola-Jeanne/Projet4-Ohmyfood"
        },
        {
          "id": "3",
          "title": "Nina Carducci",
          "pictures": [
            "/assets/NinaCarducci1.png",
            "/assets/NinaCarducci2.png",
            "/assets/NinaCarducci3.png",
            "/assets/NinaCarducci4.png"
          ],
          "description": "Optimisation du référencement d'un site de photographe. Utilisation de Lighthouse et Wave afin d'améliorer les performances et l'accessibilité du site pour un meilleur référencement sur les moteurs de recherche",
          "lien": "https://github.com/Lola-Jeanne/Photographe_NinaCarducci"
        }
      ];
  
      setProjects(fetchedProjects);
    }, []);
  
    return projects;
  };
  
  export default useProjects;