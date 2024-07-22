import { SlideType } from "@/shared/types";
import { useState } from "react";
import previousIcon from "@/assets/icons/previous_icon.svg";
import nextIcon from "@/assets/icons/next_icon.svg";

type Props = {
  testimonies: Array<SlideType>;
};
const TestimonyCarousel = ({ testimonies }: Props) => {
  // <div className="h-full w-[20%] rounded-l-3xl bg-gray-100 " />
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    if (currentSlide === 0)
      setCurrentSlide(testimonies.length - 1); //set to the last item
    else setCurrentSlide(currentSlide - 1);
  };
  const nextSlide = () => {
    if (currentSlide === testimonies.length - 1)
      setCurrentSlide(0); //set to the first item
    else setCurrentSlide(currentSlide + 1);
  };
  return (
    <div className="w-full flex gap-4 h-[280px] mt-10">
      <div
        className="h-full w-[20%] rounded-r-xl bg-gradient-to-r from-slate-50 via-white to-gray-200 content-center justify-center items-center max-md:hidden"
        onClick={previousSlide}
      >
        <div className="flex justify-center">
          <img src={previousIcon} alt="previous icon" height={52} width={52} />
        </div>
      </div>
      <div className="w-[60%] max-md:mx-auto max-md:w-[80%] h-full">
        <div className="overflow-hidden">
          <div
            className="flex transition ease-out duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonies.map((item, index) => {
              return (
                <div
                  key={"testimony" + index}
                  className="h-[280px] min-w-full bg-gray-200 rounded-xl flex-col flex justify-center items-center p-8 text-center"
                >
                  <p className="text-sm mb-8">{item.text}</p>
                  <h1 className="font-inter text-[16px] font-semibold text-gray1 mb-1">
                    {item.authorName}
                  </h1>
                  <p className="font-inter text-[14px] font-normal text-gray2">
                    {item.authorTitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="h-full w-[20%] rounded-l-xl bg-gradient-to-l from-slate-50 via-white to-gray-200 content-center max-md:hidden"
        onClick={nextSlide}
      >
        <div className="flex justify-center items-center">
          <img src={nextIcon} alt="next icon" height={52} width={52} />
        </div>
      </div>
    </div>
  );
};

export default TestimonyCarousel;
