import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FlashCard } from "./FlashCard";


export const MyFlashCard = () => {
  const navigate = useNavigate();
  const flashcard = useSelector((state) => state.flashcard.flashcards);

  const [seeAll, setSeeAll] = useState(false);
  // this sets the limit according to the state.
  const SeeCards = !seeAll ? 6 : flashcard.length;

  return (
    <section className="flex flex-col mt-16">
      {flashcard.length > 0 ? (
        <div>
          <div className="flex flex-wrap justify-evenly">
            {/* This will display six group of cards */}
            {
              flashcard.slice(0, SeeCards).map(({ card }, i) =>
                <div>
                  <FlashCard key={i} card={card} flashcards={flashcard} />
                </div>)
            }
          </div>
          <div className="flex justify-end mr-10">
            {
              // Button will show after cards length should be above six.
              flashcard.length > 6 ?
                <button
                  className=" mt-1 font-semibold text-lg text-red-600 outline-none border-none active:outline-none active:border-none"
                  onClick={() => setSeeAll(!seeAll)} >
                  {seeAll ? "See less" : "See all"}
                </button> : null
            }
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-white shadow-lg p-20">
          <h1 className="font-semibold text-xl text-slate-500">
            Nothing to SHOW, Go to{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
              title="Create FlashCard."
            >Create Flashcard{" "}</span> to Create New </h1>
        </div>
      )}
    </section>
  );
};


