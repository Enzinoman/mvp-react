import React, { useState } from "react";
import './navbar.css';
import { AiFillPhone } from "react-icons/all";
import { useContext } from "react";
import { appContext } from '../App'
import { useEffect } from "react";



function Navbar(props) {
  const {formStatus, setFormStatus} = useContext(appContext)
  const {navbarFormLinkStatus, setNavbarFormLinkStatus} = useContext(appContext)


  // useEffect(() => {
  
  //   const getData = async () => {await fetch('http://localhost:8007/')
  //             .then(res => {
  //               return res.json();
  //             })
  //             .then(data => {
  //               setDisplayProjects(data);
  //               console.log(data);
  //               console.log(dataStuff);

  //             })}
  //   getData();
  // }, []);

  var handleClick = () =>{
    if(formStatus === false){
      setFormStatus(true);
      console.log('Displaying Form');
      setNavbarFormLinkStatus(true);
    }else{
      setFormStatus(false);
      console.log('returning to original Navbar setting');
      setNavbarFormLinkStatus(false);
    }

  }

if(navbarFormLinkStatus === false){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className='nav-li'>Services</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>About Us</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>Blog</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>Contact Us</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>Portal Access</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li' onClick={handleClick}>Proposal Form</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='icon-buttons'>?</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='icon-buttons'>?</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='icon-buttons'>?</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
      </ul>
          
    </nav>
  )
}else{
  return ( 
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className='nav-li'>Services</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>About Us</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>Blog</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>Contact Us</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li'>Portal Access</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li' onClick={handleClick}>Return</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='icon-buttons'>?</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='icon-buttons'>?</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='icon-buttons'>?</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
      </ul>
          
    </nav>
    
   )
}

 

}





export default Navbar;