/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiArrowGoBackLine } from "react-icons/ri";

import { MdDownload, MdPrint } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

import Tab from "../../assets/tab.jpg";

import { SocialShare } from "./Modals/SocialShare";
import { Download } from "./Modals/Download";
import { Print } from "./Modals/Print";
import { Pagination } from "./Pagination/Pagination";

export const FlashCardDetails = () => {
  const [showShare, setShowShare] = useState(false);
  const [showDownload, setDownload] = useState(false);
  const [showPrint, setPrint] = useState(false);


  const closeShare = () => {
    setShowShare(!showShare);
  }
  const closeDownload = () => {
    setDownload(!showDownload);
  }
  const closePrint = () => {
    setPrint(!showPrint);
  }

  const { groupId } = useParams();
  const navigate = useNavigate();

  // gets the card from the Redux Store using useSelector Hook
  const cards = useSelector((state) => state.flashcard.flashcards);

  const [myCard, setMyCard] = useState({});
  const [flashcard, setFlashCard] = useState({});



  //pagination
  const CardArray = [];
  myCard.cards && myCard.cards.map((e) => CardArray.push(e));
  //posts.map((e)=>console.log(e))

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(6);

  // Get current cards
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCard = CardArray.slice(indexOfFirstCard, indexOfLastCard);
  //console.log(currentPosts)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  // This function will sets the Display card which will seclected by the user from the left side menu
  const displayCard = (id) => {
    const showFlashcard = myCard.cards.filter((c) => c.card_id === id);
    setFlashCard(showFlashcard[0]);
  };

  useEffect(() => {
    if (!groupId || !cards) return;
    // Filters the user selected card from the Cards from the store
    const temp = cards.filter((c) => c.card.group_id === groupId);
    setMyCard(temp[0].card);
  }, [groupId]);

  useEffect(() => {
    myCard.cards && setFlashCard(myCard.cards[0]);
  }, [myCard]);

  return (
    <div className="flex flex-col text-slate-600">
      <div className="flex">
        <BiArrowBack
          className="text-3xl mr-6 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col">
          <h2 className="text-xl text-black font-bold">{myCard.group_name}</h2>
          {myCard.group_description && (
            <p className=" my-2">{myCard.group_description}</p>
          )}
        </div>
      </div>
      <div className="  mt-6 md:grid grid-rows-1 grid-cols-4">
        <div className="mr-5 mb-5 col-span-1 bg-white h-fit rounded-md shadow-lg ">
          <h2 className="p-2 ">Flashcards</h2>
          <hr />
          <hr className="mb-2" />
          {currentCard.map((card) => (
            <p
              title={`${card.card_name}`}
              key={card.card_id}
              className={`py-2 px-7 text-slate-700 font-medium hover:bg-slate-100 cursor-pointer ${card.card_id === flashcard.card_id &&
                "!text-red-500 !font-bold"
                }`}
              onClick={() => displayCard(card.card_id)}
            >
              {card.card_name}
            </p>
          ))}
        </div>

        <div className="mb-5  col-span-3 md:col-span-2 flex  l:flex-row items-center w-full bg-white shadow-lg rounded-lg">
          <img
            src={Tab}
            alt="card_image"
            className="object-contain md:w-[20vw] p-6 w-[32rem] h-full"
          />
          <p className="p-5 py-6 w-full">
            {flashcard.card_description}
          </p>
        </div>

        
        <div className="ml-5 col-span-1  md:flex flex-col items-center space-y-2">
          <button title="Share" type="button" onClick={() => setShowShare(!showShare)} className="flex items-center py-3 px-3 xl:w-60 space-x-4 bg-white rounded-md shadow-lg  transition-all duration-100 hover:scale-105">
            <RiArrowGoBackLine className="scale-x-[-1]" />
            <span>Share<span className="ml-7"></span></span>
          </button>
          <SocialShare showShare={showShare} closeShare={closeShare} />
          <button title="Download" type="button" onClick={() => setDownload(!showDownload)} className=" flex items-center py-3 px-3 xl:w-60 space-x-4 bg-white rounded-md shadow-lg  transition-all duration-100 hover:scale-105">
            <MdDownload />
            <span>Download</span>
          </button>
          <Download showDownload={showDownload} closeDownload={closeDownload} />
          <button title="Print" type="button" onClick={() => setPrint(!showPrint)} className="flex items-center py-3 px-3 xl:w-60 space-x-4 bg-white rounded-md shadow-lg  transition-all duration-100 hover:scale-105">
            <MdPrint />
            <span>Print<span className="ml-9"></span></span>
          </button>
          <Print showPrint={showPrint} closePrint={closePrint} />
        </div>

      </div>

      {/* Pagination Component */}
      <div className="ml-[44%]">
        {/* Provide props to Pagination Component */}
        <Pagination
          cardsPerPage={cardPerPage}
          totalCards={CardArray.length}
          paginate={paginate} />
      </div>
    </div>

  );
};


