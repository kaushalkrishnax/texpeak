import React, { useState } from 'react';
import { PlayIcon, PauseIcon } from './Icons';

function Home() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('elevenlabs');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [virtualMic, setVirtualMic] = useState(false); // New state

  const handleSpeak = () => {
    if (!text.trim()) return;
    console.log(`Generating speech with ${mode} mode. Virtual Mic: ${virtualMic}`);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Welcome to Texpeak!</h1>
        <p className="text-gray-600 mt-2 dark:text-gray-400">
          Generate speech using ElevenLabs or Speechify voice engines.
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex space-x-2">
        <button
          onClick={() => setMode('elevenlabs')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'elevenlabs'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          ElevenLabs
        </button>
        <button
          onClick={() => setMode('speechify')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'speechify'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          Speechify
        </button>
      </div>

      {/* Virtual mic toggle */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="virtualMic"
          checked={virtualMic}
          onChange={() => setVirtualMic(!virtualMic)}
          className="w-5 h-5"
        />
        <label htmlFor="virtualMic" className="text-gray-800 dark:text-gray-200">
          Output to Virtual Mic
        </label>
      </div>

      {/* Text input */}
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Enter text to convert to speech..."
        ></textarea>
      </div>

      {/* Speak button */}
      <div>
        <button
          onClick={handleSpeak}
          disabled={!text.trim()}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 dark:disabled:bg-blue-800"
        >
          Speak
        </button>
      </div>

      {/* Audio player */}
      {audioUrl && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <button
              onClick={togglePlayback}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
            >
              {isPlaying ? (
                <PauseIcon className="w-5 h-5" />
              ) : (
                <PlayIcon className="w-5 h-5" />
              )}
            </button>
            <div className="ml-4 flex-1">
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600"
                  style={{ width: isPlaying ? '45%' : '0%' }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span>{isPlaying ? '00:32' : '00:00'}</span>
                <span>01:15</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
