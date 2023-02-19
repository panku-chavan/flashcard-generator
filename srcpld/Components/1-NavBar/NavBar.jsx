
import { NavLink } from "react-router-dom";


export const NavBar = () => {

  return (
    <div className="w-full pt-2">
      <h1 className="text-xl text-slate font-bold mb-5">
        {"Create Flashcard"}
      </h1>
      <div className="flex items-center space-x-10 mb-3">
        <button className="text-sm font-bold text-red-600" >
          
          {/* This button will navigate to create flashcard page */}

          <NavLink to={"/"}
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px"
            })}
          >Create New</NavLink>
        </button>
        <button className="text-sm font-bold text-red-600" >

          {/* This button will navigate to Myflashcard page */}
          
          <NavLink to={"/myflashcard"}
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px"
            })}>
            My Flashcard</NavLink>
        </button>
      </div>
      <hr className="border bg-slate-300 border-slate-300 mb-8" />
    </div>
  );
};
