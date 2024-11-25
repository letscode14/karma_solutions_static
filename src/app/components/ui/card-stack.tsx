"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DocumentData } from "firebase/firestore";

let interval: ReturnType<typeof setInterval>;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: DocumentData[]; // Cards data from Firebase
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;

  // Initialize `cards` state only when `items` is available
  const [cards, setCards] = useState<DocumentData[]>([]);

  // Watch `items` for changes and update the `cards` state
  useEffect(() => {
    if (items && items.length) {
      setCards(items);
    }
  }, [items]);

  // Start the flipping interval
  useEffect(() => {
    if (cards.length > 0) {
      startFlipping();
    }
    return () => clearInterval(interval);
  }, [cards]);

  // Function to flip cards in the stack every 5 seconds
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: DocumentData[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!); // Move the last card to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-full">
      {/* Check if cards are available */}
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <motion.div
            key={index}
            className="absolute bg-white h-full rounded-3xl shadow-xl flex flex-col"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET, // Add offset to simulate stacking effect
              scale: 1 - index * SCALE_FACTOR, // Scale cards for visual stacking
              zIndex: cards.length - index, // Set the stacking order for z-index
            }}
          >
            {/* Image Section */}
            {card.imageUrl ? (
              <div className="relative xs:h-[50%] lg:h-[65%] rounded-3xl overflow-hidden">
                <Image
                  src={card.imageUrl} // Dynamic image URL
                  alt={card.title || "Card Image"} // Dynamic alt text
                  layout="fill" // Make image fill the parent container
                  objectFit="cover" // Ensure image covers the container without distortion
                  className="rounded-t-3xl" // Rounded corners for the top
                />
              </div>
            ) : (
              <div className="xs:h-[50%] lg:h-[65%] rounded-t-3xl bg-gray-200 flex items-center justify-center">
                No Image Available
              </div>
            )}

            {/* Content Section */}
            <div className="flex-1 px-3 py-2 flex flex-col ">
              <div className="uppercase xl:text-xl font-bold tracking-wide">
                {card.title || "No Title"} {/* Dynamic title */}
              </div>
              <div className="mt-1 xs:text-sm xl:text-base tracking-wider w-full text-ellipsis overflow-hidden">
                {card.description || "No Description"}{" "}
                {/* Dynamic description */}
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        // Loading state when `cards` is empty
        <div className="flex items-center justify-center h-full text-gray-500">
          Loading...
        </div>
      )}
    </div>
  );
};
