import React from "react";

function VideoBanner() {
  return (
    <>
      <video
        className="w-[800px] max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
        controls
      >
        <source src="https://youtu.be/cuHDQhDhvPE" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default VideoBanner;
