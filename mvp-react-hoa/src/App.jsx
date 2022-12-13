import React, { useState } from 'react'
import './App.css'
import { useEffect } from "react"
import {GiHouse} from "react-icons/all"
import MyForm from "./components/myForm"
import Header from "./components/header"
import Navbar from "./components/navbar"
import Body from "./components/body"
import HeaderCss from "./components/header.css"
import NavCss from "./components/navbar.css"
import BodyCss from "./components/body.css"
import background from "./components/images/nature.jpg"



function App(props) {
  const [formStatus, setFormStatus] = useState(false);
  const [editProposalStatus, setEditProposalStatus] = useState(false);
  const [displayProjects, setDisplayProjects] = useState([]);
  const [displayProposals, setDisplayProposals] = useState([]);
  const [navbarFormLinkStatus, setNavbarFormLinkStatus] = useState(false);
  const [displayProjectStatus, setDisplayProjectStatus] = useState(false); 
  const [displayProposalsStatus, setDisplayProposalsStatus] = useState(false); 

  
  const contextData = {formStatus, setFormStatus};
  const projectsData = {displayProjects, setDisplayProjects};
  const navBarFormLink = {navbarFormLinkStatus, setNavbarFormLinkStatus};
  const projectDataStatus = {displayProjectStatus, setDisplayProjectStatus};
  const proposalsDataStatus = {displayProposalsStatus, setDisplayProposalsStatus}
  const proposalsData = {displayProposals, setDisplayProposals}
  const editProposalsData = {editProposalStatus, setEditProposalStatus}
  

 

  return (

      <appContext.Provider value={{...contextData, ...editProposalsData, ...projectsData, ...navBarFormLink, ...projectDataStatus, ...proposalsDataStatus, ...proposalsData}}>
          <Header className={HeaderCss} />
          <Navbar className={NavCss} />
          <Body className={BodyCss} />
      </appContext.Provider>

  )
}


export const appContext = React.createContext();
export default App;