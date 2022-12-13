import React, { useState } from "react";
import './navbar.css';
import { AiFillPhone } from "react-icons/all";
import { useContext } from "react";
import { appContext } from '../App'
import { useEffect } from "react";
import axios from "axios";




function Navbar(props) {
  const {formStatus, setFormStatus} = useContext(appContext)
  const {navbarFormLinkStatus, setNavbarFormLinkStatus} = useContext(appContext)
  const {displayProposalsStatus, setDisplayProposalsStatus} = useContext(appContext)
  const {displayProposals, setDisplayProposals} = useContext(appContext)
  const {displayProjectStatus, setDisplayProjectStatus} = useContext(appContext)
  const {editProposalStatus, setEditProposalStatus} = useContext(appContext)



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


  

  //     const handleProposalSubmit = (e) => {
  //    e.preventDefault();
  //    console.log("I'm handling a submit");
  //    axios.post('http://localhost:8007/proposals', 
  //    {first_name: firstName, 
  //     last_name: lastName, 
  //     city: city, 
  //     state_name: stateName, 
  //     email: email, 
  //     phone_number: phoneNumber, 
  //     community_name: communityName, 
  //     proposal: userProposal, 
  //     reviewed: reviewed, 
  //     response: boardResponse, 
  //     project_name: projectName, 
  //     board_member: boardMember }
  //    )
  //    .then(response =>{
  //     console.log(response)

  //    })
  //    .catch(error =>{
  //     console.log(error)
  //    })
  // }

  var handleClick = () =>{
    if(formStatus === false){
      setFormStatus(true);
      console.log('Displaying Form');
      setNavbarFormLinkStatus(true);
      setDisplayProposalsStatus(false);
      setDisplayProjectStatus(false);
    }else{
      setFormStatus(false);
      console.log('returning to original Navbar setting');
      setNavbarFormLinkStatus(false);
    }

  }



  const getProposalsFromTable = async () => {
    await fetch('http://localhost:8007/proposals')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setDisplayProposals(data);
      console.log(data);
    })};
    



  var handleDisplayProposalClick = () =>{
    if(displayProposalsStatus === false){
      setDisplayProposalsStatus(true);
      setDisplayProjectStatus(false);
      console.log('Displaying Form');
      setNavbarFormLinkStatus(false);
      setFormStatus(false);
      getProposalsFromTable();
    }else{
      setFormStatus(false);
      console.log('returning to original Navbar setting');
      setDisplayProposalsStatus(false);
    }

  }




  var editProposal = () =>{
    if(editProposalStatus === false){
      setEditProposalStatus(true);
      setFormStatus(false);
      setNavbarFormLinkStatus(false);
      setDisplayProposalsStatus(false);
      setDisplayProjectStatus(false);
      console.log('Editing Form');
      // getProposalsFromTable();
    }else{
      setEditProposalStatus(false);
      console.log('returning to original Navbar setting');

    }

  }






if(displayProposalsStatus === false){
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
        <li className='nav-li' onClick={handleDisplayProposalClick}>Display Proposals</li>
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
        <li className='nav-li' onClick={handleDisplayProposalClick}>Display Proposals</li>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <li className='nav-li' onClick={handleClick}>Back</li>
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
        <li className='nav-li' onClick={handleDisplayProposalClick}>Back</li>
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
}
}





export default Navbar;