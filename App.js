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

// faire le story details
// prendre exemple sur component jsx (pas vraiment mais tqt)
// sur project router, au niveau de la route du details story, renvoyer des trucs

