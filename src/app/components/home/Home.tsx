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
        "3xl:text-8xl 2xl:text-8xl xl:text-7xl lg:text-8xl md:text-7xl sm:text-5xl xs:text-4xl",
    },
  ];
  const word2 = [
    {
      text: "& SECURITY ",
      className:
        "3xl:text-8xl 2xl:text-8xl xl:text-7xl lg:text-8xl md:text-7xl sm:text-5xl xs:text-4xl",
    },
  ];
  return (
    <div
      className="relative xl:h-screen lg:h-fit xs:h-fit sm:h-fit md:h-fit bg-cover bg-center"
      style={{ backgroundImage: "url('/wallpaperflare.com_wallpaper.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70 flex items-center "></div>

      <div className="relative xs:h-max sm:h-max  md:h-max lg:h-max xl:h-screen flex flex-col z-10">
        <Header />

        <div
          className=" xl:flex-grow xl:flex xl:items-center justify-between 
        3xl:px-28 2xl:px-20 xl:px-16 lg:px-16 lg:block 
        md:px-12 
        sm:px-8 
        xs:px-4"
        >
          <div
            className="3xl:w-[50%] 2xl:w-[55%]  lg:mt-12 xl:mt-0 
          md:mt-10 sm:mt-5  xs:mt-5
          xl:w-[50%]"
          >
            <div
              className="text-white 3xl:text-8xl font-bold 2xl:text-8xl 
            xl:text-7xl lg:text-8xl 
            md:text-7xl 
            sm:text-5xl 
            xs:text-4xl"
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
            <div
              className="text-secText xs:text-4xl 
            sm:text-5xl md:text-7xl 3xl:text-8xl font-bold 2xl:text-8xl xl:text-7xl lg:text-8xl "
            >
              SOLUTIONS
            </div>
            <div
              className="text-white font-serif font-thin text-xl md:mt-2 md:mb-3 font-semibold 
            xl:text-base 2xl:text-xl md:text-lg lg:text-lg 
            sm:text-base sm:mt-1 sm:mb-1 
            xs:mt-1 xs:mb-1 xs:text-[12px] xs:mt-0 xs:mb-0"
            >
              “From Gardens to Guarding – We’ve Got You Covered.”
            </div>
            <div className="text-secText xs:my-0 xs:text-lg md:text-3xl sm:text-2xl md:my-3 sm:my-2 font-bold">
              CALL US :{" "}
              <span className="md:text-4xl sm:text-3xl xs:text-2xl text-white">
                +91 95674-17334
              </span>
            </div>
            <div className="flex mt-4 flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <button
                className="md:w-40 sm:w-36 xs:w-32 xs:h-9 font-semibold 
              duration-300 hover:bg-secText hover:border-0 md:h-12 sm:h-10 rounded-full 
              text-white text-black transition-all
               border border-white border-2  xs:text-sm sm:text-base"
              >
                OUR WORKS
              </button>
            </div>
          </div>
          <div
            className="text-3xl text-white font-bold flex items-center  pb-28 md:justify-center 
            sm:justify-start
          3xl:w-[50%] h-full 2xl:w-[60%] 
          xl:w-[50%] xl:mt-0  xl:mb-0
          lg:w-full lg:mt-16 lg:mb-24 
          md:mt-16 md:w-full md:mb-20 
          sm:mt-12 sm:mb-20 sm:w-full 
          xs:w-full xs:mb-20 xs:mt-12"
          >
            <div
              className="w-0.5 xl:h-[50%] lg:h-[350px] md:h-[300px] sm:h-[300px] xs:h-[240px]
             bg-white mx-4 relative flex flex-col justify-between items-center"
            >
              <div
                className="flex top-[-13px] absolute 
              2xl:left-[-24px] xl:left-[-20px]  
              2xl:w-[360px] xl:w-[320px] 
              lg:w-[360px] lg:left-[-24px]
              md:w-[360px]  md:left-[-20px]
              sm:w-[400px] sm:left-[-24px] 
              xs:w-[300px] xs:left-[-20px]"
              >
                <div
                  className=" bg-secText 
                2xl:w-12 2xl:h-12 
                xl:w-10 xl:h-10 
                lg:h-12 lg:w-12
                md:h-10 md:w-10
                sm:h-12 sm:w-12
                xs:w-10 xs:h-10
                flex items-center justify-center rounded-full "
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[22px] 
                    md:text-[20px] sm:text-[22px] xs:text-[20px]"
                  />
                </div>
                <div className=" sm:ms-4  xs:ms-2 ">
                  <div className="2xl:text-xl xl:text-lg uppercase lg:text-xl md:text-lg sm:text-xl xs:text-lg">
                    35 years of Experience
                  </div>
                  <div className="opacity-90 xs:text-sm mt-1 font-serif md:max-w-60 xs:max-w-60 sm:max-w-[340px] 2xl:text-base xl:text-base  sm:text-lg  font-thin lg:text-base md:text-base">
                    With 35 years of expertise, we have consistently delivered
                    exceptional service
                  </div>
                </div>
              </div>
              {/*above sm*/}
              <div
                className="xl:w-[320px] 2xl:w-[360px] md:flex justify-end absolute 
              2xl:right-[-24px] top-[50%] w-40 xl:right-[-20px] 
              lg:right-[-24px]  lg:w-[400px] 
              md:w-[360px] md:right-[-20px] sm:hidden
              xs:hidden"
              >
                <div className=" me-4">
                  <div className="2xl:text-xl xl:text-lg uppercase lg:text-xl md:text-lg">
                    govt appproved
                  </div>
                  <div className="opacity-90 mt-1 font-serif md:max-w-60 sm:max-w-[340px] text-base   font-thin">
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
              {/* ************************** */}
              {/*beloe md*/}
              <div
                className=" md:hidden sm:flex top-[50%] absolute 2xl:left-[-24px]
               xl:left-[-20px]  xl:w-[320px] 2xl:w-[360px] 
              lg:w-[360px]  lg:left-[-24px] 
              md:left-[-20px] 
              md:w-[320px]
              sm:left-[-24px] sm:w-[400px] 
              xs:left-[-20px] xs:w-[320px] 
              xs:flex"
              >
                <div
                  className="bg-secText 2xl:w-12 2xl:h-12 flex items-center justify-center 
                rounded-full xl:w-10 xl:h-10 
                lg:h-12 lg:w-12
                md:h-10 md:w-10
                 sm:h-12 sm:w-12
                 xs:w-10 xs:h-10
                "
                >
                  <FontAwesomeIcon
                    icon={faClipboardCheck}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[22px] md:text-[20px] sm:text-[22px] xs:text-[20px]"
                  />
                </div>
                <div className="sm:ms-4 xs:ms-2">
                  <div className="xs:text-lg 2xl:text-xl xl:text-lg uppercase lg:text-xl md:text-lg sm:text-xl">
                    govt appproved
                  </div>
                  <div className="opacity-90 mt-1 xs:text-sm font-serif md:max-w-60 xs:max-w-60 sm:max-w-[340px] text-base  sm:text-lg font-thin">
                    Ensuring our solutions meet the highest regulatory standards
                    and quality assurance for all projects.
                  </div>
                </div>
              </div>
              {/**/}
              <div
                className="top-[100%] absolute 2xl:left-[-24px]
               xl:left-[-20px]  xl:w-[320px] 2xl:w-[360px] flex 
              lg:w-[360px]  lg:left-[-24px] 
              md:left-[-20px] 
              md:w-[320px]
              sm:left-[-24px] sm:w-[400px] 
              xs:left-[-20px] xs:w-[300px]"
              >
                <div
                  className="bg-secText 2xl:w-12 2xl:h-12 flex items-center justify-center 
                rounded-full xl:w-10 xl:h-10 
                lg:h-12 lg:w-12
                md:h-10 md:w-10
                 sm:h-12 sm:w-12
                 xs:w-10 xs:h-10
                "
                >
                  <FontAwesomeIcon
                    icon={faSmile}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[22px] md:text-[20px] sm:text-[22px] xs:text-[20px]"
                  />
                </div>
                <div className="sm:ms-4 xs:ms-2">
                  <div className="2xl:text-xl xl:text-lg uppercase lg:text-xl md:text-lg sm:text-xl xs:text-lg">
                    2000+ happy customers
                  </div>
                  <div className="opacity-90 mt-1 font-serif md:max-w-60 sm:max-w-[340px] xs:max-w-60 text-base xs:text-sm  sm:text-lg font-thin">
                    Every project is completed to the highest standard,
                    guaranteeing customer satisfaction every time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-75 sm:h-12 xs:h-8 flex justify-center">
          <div className="w-[1px] h-full bg-white mx-4 relative flex flex-col justify-between items-center">
            <a
              className="flex cursor-pointer sm:top-[-47px] xs:top-[-40px] items-center justify-center absolute border rounded-full 
              sm:h-12 sm:w-12 xs:h-10 xs:w-10 animate-bounce-slow "
              href="#about"
            >
              <FontAwesomeIcon
                icon={faArrowDown}
                className="sm:text-2xl xs:text-xl text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
