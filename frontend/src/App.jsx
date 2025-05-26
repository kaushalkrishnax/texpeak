import React, { useState } from 'react';
import Sidebar from "./layout/Sidebar"
import Home from './components/Home';
import VoiceSettings from './components/VoiceSettings';
import Usage from './components/Usage';
import History from './components/History';

function App() {
  const [activeView, setActiveView] = useState('home');
  

  const renderContent = () => {
    switch(activeView) {
      case 'home':
        return <Home />;
      case 'voiceSettings':
        return <VoiceSettings />;
      case 'usage':
        return <Usage />;
      case 'history':
        return <History />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 overflow-auto">
        <div className="p-8 max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;