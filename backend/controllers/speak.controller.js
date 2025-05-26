import { generateTextStream, pipeToMic } from "../utils/speak.utils.js";

export const onSpeakEvent = async (socket, data) => {
  if (!data || !data.type || !data.text || !data.voice_id) {
    socket.emit("error", { message: "Please provide all required fields" });
    return;
  }

  const { type, text, voice_id } = data;

  if (type === "stream") {
    const stream = await generateTextStream(text, voice_id);

    socket.emit("onspeak", {
      data: { type, stream },
      message: "Text stream generated successfully",
    });
  } else if (type === "pipeToMic") {
    const stream = await generateTextStream(text, voice_id);
    await pipeToMic(stream);

    socket.emit("onspeak", {
      data: { type },
      message: "Text stream piped to mic successfully",
    });
  } else if (type === "both") {
    const stream = await generateTextStream(text, voice_id);
    await pipeToMic(stream);

    socket.emit("onspeak", {
      data: { type, stream },
      message: "Text stream generated and piped to mic successfully",
    });
  } else {
    socket.emit("error", { message: "Invalid type provided." });
  }
};
