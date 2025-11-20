import React from "react";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Routes , Route } from "react-router-dom";

export default function App() {
  return (

      <div className="w-full min-h-screen bg-linear-to-b from-gray-900 to-black text-white">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
   
  );
}