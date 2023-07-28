import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock  } from "@fortawesome/free-solid-svg-icons";

function NavBarLocationProp() {
  return (
    <div className="flex flex-row overflow-x-scroll no-scrollbar text-gray-500 justify-start gap-8  text-sm my-2 overflow-hidden  ">
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Indonesia</p>
      </div>

      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Jabodetabek</p>
      </div>

      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Jakarta</p>
      </div>

      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Bogor</p>
      </div>
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Depok</p>
      </div>
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Bekasi</p>
      </div>
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Purwokerto</p>
      </div>
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full">
        <p>Bandung</p>
      </div>
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full flex-nowrap">
        <p>Jogja</p>
        <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none  mb-1"/>
      </div>
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full flex-nowrap">
        <p>Solo</p>
        <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none  mb-1"/>
      </div>
      <div className="cursor-pointer flex items-center h-12  hover:text-white hover:bg-cyan-500 p-3 rounded-full flex-nowrap">
        <p>Bali</p>
        <FontAwesomeIcon icon={faLock} className="inline-flex h-3 w-3 bg-none  mb-1"/>
      </div>


    </div >
  )
}

export default NavBarLocationProp