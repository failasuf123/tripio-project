import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUmbrellaBeach, faMugHot, faCampground, faPersonHiking, faBinoculars, faRoad, faLock, faWater, faMartiniGlassCitrus,faBurger,
    faBuilding, faMountainSun, faDungeon, faFilm, faPeopleGroup, faTree, faBowlingBall, faLandmark, faTreeCity, faCity,
  } from "@fortawesome/free-solid-svg-icons";

function NavBarPlaceProp() {
  return (
    <div className="flex flex-row overflow-x-scroll no-scrollbar  text-gray-500 justify-start text-sm py-6 ml-6  overflow-hidden gap-6 md:gap-12 md:mt-3">

     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBuilding} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Mall</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faDungeon} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Taman Hiburan</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMugHot} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">CoffeShop</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMartiniGlassCitrus} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Cafe</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBurger} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Restoran</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMountainSun} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Gunung</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faUmbrellaBeach} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Pantai</p>
      </div>

     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faFilm} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Bioskop</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faWater} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Danau</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faTree} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Hutan</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBinoculars} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Air Terjun</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faLandmark} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Land Mark</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faTreeCity} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Taman</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faCity} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Vibes Kota</p>
      </div>

      {/* BATAS DUPLIKAT */}
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBuilding} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Mall</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faDungeon} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Taman Hiburan</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMugHot} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">CoffeShop</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMartiniGlassCitrus} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Cafe</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBurger} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Restoran</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faMountainSun} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Gunung</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faUmbrellaBeach} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Pantai</p>
      </div>

     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faFilm} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Bioskop</p>
     </div>
     <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faWater} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Danau</p>
     </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faTree} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Hutan</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faBinoculars} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Air Terjun</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faLandmark} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Land Mark</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faTreeCity} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Taman</p>
      </div>
      <div className="flex flex-col relative items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 ">
         <FontAwesomeIcon icon={faCity} className="inline-flex h-6 w-6 bg-none  mb-1"/>
         <p className=" text-xs items-center md:flex-auto md:visible">Vibes Kota</p>
      </div>
    </div>
  )
}

export default NavBarPlaceProp