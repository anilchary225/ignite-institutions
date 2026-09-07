export function generateFramePaths({
  basePath,
  prefix = "frame_",
  count,
  padding = 3,
  extension = "jpg",
}) {
  const paths = [];

  for (let i = 1; i <= count; i++) {
    const index = String(i).padStart(
      padding,
      "0"
    );

    paths.push(
      `${basePath}/${prefix}${index}.${extension}`
    );
  }

  return paths;
}


// ---------------------------------------------------------
// Load one image
// ---------------------------------------------------------

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();

    img.decoding = "async";

    img.onload = () => {
      resolve(img);
    };

    img.onerror = () => {
      console.warn(
        `[imageSequenceLoader] Failed to load frame: ${src}`
      );

      resolve(null);
    };

    img.src = src;
  });
}


// ---------------------------------------------------------
// Preload sequence
// ---------------------------------------------------------

export async function preloadImageSequence(
  paths,
  {
    criticalCount = 8,
    concurrency = 6,
    onProgress,
    onFrameLoaded,
  } = {}
) {
  const total = paths.length;

  const images = new Array(total).fill(null);

  let loadedCount = 0;

  const markLoaded = (index, img) => {
    images[index] = img;

    loadedCount += 1;

    // Make the frame immediately available.
    if (onFrameLoaded) {
      onFrameLoaded(index, img);
    }

    if (onProgress) {
      onProgress(
        loadedCount,
        total
      );
    }
  };


  // -------------------------------------------------------
  // Critical frames
  // -------------------------------------------------------

  const criticalSlice = paths.slice(
    0,
    Math.min(criticalCount, total)
  );

  await Promise.all(
    criticalSlice.map(
      async (src, index) => {
        const img = await loadImage(src);

        markLoaded(
          index,
          img
        );
      }
    )
  );


  // -------------------------------------------------------
  // Remaining frames
  // -------------------------------------------------------

  const rest = paths.slice(
    criticalCount
  );

  let cursor = 0;

  async function worker() {
    while (true) {
      const localIndex = cursor;

      cursor += 1;

      if (localIndex >= rest.length) {
        break;
      }

      const globalIndex =
        criticalCount + localIndex;

      const img = await loadImage(
        rest[localIndex]
      );

      markLoaded(
        globalIndex,
        img
      );
    }
  }


  const workerCount = Math.min(
    concurrency,
    rest.length
  );

  const workers = Array.from(
    { length: workerCount },
    () => worker()
  );

  await Promise.all(workers);

  return images;
}