import React, { useState } from 'react';
import { PlayIcon, PauseIcon } from './Icons';

function History() {
  const initialHistory = [
    {
      id: 1,
      text: "This is a sample of what your cloned voice would sound like using our advanced neural text-to-speech system.",
      date: "April 5, 2025",
      engine: "ElevenLabs",
      duration: "12s"
    },
    {
      id: 2,
      text: "Remember to speak clearly when recording your voice samples to achieve the best results in voice cloning.",
      date: "April 3, 2025",
      engine: "ElevenLabs",
      duration: "10s"
    },
    {
      id: 3,
      text: "With Speechify, you can easily convert text into clear, natural-sounding speech for productivity and learning.",
      date: "April 2, 2025",
      engine: "Speechify",
      duration: "14s"
    }
  ];

  const [history, setHistory] = useState(initialHistory);
  const [playingId, setPlayingId] = useState(null);
  const [filter, setFilter] = useState('all');

  const togglePlayback = (id) => {
    setPlayingId(prev => (prev === id ? null : id));
  };

  const filteredHistory = filter === 'all'
    ? history
    : history.filter(item => item.engine.toLowerCase() === filter);

  const deleteHistoryItem = (id) => {
    setHistory(history.filter(item => item.id !== id));
  };

  const getEngineColor = (engine) => {
    switch (engine) {
      case 'ElevenLabs':
        return 'bg-blue-500';
      case 'Speechify':
        return 'bg-purple-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">History</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          View and replay your previously generated text-to-speech audio.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('elevenlabs')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'elevenlabs'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          ElevenLabs
        </button>
        <button
          onClick={() => setFilter('speechify')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'speechify'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Speechify
        </button>
      </div>

      {/* History list */}
      <div className="space-y-4">
        {filteredHistory.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No history items found</p>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getEngineColor(item.engine)}`}></span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.engine}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
              </div>

              <p className="mt-2 text-gray-700 dark:text-gray-200 line-clamp-2">{item.text}</p>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => togglePlayback(item.id)}
                    className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
                  >
                    {playingId === item.id ? (
                      <PauseIcon className="w-4 h-4" />
                    ) : (
                      <PlayIcon className="w-4 h-4" />
                    )}
                  </button>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{item.duration}</span>
                </div>

                <button
                  onClick={() => deleteHistoryItem(item.id)}
                  className="text-sm text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;
