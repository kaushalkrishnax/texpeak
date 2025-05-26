import {
  addVoice,
  listVoices,
  deleteVoice,
} from "../utils/settings.utils.js";

export const onSettingsEvent = async (socket, data) => {
  if (!data || !type) {
    socket.emit("error", { message: "Please provide all required fields" });
    return;
  }

  const {
    type,
    voice_id,
    voiceStream,
    name = `New Voice ${Date.now()}`,
    description = "",
  } = data;

  if (type === "addVoice") {
    const voice_id = await addVoice(voiceStream, name, description);

    socket.emit("onsettings", {
      data: { type, voice_id },
      message: "Voice added successfully",
    });
  } else if (type === "listVoices") {
    const voices = await listVoices();

    socket.emit("onsettings", {
      data: { type, voices },
      message: "Voices listed successfully",
    });
  } else if (type === "deleteVoice") {
    await deleteVoice(voice_id);

    socket.emit("onsettings", {
      data: { type },
      message: "Voice deleted successfully",
    });
  } else {
    socket.emit("error", { message: "Invalid type provided." });
  }
};
