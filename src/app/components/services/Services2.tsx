import Image from "next/image";
import React, { useEffect, useState } from "react";
import securityImage from "../../../../public/security_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "@/app/context/MenuContext";
import { useRouter } from "next/navigation";

export default function Services2() {
  const [index, setIndex] = useState(0);
  const rotatingWords = ["residence", "office", "event", "community"];

  // Update the index for the rotating words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const { setImageUrl } = useMenu();
  const router = useRouter();
  return (
    <div
      className="3xl:px-28 2xl:px-20 xl:px-16 lg:px-10 lg:block 
      md:px-12 
      sm:px-8 
      xs:px-4  w-full"
    >
      <div className="xs:block lg:flex p-4 xs:p-0">
        <div className="  lg:hidden xs:w-full  mb-5 flex justify-center">
          <Image className="max-w-[430px] w-full " src={securityImage} alt="landscaping services and security services in Kerala" />
        </div>
        <div className="  xs:w-full lg:w-[60%] ps-10 xs:ps-0">
          <div className="xl:text-6xl lg:text-5xl xs:text-5xl   uppercase  tracking-wide font-bold ">
            Your security our
            <div>Concern</div>
            <div className="text-secText text-xl mt-3 transition-all duration-300 tracking-wider font-semibold">
              For your{" "}
              <span className="text-black inline-block rotate-word">
                {rotatingWords[index]}
              </span>{" "}
              safety
            </div>
            <div className="xl:text-lg xs:text-lg  lg:text-base font-normal normal-case mt-1">
              At Karma Solutions, we pride ourselves on delivering highly
              trained, professional, and reliable security personnel to
              safeguard your premises and ensure peace of mind. Our security
              staff undergo rigorous screening and specialized training to
              handle various situations with efficiency and confidence. Whether
              {"it's"} for residential complexes, commercial spaces, or events,
              our team is equipped to provide unmatched vigilance, maintaining
              the highest standards of safety and security. With a focus on
              integrity and customer satisfaction, we ensure your safety is in
              trusted hands.
            </div>
            <div className="mt-3 xs:mb-6 lg:mb-0">
              {" "}
              <div
                onClick={() => {
                  router.push("/viewimage");
                  setImageUrl(
                    "https://res.cloudinary.com/dcoy7olo9/image/upload/v1732632412/WhatsApp_Image_2024-11-26_at_20.12.18_b34151eb_aulwpc.jpg"
                  );
                }}
                className="uppercase text-lg  w-fit hover:text-white font-normal cursor-pointer text-black  hover:bg-secText hover:px-5 py-1 rounded-full transition-all duration-300"
              >
                view licensing <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className=" lg:w-[40%]  xs:hidden  xs:mt-7 lg:flex justify-center">
          <Image className="max-w-[500px] w-full " src={securityImage} alt="landscaping services and security services in Kerala" />
        </div>
      </div>
    </div>
  );
}
