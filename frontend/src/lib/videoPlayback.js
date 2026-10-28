// Listen in capture mode because native media play events do not bubble.
export function enableSingleVideoPlayback(root = document) {
  const onPlay = (event) => {
    const active = event.target;
    if (active?.tagName !== "VIDEO" || !active.controls) return;
    for (const video of root.querySelectorAll("video[controls]")) {
      if (video !== active && !video.paused) video.pause();
    }
  };
  root.addEventListener("play", onPlay, true);
  return () => root.removeEventListener("play", onPlay, true);
}
