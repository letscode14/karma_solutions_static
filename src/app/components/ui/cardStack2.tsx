// components/CardStack.tsx
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import image from "../../../../public/fresh-park-nature-beautiful-backgrounds.jpg";

interface CardProps {
  imageUrl: StaticImageData;
  text: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, text, title }) => {
  return (
    <div className="relative w-full h-[300px] rounded-lg shadow-lg bg-white overflow-hidden group">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-all group-hover:scale-110"
      />
      <div className="absolute bottom-0 w-full bg-white p-4 opacity-80 text-gray-800">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CardStack: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      imageUrl: image,
      title: "Our Recent Work at Kochi Kakkanad",
      text: `"We recently transformed a residential property in Kochi Kakkanad with our expert landscaping and garden construction services. From lush garden setups to interlocking pathways, we revitalized the outdoor space to create a beautiful and functional environment for our client."`,
    },
    {
      imageUrl: image,
      title: "Our Recent Work at Bangalore",
      text: `"We revamped a corporate campus in Bangalore, creating a serene outdoor space for relaxation and team collaboration, integrating sustainable and green landscaping designs."`,
    },
    // Add more cards as necessary
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [cards.length]);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 flex justify-center items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute transition-all transform ${
                index === currentIndex
                  ? "scale-100 z-10 opacity-100"
                  : index === (currentIndex - 1 + cards.length) % cards.length
                  ? "scale-90 z-0 opacity-50"
                  : "scale-90 z-0 opacity-0"
              }`}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardStack;
