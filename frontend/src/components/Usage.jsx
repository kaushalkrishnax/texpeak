import React from 'react';

function Usage() {
  const usageData = {
    elevenlabs: {
      used: 7500,
      total: 10000,
      percentage: 75,
      resetDate: 'May 6, 2025'
    },
    speechify: {
      used: 3200,
      total: 5000,
      percentage: 64,
      resetDate: 'May 6, 2025'
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Usage</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track your voice generation usage for cloud-based engines.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ElevenLabs usage */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">ElevenLabs Usage</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">Characters Used</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {usageData.elevenlabs.used.toLocaleString()} / {usageData.elevenlabs.total.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600"
                  style={{ width: `${usageData.elevenlabs.percentage}%` }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Usage resets on: {usageData.elevenlabs.resetDate}</p>
              <p className="mt-1">
                {usageData.elevenlabs.percentage >= 90 
                  ? "⚠️ You're almost at your limit! Consider upgrading your plan."
                  : usageData.elevenlabs.percentage >= 75
                  ? "You have used most of your monthly quota."
                  : "You have plenty of characters remaining this month."}
              </p>
            </div>
          </div>
        </div>

        {/* Speechify usage */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Speechify Usage</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">Characters Used</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {usageData.speechify.used.toLocaleString()} / {usageData.speechify.total.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600"
                  style={{ width: `${usageData.speechify.percentage}%` }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Usage resets on: {usageData.speechify.resetDate}</p>
              <p className="mt-1">
                {usageData.speechify.percentage >= 90 
                  ? "⚠️ You're almost at your limit! Consider upgrading your plan."
                  : usageData.speechify.percentage >= 75
                  ? "You have used most of your monthly quota."
                  : "You have plenty of characters remaining this month."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade suggestion */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Need More Characters?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Upgrade your ElevenLabs or Speechify subscription to get more characters per month.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View Upgrade Options
        </button>
      </div>
    </div>
  );
}

export default Usage;
