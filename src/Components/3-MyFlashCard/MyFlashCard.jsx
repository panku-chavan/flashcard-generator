import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FlashCard } from "./FlashCard";
import sorry from "../../assets/sorry.png";

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
          <div className=" flex justify-between">
            <div className="flex  ">
              {/* This will show total count of groups */}
              <span className=" mt-1  text-lg text-red-600 ">Total : {flashcard.length}</span>
            </div>
            <div className="flex  ">
              {
                // Button will show after group length should be above six.
                flashcard.length > 6 ?
                  <button
                    title="See All Flashcards"
                    className=" mt-1 font-semibold text-lg text-red-600 "
                    onClick={() => setSeeAll(!seeAll)} >
                    {seeAll ? "See less" : "See all"}
                  </button> : null
              }
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center  bg-white shadow-lg p-20">
          <div className="">
            <img src={sorry} alt="sorry" className="h-60 w-50" />
            </div>
          <div className="pt-5">
          <h1 className="font-semibold text-xl text-slate-500">There is no Flashcard please{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/")} title="Create FlashCard.">
              Create a new Flashcard.</span></h1>
          </div>
        </div>
      )}
    </section>
  );
};


