import HeadingTitle from "@/components/common/headingTitle";
import ArrowIconRight from "@/components/common/right-arrow-icon/ArrowIconRight";
import ScrollAnimationBox from "@/components/common/scroll-animation-box";
import AnnouncementBar from "@/components/features/announcement-bar";
import { useTranslation } from "react-i18next";
import Healthy from "@/assets/images/meals/Healthy.svg";
import Dumble from "@/assets/images/meals/Dumble.svg";
export default function MealsSection() {
  // Initialize translation function
  const { t } = useTranslation();

  return (
    <>
      <div className=" relative   bg-meal-bg-img bg-cover bg-center flex flex-col items-center ">
        <div className=" before:content-[''] before:absolute before:w-full before:h-[414px] before:backdrop-blur-[86px] before:bg-[#FFFFFF99]  before:top-10 before:left-0"></div>
        <ScrollAnimationBox>
          <img src={Healthy} className="mt-3" alt="Healthy" />
          <span className="flex relative items-center z-40  justify-center gap-2">
            <img src={Dumble} alt="Dumble" />
            <p className="text-flame text-md font-baloo">{t("healthy-nutritions")}</p>
          </span>
        </ScrollAnimationBox>
        {/* Heading */}
        <HeadingTitle className=" w-1/2 text-foreground text-black text-4xl uppercase my-4 font-bold relative z-10 text-center ">
          {t("Fuel-your-fitness-journey-with-customized")}

          <span className="text-flame ms-1">{t("meal-plans")}</span>

          {t("for-you")}
        </HeadingTitle>

        <div className=" flex flex-wrap justify-center relative w-full gap-5 z-10 container mb-10">
          <div className=" bg-breakfast-bg hover:scale-105 duration-150 relative bg-cover bg-center h-[399px] rounded-xl w-[404px]">
            <div className="absolute bottom-0 rounded-b-xl  w-full h-[100px] bg-[#FFFFFF80] backdrop-blur-[58.2px]">
              <h3 className="text-2xl font-bold uppercase text-black m-2 font-baloo">Breakfast</h3>
              <span className="flex relative items-center w-28">
                <p className="text-flame text-lg m-2 font-baloo">Read More</p>
                <ArrowIconRight />
              </span>
            </div>
          </div>
          <div className="bg-lunch-bg bg-cover hover:scale-105 duration-150  relative bg-center h-[399px] rounded-xl w-[404px]">
            <div className="absolute bottom-0 rounded-b-xl  w-full h-[100px] bg-[#FFFFFF80] backdrop-blur-[58.2px]">
              <h3 className="text-2xl font-bold uppercase text-black m-2 font-baloo">lunch</h3>
              <span className="flex relative items-center w-28">
                <p className="text-flame text-lg m-2 font-baloo">Read More</p>
                <ArrowIconRight />
              </span>
            </div>
          </div>
          <div className="bg-dinner-bg bg-cover hover:scale-105 duration-150  relative bg-center h-[399px] rounded-xl w-[404px]">
            <div className="absolute bottom-0 rounded-b-xl  w-full h-[100px] bg-[#FFFFFF80] backdrop-blur-[58.2px]">
              <h3 className="text-2xl font-bold uppercase text-black m-2 font-baloo">Dinner</h3>
              <span className="flex relative items-center w-28">
                <p className="text-flame text-lg m-2 font-baloo">Read More</p>
                <ArrowIconRight />
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <AnnouncementBar />
        </div>
      </div>
    </>
  );
}
