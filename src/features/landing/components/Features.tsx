import featureImage from "@/assets/images/feature.png";
import featureCurlyImage from "@/assets/images/feature-curly-line.png";

import { Button } from "../../../components/ui/button";
import microsoftSupport from "@/assets/images/microsoft-support.png";
import googleSupport from "@/assets/images/google-support.png";
import nikeSupport from "@/assets/images/nike-support.png";
import barclaysSupport from "@/assets/images/barclays-support.png";

const Features = () => {
  return (
    <section id="features" className=" w-full bg-white mt-24 z-[1]">
      <div className="w-5/6 mx-auto py-20">
        <div className="md:flex md:flex-row items-center gap-4 md:justify-between">
          {/* LEFT OR TOP HEADERS */}
          <div className="md:w-3/6 mb-12 md:mb-0">
            <h1 className="font-spacegrotesk text-4xl text-gray1 font-bold md:w-3/5">
              Stand out with a professionally designed resume
            </h1>
            <p className="text-gray2 text-sm font-inter font-normal my-6">
              By employing the best practices and innovative tech, Resume
              Builder boosts your chances of landing a better job – completely
              for free.
            </p>
            <div className="flex flex-row items-center gap-8">
              <Button className="rounded-none">Build Resume</Button>
              <p className="text-gray4 font-inter font-normal text-sm">
                No payment required
              </p>
            </div>
          </div>

          {/* RIGHT OR BOTTOM IMAGE */}
          <div className="relative md:w-3/6">
            <img src={featureImage} alt="features image" />
            <img
              className="absolute -bottom-20 right-10 z-[30]"
              src={featureCurlyImage}
              alt="features image"
              height={126}
              width={120}
            />
          </div>
        </div>
      </div>
      <div className="w-screen bg-gray-200">
        <div className="w-5/6 mx-auto py-12">
          <h1 className="text-center md:px-14 px-6 text-2xl font-spacegrotesk text-gray1">
            Resume Builder users get hired by the top companies worldwide
          </h1>
          <div className="flex max-md:hidden gap-2 mt-8 justify-evenly items-center">
            <img
              src={microsoftSupport}
              alt="microsoft support image"
              // height={64}
              width={150}
            />
            <img
              src={googleSupport}
              alt="microsoft support image"
              // height={64}
              width={150}
            />
            <img
              src={nikeSupport}
              alt="microsoft support image"
              // height={64}
              width={150}
            />
            <img
              src={barclaysSupport}
              alt="microsoft support image"
              // height={64}
              width={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
