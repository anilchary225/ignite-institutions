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

const uploadedCollection = (folder, filenames, prefix, label) => filenames.map((filename, index) => {
  const number = String(index + 1).padStart(2, "0");
  const src = `/assets/videos/${folder}/${filename}.webm`;
  return {
    id: `recent-${prefix}-${number}`,
    title: `${label} ${number}`,
    category: label,
    src,
    thumb: src,
    width: 1920,
    height: 1080,
    poster: `/assets/videos/recent-posters/${prefix}_${number}.webp`,
  };
});

export const recentVideoGroups = {
  Classrooms: uploadedCollection("classrooms", ["clasroom-1", "clasroom-2", "clasroom-3", "clasroom-4", "clasroom-5"], "classrooms", "Classroom Learning"),
  Yoga: uploadedCollection("yoga_drone_videos", ["DJI_0057", "DJI_0066"], "yoga_drone", "Yoga Event — Drone View"),
  Cricket: collection("cricket videos_compressed", "cricket", "Cricket", 7),
  "Drone Shots": collection("drone_shots_compressed", "drone_shots", "Drone Shots", 4),
};

export const recentVideos = Object.values(recentVideoGroups).flat();

export const founderVideo = collection("ramesh_sir_compressed", "ramesh_sir", "Ramesh Sir", 1)[0];
export const messVideo = collection("mess_compressed", "mess", "Mess", 1)[0];
