import "./services.css"


import React from 'react';

function Service({ title, description, onLearnMore }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onLearnMore} style={{ padding: '10px 20px', fontSize: '16px' }}>
        En savoir plus
      </button>
    </div>
  );
}

function App() {
  const services = [
    {
      title: 'Restauration',
       
      description:'Le restaurant du zoo',
      learnMore: () => alert('Bienvenue au Restaurant du ZoVenez vivre un moment inoubliable au Restaurant du Zoo  où la gastronomie et la nature se rencontrent pour votre plus grand plaisir Bon appétit et bonne visite découvrez une expérience culinaire unique au cœur de notre magnifique parc zoologique Notre restaurant vous offre une pause gourmande dans un cadre naturel et enchanteur entouré par la beauté et la diversité de la faune nos spécialités sont  plats Savoureux  profitez de nos plats préparés avec des ingrédients frais et locaux, adaptés à tous les goûts et tous les âges menus enfants  des options délicieuses et équilibrées pour les plus jeunes  pour qu ils puissent également savourer leur visite snacks et boissons  une variété de snacks et de boissons pour une pause rapide entre deux découvertes animalières Cadre et Ambiance Vue Panoramique  Détendez-vous avec une vue imprenable sur les habitats des animaux tout en dégustant votre repas Terrasse en Plein Air  Profitez de notre terrasse en plein air pour une expérience encore plus immersive et agréable horaires d ouverture Ouvert tous les jours de 10h à 18h service continu pour s adapter à votre rythme de visite.')
     
    
    },
    {
      title: 'Visites Guidées des habitats',
      description: 'Visite Guidée du Zoo',
      learnMore: () => alert('Visite Guidée du Zoo bienvenue au Zoo points Forts de la Visite entrée Principale accueil chaleureux et point d information pour toutes vos questions savane Africaine découvrez les majestueux lions les élégantes girafes et les rapides guépards dans un habitat qui recrée la savane africaine Forêt Tropicale plongez dans la biodiversité de la jungle avec nos singes espiègles les oiseaux exotiques et les reptiles fascinants rivière des Ours Polaires admirez les ours polaires nageant dans leur bassin transparent et observez leur comportement naturel secteur Asiatique rencontrez les tigres de Sibérie, les pandas roux et les éléphants d’Asie dans des environnements qui rappellent leurs habitats d origine profitez de votre visite et découvrez la magie du monde animal au Zoo .')
    
    },

    {
      title: 'Le petit train du Zoo',
      description: 'Visite du zoo en petit train',
      learnMore: () => alert('Pour planifier votre visite au zoo et profiter du petit train, voici les horaires typiques et quelques conseils utiles Horaires du Zoo Lundi - Vendredi : 9h00 - 18h00 Samedi - Dimanche : 10h00 - 19h00 Jours fériés : 10h00 - 19h00 Horaires du Petit Train Lundi - Vendredi : Matin : 10h00, 11h00 Après-midi : 14h00, 15h00, 16h00, 17h00 Samedi - Dimanche : Matin : 10h30, 11h30 Après-midi : 13h30, 14h30, 15h30, 16h30, 17h30 Jours fériés : Matin : 10h30, 11h30 Après-midi : 13h30, 14h30, 15h30, 16h30, 17h30 Conseils pour la Visite Arrivez tôt Les premiers tours du petit train sont généralement moins fréquentés Réservez à l avance Certains zoos offrent la possibilité de réserver des billets en ligne, y compris pour le petit train Vérifiez les horaires spécifiques Les horaires peuvent varier selon les saisons ou les événements spéciaux. Consultez le site web du zoo ou appelez à l avance Prévoyez du temps pour les animaux Après ou avant le tour en petit train, prenez le temps de visiter les enclos à pied pour une expérience complète Ces horaires sont des exemples typiques et peuvent varier en fonction du zoo spécifique que vous souhaitez visiter. Assurez-vous de vérifier les informations précises directement auprès du zoo concerné pour éviter toute déception.')

    },
      
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Nos Services</h1>
      {services.map((service, index) => (
        <Service
          key={index}
          title={service.title}
          description={service.description}
          onLearnMore={service.learnMore}
        />
      ))}
    </div>
  );
}

export default App;



