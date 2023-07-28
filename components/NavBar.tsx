import React from 'react'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need

import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import NavBarPlaceProp from './NavBarPlaceProp';
import NavBarLocationProp from './NavBarLocationProp';
// import { Mail } from "./Mail";
// import { Password } from "./Password";

function nav_menu() {
  
  return (
    <div className="shadow-sm grid grid-rows-2 bg-white pt-2 pb-0 px-5 md:pb-2 ">
      {/* location */}
      {/* <NavBarLocationProp/> */}

    {/* place */}
      <NavBarPlaceProp />


   </div>
  )
}

export default nav_menu
