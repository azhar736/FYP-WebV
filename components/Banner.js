import Image from "next/image";
import picture from "../public/assets/android.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
function Banner() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2022/07/15/14/14/mount-cook-7323246_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg",
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
        <div className="flex justify-center py-2 absolute bottom-10 left-[700px] ">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="text-8xl cursor-pointer text-black/20"
            >
              <BsDot />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Banner;
