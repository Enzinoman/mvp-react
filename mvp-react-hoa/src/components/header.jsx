import React, { useState } from "react";
import './header.css';
import HouseBanner from "./images/housesBanner.jpg"
import { useContext } from "react";
import { appContext } from '../App'
import { useEffect } from "react";

function Header(props) {
    const {formStatus, setFormStatus} = useContext(appContext)
    const {navbarFormLinkStatus, setNavbarFormLinkStatus} = useContext(appContext)


    return(
        <div className="header" id="header">

            <img id="banner" src={HouseBanner}/>

        </div>
      )
    }


export default Header;