import React from "react";
import {
  HomeIcon,
  MicrophoneIcon,
  ChartBarIcon,
  ClockIcon,
} from "../components/Icons";
import textpeakLogo from "../assets/texpeak.png";

const Sidebar = ({ activeView, setActiveView }) => {
  return (
    <div className="w-64 bg-gray-800 dark:bg-gray-900 text-white p-5 flex flex-col shadow-xl shadow-gray-700 h-screen bg-body-bg dark:bg-body-bg-dark overflow-y-auto no-scrollbar">
      <div className="mb-10 flex items-center justify-start gap-4">
        <img src={textpeakLogo} className="w-12 h-12" alt="Textpeak" />
        <div>
          <h1 className="text-2xl font-bold text-blue-400">Texpeak</h1>
          <p className="text-gray-400 text-sm">Voice Cloning App</p>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveView("home")}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeView === "home"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("voiceSettings")}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeView === "voiceSettings"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <MicrophoneIcon className="w-5 h-5 mr-3" />
              Voice Settings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("usage")}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeView === "usage"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <ChartBarIcon className="w-5 h-5 mr-3" />
              Usage
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("history")}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeView === "history"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <ClockIcon className="w-5 h-5 mr-3" />
              History
            </button>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-5 border-t border-gray-700">
        <div className="text-gray-400 text-sm">
          <p>Texpeak v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
