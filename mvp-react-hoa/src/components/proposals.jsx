import React, { useState } from "react"
import { useContext } from "react"
import { appContext } from "../App"
import MyForm from "./myForm"
import reactLogo from '../assets/react.svg'
import './navbar.css'
import {GiHouse} from "react-icons/all"
import { useEffect } from "react";
  
  
  const Proposals = (props) => {
  let displayProposalsArray;
  
  useEffect(() => {  
  
    const getProposalData = async () => {await fetch('http://localhost:8007/proposals')
              .then(res => {
                return res.json();
              })
              .then(data => {
                setDisplayProposals(data);
                console.log(displayProjects);
              })}
              getProposalData();
  }, []);
  
  var handleGetProposalClick = () =>{
    if(displayProposalsStatus === true){
      setDisplayProposalStatus(false);
      console.log(displayProposalsStatus);
      console.log("true");
      console.log("proposals is set to display data");


    }else{
      setDisplayProposalStatus(true);
      console.log("false");
      console.log("proposals remove data");
    }

  }


return(
<div>
       <div>{displayProposalsStatus === true ? <div>
          <button className="getProjects-button" onClick={handleGetProposalClick}>Close Proposals</button>
          </div> : <div>
          <button className="getProjects-button" onClick={handleGetProposalClick}>Current Proposals</button>
          <p className="project-disclaimer">See Submitted Proposals by clicking the 'Current Proposals' button.</p>
           </div>}
          </div>
        <p>&nbsp;&nbsp;&nbsp;</p>
            <div>{displayProjectStatus === true ? 
          <div>{displayProposalsArray.map(proposals => (
              <div key={proposals.id}>
                <div className="project-items">Proposal ID :&nbsp;{proposals.id}</div>
                <div className="project-items">City :&nbsp;{proposals.city}</div>
                <div className="project-items">Community :&nbsp;{proposals.communityname}</div>
                <div className="project-items">Proposal :&nbsp;{proposals.proposal}</div>
                <div className="project-items">Reviewed :&nbsp;{proposals.reviewed}</div>
                <div className="project-items">Response by Board :&nbsp;{proposals.response}</div>
                <div className="project-items">Board Member :&nbsp;{proposals.boardmemeber}</div>
                <div className="project-items">Project Name :&nbsp;{proposals.projectname}</div>
                <p>&nbsp;&nbsp;&nbsp;</p>
                <p>&nbsp;&nbsp;&nbsp;</p>
              
              </div>
              
            ))

            }</div> : <></>}</div>
            </div>

)
        }

        export default Proposals;