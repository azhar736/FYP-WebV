import Image from "next/image";
import React from "react";

function AboutBanner() {
  return (
    <>
      <Image
        class="max-w-lg h-auto rounded-lg"
        src="https://cdn.pixabay.com/photo/2019/06/24/18/16/sunset-4296611__340.jpg"
        alt="image description"
      />
    </>
  );
}

export default AboutBanner;
