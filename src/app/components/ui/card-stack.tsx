"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "../../../../public/fresh-park-nature-beautiful-backgrounds.jpg";

let interval: ReturnType<typeof setInterval>;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!); 
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-full ">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute  bg-white    h-full  rounded-3xl  shadow-xl flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -10,
              scale: 1 - index * SCALE_FACTOR, 
              zIndex: cards.length - index, 
            }}
          >
            <div className="">
              <Image
                className=" xs:h-[80%] 3xl:h-[70%] sm:h-[70%] lg:h-full rounded-3xl"
                alt=""
                src={image}
              />
            </div>
            <div>
              <p className="text-neutral-500  font-medium dark:text-white">
                {card.name}
                sdf
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {/* {card.designation} */}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
