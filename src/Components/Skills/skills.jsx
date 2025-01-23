import './skills.styles.css';
import React, { useState } from 'react';

const skillsData = [
  { id: 1, name: 'React', details: 'Framework JavaScript utilisé pour construire des interfaces utilisateur dynamiques et interactives, basé sur des composants réutilisables pour une gestion efficace des états. J’ai eu l’occasion d’utiliser ce framework sur différents projets de développement web dans le cadre de mes études. Notamment pour une plateforme de location immobilière, le site d’une agence d’événementiel et une banque en ligne. ' },
  { id: 2, name: 'JavaScript', details: 'Langage de programmation polyvalent permettant d’ajouter des fonctionnalités dynamiques et interactives aux sites web, aussi bien côté client que serveur. Pour créer des interfaces dynamiques pour des sites portfolio et des sites de e-commerce, avec des carousel d’images et des systèmes de filtres.' },
  { id: 3, name: 'HTML', details: "Langage de balisage structurant le contenu d'une page web, en définissant les titres, paragraphes, images et autres éléments. Création des sites pour une association de skate, une agence de voyage avec des balises sémantiques." },
  { id: 4, name: 'CSS', details: "Langage de style utilisé pour définir l'apparence des éléments HTML, permettant de concevoir des interfaces esthétiques et cohérentes. Conception d’animations fluides pour améliorer l’expérience utilisateur sur un site de restauration." },
  { id: 5, name: 'Responsive', details: 'Approche de conception visant à créer des interfaces adaptables et optimisées pour tous les types d’appareils, des smartphones aux ordinateurs. Adaptation de sites en HTML ou React pour une utilisation optimale sur ordinateurs, tablettes et smartphones.'},
  { id: 6, name: 'SASS', details: 'Préprocesseur CSS qui enrichit les styles avec des fonctionnalités avancées comme les variables, les boucles et les mixins, facilitant la maintenance et la modularité. Utilisation de SASS dans des projets React et HTML, pour faire des animations, pour des styles plus organisés et facilement maintenables.' },
  { id: 7, name: 'Redux', details: "Bibliothèque JavaScript utilisée avec React pour la gestion prévisible de l'état global des applications complexes. Pour gérer l’état global du site d’une banque en ligne, permettant la synchronisation des données entre plusieurs composants en temps réel." },
  { id: 8, name: 'Node.js', details: "Environnement d'exécution JavaScript côté serveur, rapide et léger, conçu pour créer des applications scalables, en temps réel et performantes grâce à son modèle événementiel non bloquant. Lors des différents projets React pour une banque en ligne ou encore une agence de location immobiliaire, Node.Js a été utilisé pour la partie back-end. "},
  { id: 9, name: 'MongoDB', details: 'Base de données NoSQL orientée documents, idéale pour stocker des données flexibles et non structurées, avec des performances élevées et une facilité d’intégration dans les applications modernes. Pour stocker les données des utilisateurs dans un projet de développement  pour une banque en ligne. '},
  { id: 10, name: 'BI', details: "(Business Intelligence) Discipline qui regroupe les outils, méthodes et technologies pour transformer les données brutes en informations exploitables, permettant une meilleure prise de décision stratégique et opérationnelle. Construit des rapports interactifs pour les suivis d’activité d’une entreprise, permettant des décisions basées sur les données."},
  { id: 11, name: 'Qlik Sense', details: "Outil de visualisation et d'analyse de données puissant, permettant de créer des tableaux de bord interactifs et dynamiques grâce à son moteur associatif et ses capacités avancées d'analyse en temps réel. Création de dashboards analytiques pour visualiser les tendances et les performances à l’aide de scripts de transformation de données.Création de data-models pour des applications optimisées et performantes."},
  { id: 12, name: 'SEO', details: "(Search Engine Optimization) Techniques d'optimisation des sites web pour améliorer leur visibilité et leur classement sur les moteurs de recherche. Optimisation des métadonnées et la structure des URLs pour améliorer le classement d’un site portfolio pour une photographe indépendante dans les résultats des moteurs de recherche." },
  { id: 13, name: 'Figma', details: "Outil de conception graphique et prototypage, facilitant la collaboration avec les designers et l'intégration de maquettes. Utilisation de Figma pour une optimisation du découpage et de l’intégration des maquettes, mais aussi création de maquettes pour une application de gestion des comptes utilisateurs."},
  { id: 14, name: 'Agile', details: 'Méthodologie de gestion de projet favorisant la collaboration, l’adaptabilité et les livraisons incrémentales pour répondre rapidement aux changements. Participé à la gestion d’un projet pour un site de création de menu en ligne avec les méthodes agiles. Participation aux sprints et au découpage des dev tasks.' },
  { id: 15, name: 'API', details: "Interfaces permettant la communication entre différentes applications, facilitant l'échange de données et l'intégration de services tiers. Intégration d’API externes et internes dans des projets pour un site de banque en ligne ou encore pour un portfolio d’une architecte d’intérieur." },
  { id: 16, name: 'Swagger', details: "Outil open-source utilisé pour concevoir, documenter et tester des APIs REST, facilitant la collaboration entre les développeurs grâce à des spécifications claires et interactives. Création d’API et de documentation pour une banque en ligne, pour faciliter la collaboration avec les développeurs front-end."},
  { id: 17, name: 'GitHub', details: "Plateforme de gestion de code source basée sur Git, offrant des fonctionnalités de collaboration, de suivi de projets et d'intégration continue pour les équipes de développement. Pour suivre l'évolution des commits sur le dépôt distant avec une interface visuelle, dans tous les projets quelque soit le langage. "},
  { id: 18, name: 'Pages', details: "(GitHub Pages) Service d'hébergement statique offert par GitHub, permettant de publier facilement des sites web directement depuis un dépôt Git. Il est idéal pour héberger des portfolios, des projets personnels ou des documentation, sans serveur supplémentaire.  Utilisé pour déployer des projets en HTML mais aussi en React "},
  { id: 19, name: 'Git', details: 'Système de contrôle de version permettant de suivre les modifications du code, de collaborer efficacement et de gérer les versions de projets. Organisation des branches pour avoir un environnement dédié à chaque phase du projet (dev/test/prod).' },
  { id: 20, name: 'VS Code', details: "Éditeur de code léger et extensible, équipé d'outils puissants comme l'autocomplétion, le débogage et la gestion de plugins. Configuration d’un outil d’IDE, avec des extensions pour rendre le développement plus efficace. "}


  ];

  const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    
    const handleSkillClick = (skill) => {
      setSelectedSkill(skill);
    };
  
    const closeModal = () => {
      setSelectedSkill(null);
    };
    
    return (
      <>
      <h2 id='skillsSection'>Skills Wall</h2>
      <div className="skills-container">
          <div className="skills-grid">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="skill-brick"
                onClick={() => handleSkillClick(skill)}
              >
                {skill.name}
              </div>
            ))}
          </div>
    
          {selectedSkill && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedSkill.name}</h2>
                <p>{selectedSkill.details}</p>
                <button onClick={closeModal}>Fermer</button>
              </div>
            </div>
          )}
        </div>
      </>
      );
    };

export default Skills;