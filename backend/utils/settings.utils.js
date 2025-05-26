import { ElevenLabsClient } from "elevenlabs";
import { getApiKey } from "../apiKey.js";

const eleven = new ElevenLabsClient({
  apiKey: await getApiKey(),
});

export const addVoice = async (voiceStream, name, description, removeBgNoise) => {
  const { voice_id } = await eleven.voices.add({
    name,
    description,
    remove_background_noise: removeBgNoise,
    files: [voiceStream],
  });

  return voice_id;
};

export const listVoices = async () => {
  const voices = await eleven.voices.getAll();

  return voices;
};

export const deleteVoice = async (voice_id) => {
  const { status } = await eleven.voices.delete(voice_id);

  return status;
};