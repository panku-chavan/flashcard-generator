import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/1-NavBar/Navbar";
import CreateFlashCard from "./Components/2-CreateFlashCard/CreateFlashCard";
import MyFlashCard from "./Components/3-MyFlashCard/MyFlashCard";
import FlashcardDetails from "./Components/4-FlashCardDetails/FlashCardDetails";






function App() {
  return (
    <div className="w-full min-h-screen bg-[#f8f4ef] font-Montserrat">
      <div className="px-5 xl:px-32 container mx-auto">
        
        
        <Navbar/>
        {/* All the Routes are Defined here */}
        <Routes>
          <Route path="/" element={<CreateFlashCard/>} />
          <Route path="/myflashcard" element={<MyFlashCard/>} />
          <Route
            path="/flashcarddetails/:groupId"
            element={<FlashcardDetails/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
