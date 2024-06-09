import "./avis.css"
import React, { useState } from 'react';




function App() {
  const [pseudo, setPseudo] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [message, setMessage] = useState('');

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleCommentaireChange = (event) => {
    setCommentaire(event.target.value);
  };

  const handleAccept = () => {
    setMessage(`Commentaire accepté : "${commentaire}" par ${pseudo}.`);
  };

  const handleReject = () => {
    setMessage(`Commentaire refusé : "${commentaire}" par ${pseudo}.`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Formulaire d'avis</h1>
      <div>
        <label>
          Pseudo:
          <input
            type="text"
            value={pseudo}
            onChange={handlePseudoChange}
            placeholder="Entrez votre pseudo"
            style={{ padding: '10px', margin: '10px 0', fontSize: '16px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Commentaire:
          <textarea
            value={commentaire}
            onChange={handleCommentaireChange}
            placeholder="Entrez votre commentaire"
            style={{ padding: '10px', margin: '10px 0', fontSize: '16px', width: '100%', height: '100px' }}
          />
        </label>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAccept} style={{ marginRight: '10px', padding: '10px', fontSize: '16px' }}>
          Accepter
        </button>
        <button onClick={handleReject} style={{ padding: '10px', fontSize: '16px' }}>
          Refuser
        </button>
      </div>
      {message && (
        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default App;

















    
  
              
  


