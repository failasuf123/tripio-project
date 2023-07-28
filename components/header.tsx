import React from 'react'
import Image from 'next/image'

import {  MagnifyingGlassIcon,GlobeAsiaAustraliaIcon, MapIcon, RocketLaunchIcon} from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";



function header() {
  return (
    
      <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 py-2 px-5 s ">
        {/* left-header */}
        <div>
           <Image src="/epent-icon.png" alt="SVG Image" width={45} height={45} className="logo-image" />
        </div>

        {/* middle-header */}
        <div>
        <div className="flex items-center justify-between  md:border-2 rounded-full py-2 text-sm  ">
            <input className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400 border-b-2 pb-1 md:border-none md:pb-0" type="text" placeholder="Cari Tempat Wisata.."></input> 
            <MagnifyingGlassIcon className="h-6 w-6 bg-cyan-500 text-white cursor-pointer rounded-full p-1 mx-2 " />      
        </div>
        </div>

        {/* right-header */}
        <div className="hidden md:flex items-center space-x-4 justify-end text-gray-500 px-4 gap-2 ">
          <ul className="flex space-x-4">
            {/* Tempat */}
            <li className="relative flex items-center flex-col align-middle cursor-pointer  hover:text-gray-700  ">
              <GlobeAsiaAustraliaIcon className="inline-flex h-6 w-6 bg-none mb-1" />
              <p className="text-xs">Tempat</p>
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"></div>
            </li>

            {/* Aktivitas */}
            <li className="flex items-center flex-col align-middle cursor-pointer  hover:text-gray-700  ">
              <FontAwesomeIcon icon={faPersonWalkingLuggage} className="inline-flex h-6 w-6 bg-none mb-1" />
              <p className="text-xs">Aktivitas</p>
            </li>

            {/* ePengalaman */}
            <li className="flex items-center flex-col align-middle cursor-pointer  hover:text-gray-700  ">
              <RocketLaunchIcon className="inline-flex h-6 w-6 bg-none mb-1" />
              <p className="text-xs">Pengalaman</p>
            </li>

            {/* Peta */}
            <li className="flex items-center flex-col align-middle cursor-pointer  hover:text-gray-700  ">
              <MapIcon className="inline-flex h-6 w-6 bg-none mb-1" />
              <p className="text text-xs">Peta</p>
            </li>
          </ul>
        </div>

      </header>
 
  )
}

export default header
