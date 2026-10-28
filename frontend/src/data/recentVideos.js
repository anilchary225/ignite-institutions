const collection = (folder, prefix, label, count) =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const src = `/assets/videos/${folder}/${prefix}_${number}.webm`;
    return {
      id: `recent-${prefix}-${number}`,
      title: count > 1 ? `${label} ${number}` : label,
      category: label,
      src,
      width: prefix === "cricket" ? 1080 : 1920,
      height: prefix === "cricket" ? 1920 : 1080,
      thumb: src,
      poster: `/assets/videos/recent-posters/${prefix}_${number}.webp`,
    };
  });

export const recentVideoGroups = {
  Cricket: collection("cricket videos_compressed", "cricket", "Cricket", 7),
  "Drone Shots": collection("drone_shots_compressed", "drone_shots", "Drone Shots", 4),
};

export const recentVideos = Object.values(recentVideoGroups).flat();

export const founderVideo = collection("ramesh_sir_compressed", "ramesh_sir", "Ramesh Sir", 1)[0];
export const messVideo = collection("mess_compressed", "mess", "Mess", 1)[0];
