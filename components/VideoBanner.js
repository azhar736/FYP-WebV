import React from "react";

function VideoBanner() {
  return (
    <>
      <video
        class="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
        controls
      >
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default VideoBanner;
