"use client";
import Testimonals from "./components/Testimonals";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Menu from "./components/Menuitem";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 min-h-screen">
      
      <Carousel/>
      <Banner/>
      <Menu/>
      <Testimonals/>
      
    </div>
  );
}
