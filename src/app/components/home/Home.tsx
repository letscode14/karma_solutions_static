import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import {
  faArrowDown,
  faClipboardCheck,
  faSmile,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const words1 = [
    {
      text: "LANDSCAPING",
      className:
        "3xl:text-8xl 2xl:text-8xl xl:text-7xl lg:text-8xl md:text-7xl",
    },
  ];
  const word2 = [
    {
      text: "& SECURITY ",
      className:
        "3xl:text-8xl 2xl:text-8xl xl:text-7xl lg:text-8xl md:text-7xl",
    },
  ];
  return (
    <div
      className="relative xl:h-screen lg:h-fit md:h-fit bg-cover bg-center"
      style={{ backgroundImage: "url('/wallpaperflare.com_wallpaper.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70 flex items-center "></div>

      <div className="relative  md:h-max lg:h-max xl:h-screen flex flex-col z-10">
        <Header />

        <div
          className=" xl:flex-grow xl:flex xl:items-center justify-between 
        3xl:px-28 2xl:px-20 xl:px-16 lg:px-16 lg:block 
        md:px-12"
        >
          <div className="3xl:w-[50%] 2xl:w-[55%] lg:mt-12 xl:mt-0 md:mt-10 xl:w-[50%]">
            <div
              className="text-white 3xl:text-8xl font-bold 2xl:text-8xl 
            xl:text-7xl lg:text-8xl 
            md:text-7xl"
            >
              EXPERT
            </div>
            <TypewriterEffectSmooth
              words={words1}
              className=""
              cursorClassName=""
            />
            <TypewriterEffectSmooth
              words={word2}
              className=""
              cursorClassName=""
            />
            <div className="text-secText md:text-7xl 3xl:text-8xl font-bold 2xl:text-8xl xl:text-7xl lg:text-8xl">
              SOLUTIONS
            </div>
            <div
              className="text-white font-serif font-thin text-xl mt-2 mb-3 font-semibold 
            xl:text-base 2xl:text-xl md:text-lg lg:text-lg"
            >
              “From Gardens to Guarding – We’ve Got You Covered.”
            </div>
            <div className="text-secText text-3xl my-3 font-bold">
              CALL US :{" "}
              <span className="text-4xl text-white">+91 95674-17334</span>
            </div>
            <div className="flex mt-4 flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <button className="w-40 font-semibold duration-300 hover:bg-secText hover:border-0 h-12 rounded-full text-white text-black transition-all border border-white border-2  text-base">
                OUR WORKS
              </button>
            </div>
          </div>
          <div
            className="text-3xl text-white font-bold flex items-center  pb-28 justify-center 
          3xl:w-[50%] h-full 2xl:w-[60%] 
          xl:w-[50%] xl:mt-0  xl:mb-0
          lg:w-full lg:mt-16 lg:mb-24 
          md:mt-16 md:w-full md:mb-20"
          >
            <div className="w-0.5 xl:h-[50%] lg:h-[350px] md:h-[300px] bg-white mx-4 relative flex flex-col justify-between items-center">
              <div
                className="flex top-[-13px] absolute 
              2xl:left-[-24px] xl:left-[-20px]  
              2xl:w-[360px] xl:w-[320px] 
              lg:w-[360px] lg:left-[-24px]
              md:w-[360px] md:left-[-24px] md:left-[-20px]"
              >
                <div
                  className=" bg-secText 
                2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 
                lg:h-12 lg:w-12
                md:h-10 md:w-10
                flex items-center justify-center rounded-full "
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[22px] 
                    md:text-[20px]"
                  />
                </div>
                <div className=" ms-4 ">
                  <div className="2xl:text-xl xl:text-lg uppercase lg:text-xl md:text-lg">
                    35 years of Experience
                  </div>
                  <div className="opacity-90 mt-1 font-serif max-w-60 2xl:text-base xl:text-base  font-thin lg:text-base md:text-base">
                    With 35 years of expertise, we have consistently delivered
                    exceptional service
                  </div>
                </div>
              </div>
              <div
                className="xl:w-[320px] 2xl:w-[360px] flex justify-end absolute 
              2xl:right-[-24px] top-[50%] w-40 xl:right-[-20px] 
              lg:right-[-24px]  lg:w-[400px] 
              md:w-[360px] md:right-[-20px]"
              >
                <div className=" me-4">
                  <div className="2xl:text-xl xl:text-lg uppercase lg:text-xl md:text-lg">
                    govt appproved
                  </div>
                  <div className="opacity-90 mt-1 font-serif max-w-60 text-base   font-thin">
                    Ensuring our solutions meet the highest regulatory standards
                    and quality assurance for all projects.
                  </div>
                </div>

                <div
                  className="  bg-secText 2xl:w-12 2xl:h-12 xl:h-10 
                xl:w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full  
                md:w-10 md:h-10"
                >
                  <FontAwesomeIcon
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[22px] md:text-[20px] "
                    icon={faClipboardCheck}
                  />
                </div>
              </div>
              <div
                className="top-[100%] absolute 2xl:left-[-24px]
               xl:left-[-20px]  xl:w-[320px] 2xl:w-[360px] flex 
              lg:w-[360px]  lg:left-[-24px] 
              md:left-[-20px] 
              md:w-[320px]"
              >
                <div
                  className="bg-secText 2xl:w-12 2xl:h-12 flex items-center justify-center 
                rounded-full xl:w-10 xl:h-10 
                lg:h-12 lg:w-12
                md:h-10 md:w-10
                "
                >
                  <FontAwesomeIcon
                    icon={faSmile}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[22px] md:text-[20px]"
                  />
                </div>
                <div className="ms-4">
                  <div className="2xl:text-xl xl:text-lg uppercase lg:text-xl md:text-lg">
                    2000+ happy customers
                  </div>
                  <div className="opacity-90 mt-1 font-serif max-w-60 text-base  font-thin">
                    Every project is completed to the highest standard,
                    guaranteeing customer satisfaction every time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-75 h-12 flex justify-center">
          <div className="w-[1px] h-full bg-white mx-4 relative flex flex-col justify-between items-center">
            <a
              className="flex cursor-pointer top-[-47px] items-center justify-center absolute border rounded-full h-12 w-12 animate-bounce-slow "
              href="#about"
            >
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-2xl text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
