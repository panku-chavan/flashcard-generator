
import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/1-NavBar/NavBar";

import { CreateFlashCard } from "./Components/2-CreateFlashcard/CreateFlashCard";
import { MyFlashCard } from "./Components/3-MyFlashcard/MyFlashCard";
import { FlashCardDetails }from "./Components/4-Details/FlashCardDetails";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#f8f4ef] font-Montserrat">
       <div className="px-5 xl:px-32 container mx-auto">
        {/* NavBar component */}
       <NavBar/>
       {/* using react router for routing */}
        <Routes>
          {/* Default route */}
          <Route path="/" element={<CreateFlashCard/>}></Route>
          <Route path="/myflashcard" element={<MyFlashCard/>}></Route>
          <Route path="/flascard-details/:groupId" element={<FlashCardDetails/>}></Route>
          
        </Routes>
       </div>
    </div>
  )
}