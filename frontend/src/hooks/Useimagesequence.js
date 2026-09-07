import { useEffect, useRef, useState } from "react";
import {
  generateFramePaths,
  preloadImageSequence,
} from "../utils/imageSequenceLoader";

export function useImageSequence({
  basePath,
  prefix = "frame_",
  count,
  padding = 3,
  extension = "jpg",
  criticalCount = 8,
}) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const imagesRef = useRef([]);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    setProgress(0);
    setIsReady(false);
    setIsComplete(false);

    // Reset image array immediately.
    imagesRef.current = new Array(count).fill(null);

    const paths = generateFramePaths({
      basePath,
      prefix,
      count,
      padding,
      extension,
    });

    let readyFired = false;

    preloadImageSequence(paths, {
      criticalCount,
      concurrency: 6,

      onFrameLoaded: (index, img) => {
        if (!mountedRef.current) return;

        // Make each frame available immediately.
        imagesRef.current[index] = img;
      },

      onProgress: (loaded, total) => {
        if (!mountedRef.current) return;

        setProgress(
          total > 0
            ? loaded / total
            : 0
        );

        if (
          !readyFired &&
          loaded >= Math.min(criticalCount, total)
        ) {
          readyFired = true;
          setIsReady(true);
        }
      },
    }).then((images) => {
      if (!mountedRef.current) return;

      imagesRef.current = images;

      setProgress(1);
      setIsComplete(true);
    });

    return () => {
      mountedRef.current = false;
    };
  }, [
    basePath,
    prefix,
    count,
    padding,
    extension,
    criticalCount,
  ]);

  return {
    images: imagesRef,
    progress,
    isReady,
    isComplete,
  };
}