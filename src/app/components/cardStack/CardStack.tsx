"use client";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  query,
  DocumentData,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase-config";
import { CardStack } from "../ui/card-stack";

export function CardStackDemo() {
  const [cards, setCardData] = useState<DocumentData[]>([]);

  // Function to fetch images/data from Firebase Firestore
  const fetchImages = async () => {
    try {
      const q = query(collection(db, "worksCollections"), limit(8));
      const querySnapshot = await getDocs(q);

      const fetchedCards: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedCards.push(data);
      });

      // Set the fetched data to state
      setCardData(fetchedCards);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Fetch images when the component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  // Log the updated cards state after it's fetched
  useEffect(() => {
    console.log(cards, "Cards updated after fetch");
  }, [cards]);

  return (
    <div className="shadow-xl rounded-3xl 3xl:h-full lg:h-[80%] xl:h-full xs:h-[400px] sm:h-[450px]">
      {/* Pass the cards data to CardStack component */}
      <CardStack items={cards} />
    </div>
  );
}
