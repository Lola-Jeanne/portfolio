import './skills.styles.css';
import React, { useState } from 'react';

const skillsData = [
  { id: 1, name: 'React', details: 'Framework JavaScript utilisé pour construire des interfaces utilisateur dynamiques et interactives, basé sur des composants réutilisables pour une gestion efficace des états.' },
  { id: 2, name: 'Node.js', details: "Environnement d'exécution JavaScript côté serveur, rapide et léger, conçu pour créer des applications scalables, en temps réel et performantes grâce à son modèle événementiel non bloquant."},
  { id: 3, name: 'MongoDB', details: 'Base de données NoSQL orientée documents, idéale pour stocker des données flexibles et non structurées, avec des performances élevées et une facilité d’intégration dans les applications modernes.'},
  { id: 4, name: 'JavaScript', details: 'Langage de programmation polyvalent permettant d’ajouter des fonctionnalités dynamiques et interactives aux sites web, aussi bien côté client que serveur.' },
  { id: 5, name: 'CSS', details: "Langage de style utilisé pour définir l'apparence des éléments HTML, permettant de concevoir des interfaces esthétiques et cohérentes." },
  { id: 6, name: 'BI', details: "(Business Intelligence) Discipline qui regroupe les outils, méthodes et technologies pour transformer les données brutes en informations exploitables, permettant une meilleure prise de décision stratégique et opérationnelle."},
  { id: 7, name: 'HTML', details: "Langage de balisage structurant le contenu d'une page web, en définissant les titres, paragraphes, images et autres éléments." },
  { id: 8, name: 'Responsive', details: 'Approche de conception visant à créer des interfaces adaptables et optimisées pour tous les types d’appareils, des smartphones aux ordinateurs.'},
  { id: 9, name: 'SASS', details: 'Préprocesseur CSS qui enrichit les styles avec des fonctionnalités avancées comme les variables, les boucles et les mixins, facilitant la maintenance et la modularité.' },
  { id: 10, name: 'Qlik Sense', details: "Outil de visualisation et d'analyse de données puissant, permettant de créer des tableaux de bord interactifs et dynamiques grâce à son moteur associatif et ses capacités avancées d'analyse en temps réel."},
  { id: 11, name: 'SEO', details: "(Search Engine Optimization) Techniques d'optimisation des sites web pour améliorer leur visibilité et leur classement sur les moteurs de recherche." },
  { id: 12, name: 'Swagger', details: "Outil open-source utilisé pour concevoir, documenter et tester des APIs REST, facilitant la collaboration entre les développeurs grâce à des spécifications claires et interactives."},
  { id: 13, name: 'GitHub', details: "Plateforme de gestion de code source basée sur Git, offrant des fonctionnalités de collaboration, de suivi de projets et d'intégration continue pour les équipes de développement."},
  { id: 14, name: 'API', details: "Interfaces permettant la communication entre différentes applications, facilitant l'échange de données et l'intégration de services tiers." },
  { id: 15, name: 'Figma', details: "Outil de conception graphique et prototypage, facilitant la collaboration avec les designers et l'intégration de maquettes"},
  { id: 16, name: 'Agile', details: 'Méthodologie de gestion de projet favorisant la collaboration, l’adaptabilité et les livraisons incrémentales pour répondre rapidement aux changements.' },
  { id: 17, name: 'Redux', details: "Bibliothèque JavaScript utilisée avec React pour la gestion prévisible de l'état global des applications complexes." },
  { id: 18, name: 'Pages', details: "(GitHub Pages) Service d'hébergement statique offert par GitHub, permettant de publier facilement des sites web directement depuis un dépôt Git. Il est idéal pour héberger des portfolios, des projets personnels ou des documentation, sans serveur supplémentaire."},
  { id: 19, name: 'Git', details: 'Système de contrôle de version permettant de suivre les modifications du code, de collaborer efficacement et de gérer les versions de projets.' },
  { id: 20, name: 'VS Code', details: "Éditeur de code léger et extensible, équipé d'outils puissants comme l'autocomplétion, le débogage et la gestion de plugins."}


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