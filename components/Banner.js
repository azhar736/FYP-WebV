import Image from "next/image";
import picture from "../public/assets/android.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
function Banner() {
  const slides = [
    {
      url: "https://github.com/azhar736/FYP-Images/blob/2416b678f604ce8fa5459d8704452d6913a578f4/1.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/2.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/3.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/4.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/5.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/5.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/6.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/8.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/9.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/10.jpeg?raw=true",
    },
    {
      url: "https://github.com/azhar736/FYP-Images/blob/main/11.jpeg?raw=true",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="h-[780px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-fll h-full bg-center bg-cover duration-500"
        ></div>
        {/*Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] tanslate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ml-5">
          <GrPrevious size={30} onClick={prevSlide} />
        </div>
        {/*RightArrow */}
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer mr-5">
          <GrNext size={30} onClick={nextSlide} />
        </div>
      </div>
    </>
  );
}

export default Banner;
