import React from "react";
import { CardStackDemo } from "../cardStack/CardStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Testimonial() {
  return (
    <div
      className="3xl:px-28 2xl:px-20 xl:px-16 lg:px-10 lg:block 
        md:px-12 
        sm:px-8 
        xs:px-4  w-full"
    >
      <div className="border mt-4 mb-2 border-black  border-[1px] opacity-50      "></div>
      <div className="w-full tracking-wide text-center 3xl:text-2xl font-semibold">
        OUR EXPERTISE IN ACTION
      </div>
      <div className="text-center 3xl:text-base font-serif">
        {`"We are the best"`}
      </div>
      <div className="w-full lg:flex mt-7 xs:mt-3">
        <div className="3xl:w-[60%] lg:w-[60%] xs:w-full pt-12 3xl:px-20  md:px-12 lg:px-6 3xl:pb-20  lg:pb-20">
          <CardStackDemo />
        </div>

        <div className="3xl:w-[40%] lg:w-[40%]  xs:w-full text-center pt-12 3xl:px-20 pb-20 ">
          <div className="grid sm:gap-y-4 lg:gap-y-1 xl:gap-y-4 xs:gap-y-4 tracking-wide">
            <div>
              <div className="text-4xl font-bold">35+ YEARS</div>
              <div className="font-serif mt-1">{`"EXPERIENCE"`}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1500+</div>
              <div className="font-serif mt-1">{`"COMPLETED PROJECTS"`}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">2000+</div>
              <div className="font-serif mt-1">{`"HAPPY CUSTOMERS"`}</div>
            </div>{" "}
            <div>
              <div className="text-4xl font-bold">GOVT APPROVED</div>
              <div className="font-serif mt-1">{`"TRUSTED PARTNERS"`}</div>
            </div>
          </div>
          <div className="mt-12 w-full md:px-12 lg:px-3 xl:px-12 3xl:px-1">
            <div className="w-60 w-full text-start px-8 py-6  rounded-2xl h-60 bg-footer ">
              <div className="uppercase xs:text-xl sm:text-2xl font-semibold text-secText">
                connect us
              </div>
              <div className="text-white xs:text-xl sm:text-2xl mt-2">
                +91 95674-17334
              </div>
              <div className="text-white xs:text-xl sm:text-2xl">
                +91 99615-89022
              </div>
              <div className="text-white xs:text-xl sm:text-2xl">
                karmaflower6644@gmail.com
              </div>
              <div className="max-w-[300px] mt-5  items-center text-secText text-[26px] flex">
                <FontAwesomeIcon
                  className=" me-3 hover:text-white  transition-all duration-200"
                  icon={faFacebook}
                />{" "}
                <FontAwesomeIcon
                  className=" me-3 hover:text-white transition-all duration-200"
                  icon={faInstagram}
                />{" "}
                <FontAwesomeIcon
                  className=" me-3 hover:text-white transition-all duration-200"
                  icon={faTwitter}
                />{" "}
                <FontAwesomeIcon
                  className=" me-3 hover:text-white transition-all duration-200"
                  icon={faWhatsapp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
