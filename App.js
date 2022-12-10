import React, { useState } from 'react';
import { ProjectContext } from './context';
import { ConnectRouter } from './router/connectRouter';
import { ProjectRouter } from './router/projectRouter';



export default function App() {
  const [user, setUser] = useState({});
  const [currentProject, setCurrentProject] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentStory, setCurrentStory] = useState("");
  return (
    <ProjectContext.Provider value={{ 
      user, setUser, 
      currentProject, setCurrentProject, 
      currentStatus, setCurrentStatus, 
      currentStory, setCurrentStory
    }}>
      {(user.email) ? <ProjectRouter /> : <ConnectRouter />}
    </ProjectContext.Provider>

  )
}

/* TODO
Fonctionnaliés:
  - Prendre en compte l'image lors de la création de story
  - Authentification Google

Design:
  - Aligner le texte dans le bouton d'action de création

*/

