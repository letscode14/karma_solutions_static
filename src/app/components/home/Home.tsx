import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import {
  faClipboardCheck,
  faSmile,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const words1 = [{ text: "LANDSCAPING", className: "text-8xl " }];
  const word2 = [{ text: "& SECURITY ", className: "text-8xl " }];
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/wallpaperflare.com_wallpaper.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70 flex items-center px-28"></div>

      <div className="relative h-screen flex flex-col z-10">
        <Header />

        <div className="hey flex-grow flex items-center justify-between px-28">
          <div className="w-[50%] ">
            <div className="text-white text-8xl font-bold">EXPERT</div>
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
            <div className="text-secText text-8xl font-bold">SOLUTIONS</div>
            <div className="text-white font-serif font-light text-xl mt-2 mb-3 font-semibold">
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
          <div className="text-3xl text-white font-bold flex items-center  pb-28 justify-center w-[50%] h-full">
            <div className="w-0.5 h-[50%] bg-white mx-4 relative flex flex-col justify-between items-center">
              <div className="flex top-[-13px] absolute left-[-24px]  w-[360px]">
                <div className=" bg-secText w-12 h-12 flex items-center justify-center rounded-full ">
                  <FontAwesomeIcon icon={faStar} className="text-[22px]" />
                </div>
                <div className=" ms-4 ">
                  <div className="text-xl uppercase">
                    25 years of Experience
                  </div>
                  <div className="opacity-90 mt-1 font-serif max-w-60 text-base  font-thin">
                    With 25 years of expertise, we have consistently delivered
                    exceptional service
                  </div>
                </div>
              </div>
              <div className="w-[360px] flex justify-end absolute right-[-24px] top-[50%] w-40">
                <div className=" me-4">
                  <div className="text-xl uppercase">govt appproved</div>
                  <div className="opacity-90 mt-1 font-serif max-w-60 text-base  font-thin">
                    Ensuring our solutions meet the highest regulatory standards
                    and quality assurance for all projects.
                  </div>
                </div>
                <div className="  bg-secText w-12 h-12 flex items-center justify-center rounded-full ">
                  <FontAwesomeIcon
                    className="text-[22px]"
                    icon={faClipboardCheck}
                  />
                </div>
              </div>
              <div className="top-[100%] absolute left-[-24px]  w-[360px] flex ">
                <div className="bg-secText w-12 h-12 flex items-center justify-center rounded-full ">
                  <FontAwesomeIcon icon={faSmile} className="text-[22px]" />
                </div>
                <div className="ms-4">
                  <div className="text-xl uppercase">2000+ happy customers</div>
                  <div className="opacity-90 mt-1 font-serif max-w-60 text-base  font-thin">
                    Every project is completed to the highest standard,
                    guaranteeing customer satisfaction every time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
