import { ElevenLabsClient } from "elevenlabs";
import { Readable } from "stream";
import { getApiKey } from "../utils/apiKey.js";

const eleven = new ElevenLabsClient({
  apiKey: await getApiKey(),
});

export const generateTextStream = async (text, voice_id) => {
  const stream = await eleven.textToSpeech.convertAsStream(
    voice_id,
    {
      text,
      model_id: "eleven_monolingual_v1",
      optimize_streaming_latency: 3,
      output_format: "mp3_44100_128",
      voice_settings: {
        use_speaker_boost: true,
      },
    }
  );

  return Readable.from(stream);
};

export const pipeToMic = async (stream) => {
  // TODO: Pipe the stream to the mic
};-