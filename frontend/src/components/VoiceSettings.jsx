import React, { useState } from 'react';
import { UploadIcon, MicrophoneIcon, PlayIcon } from './Icons';

function VoiceSettings() {
  const [isRecording, setIsRecording] = useState(false);
  const [voiceSample, setVoiceSample] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVoiceSample(file);
      setFileName(file.name);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      setVoiceSample({});
      setFileName('voice_recording.wav');
    }
  };

  const handleSaveVoice = () => {
    if (!voiceSample) return;
    console.log('Saving voice sample:', voiceSample);
    alert('Voice sample saved!');
  };

  const handleTestVoice = () => {
    if (!voiceSample) return;
    console.log('Testing voice sample');
    alert('Playing test audio with your voice...');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Voice Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Upload or record a voice sample to clone your voice.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload section */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Upload Voice Sample</h2>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
            <UploadIcon className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500" />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Upload a .wav or .mp3 file (15-30 seconds recommended)
            </p>
            <label className="mt-4 inline-block">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                Select File
              </span>
              <input
                type="file"
                accept=".wav,.mp3"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {fileName && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                Selected: {fileName}
              </p>
            )}
          </div>
        </div>

        {/* Record section */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Record Voice Sample</h2>
          <div className="flex flex-col items-center justify-center p-6">
            <button
              onClick={toggleRecording}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${
                isRecording
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <MicrophoneIcon className="w-10 h-10" />
            </button>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
            </p>
            {isRecording && (
              <div className="mt-2 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 animate-pulse" style={{ width: '75%' }}></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleSaveVoice}
          disabled={!voiceSample}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
        >
          Save Voice
        </button>
        <button
          onClick={handleTestVoice}
          disabled={!voiceSample}
          className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:disabled:bg-gray-800/60 dark:disabled:text-gray-500"
        >
          Test Voice
        </button>
      </div>
    </div>
  );
}

export default VoiceSettings;
