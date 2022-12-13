import React, { useState } from "react"
import { useContext } from "react"
import { appContext } from "../App"
import MyForm from "./myForm"
import reactLogo from '../assets/react.svg'
import './navbar.css'
import {GiHouse} from "react-icons/all"
import { useEffect } from "react";





const Body = (props) => {
  const {formStatus} = useContext(appContext)
  const {displayProjects, setDisplayProjects} = useContext(appContext)
  const {navbarFormLinkStatus, setNavbarFormLinkStatus} = useContext(appContext)
  const {displayProjectStatus, setDisplayProjectStatus} = useContext(appContext)
  const {displayProposalsStatus, setDisplayProposalsStatus} = useContext(appContext)
  const {displayProposals, setDisplayProposals} = useContext(appContext)
  const {editProposalStatus, setEditProposalStatus} = useContext(appContext)
  


  useEffect(() => {  
  
    const getProjectsData = async () => {await fetch('http://localhost:8007/')
              .then(res => {
                return res.json();
              })
              .then(data => {
                setDisplayProjects(data);
                // console.log(data);
                // console.log(displayProjects);
              })}
          getProjectsData();
  }, []);

  


  var handleGetProjectDataClick = () =>{
    if(displayProjectStatus === false){
      setDisplayProjectStatus(true);
      console.log(displayProjectStatus);
      console.log("true");
      console.log("projects is set to display data");


    }else{
      setDisplayProjectStatus(false);
      console.log("false");
      console.log("projects remove data");
    }

  }


if(displayProposalsStatus === true){

  return(
  <div className="primary">
    <div></div>
     <div className="card" id="card3">
       <div>
              {displayProposals.map(myProposal => (
                <div key={myProposal.id}>
                  <div className="proposal-items">Homeowner :&nbsp;{myProposal.first_name}</div>
                  <div className="proposal-items">City :&nbsp;{myProposal.city}</div>
                  <div className="proposal-items">State :&nbsp;{myProposal.state_name}</div>
                  <div className="proposal-items">Community :&nbsp;{myProposal.community_name}</div>
                  <div className="proposal-items">proposal :&nbsp;{myProposal.proposal}</div>
                  <div className="proposal-items">reviewed :&nbsp;{myProposal.reviewed}</div>
                  <div className="proposal-items">HOA Response :&nbsp;{myProposal.response}</div>
                  <div className="proposal-items">Project :&nbsp;{myProposal.project_name}</div>
                  <div className="proposal-items">Supervisor :&nbsp;{myProposal.board_member}</div>
                  <p>&nbsp;&nbsp;&nbsp;</p>
                </div>
              ))}
            </div>
     </div>
  </div>
  )
}else{

 if(formStatus === true){
  return (
  <div className="primary">
    <MyForm />
    
    <div className="card" id="card3">

            <div value='{displayProjects}'/>

        </div>
  </div>
  )
}else{
  return (
    <div className="primary">
        <div className="card" id="card1">
        </div>
          <div>
            {displayProjectStatus === true ? 
            <div>
              <div>
                <button className="getProjects-button" onClick={handleGetProjectDataClick}>Close Projects</button>
              </div>
              <div><p>&nbsp;&nbsp;&nbsp;</p></div>
              <div>
              {displayProjects.map(project => (
                <div key={project.id}>
                  <div className="project-items">Project Name :&nbsp;{project.projectname}</div>
                  <div className="project-items">Details :&nbsp;{project.details}</div>
                  <div className="project-items">Start Date :&nbsp;{project.startdate}</div>
                  <div className="project-items">End Date :&nbsp;{project.enddate}</div>
                  <div className="project-items">Supervisor :&nbsp;{project.supervisor}</div>
                  <div className="project-items">Community :&nbsp;{project.communityname}</div>
                  <div className="project-items">Location :&nbsp;{project.locationaddress}</div>
                  <div className="project-items">Status :&nbsp;{project.projectstatus}</div>
                  <p>&nbsp;&nbsp;&nbsp;</p>
                  <p>&nbsp;&nbsp;&nbsp;</p>
                </div>
              ))}
            </div>
              <GiHouse size="3em" />
            </div> : 
            <div>
              <button className="getProjects-button" onClick={handleGetProjectDataClick}>Current Projects</button>
              <p className="project-disclaimer">Projects are an ongoing efforts of construction or services, agreed upon by the majority of homeowners a given community. 
                'project' Voting ballots are sent to homeowners quarterly to ensure that every homeowner is considered in the voting process.
                70% of homeowners must vote yes on a project in order for the project to be approved, as funds for the project come from homeowner dues.
                Dues from one community may not be applied to another community's project, efforts or services.</p>

              <p className="project-disclaimer">Project requests may be submitted through the proposal form by clicking on the 'Proposal Form' navigation button above.</p>
              <p className="project-disclaimer">All project proposals will be submitted for voting in the beginning of the following quarter, unless urgent.</p>
              <p className="project-disclaimer">Urgent proposals are considered 'Concerns' and may be submitted as a concern by clicking the 'Concern' checkbox in the form. 
                Concerns will be addressed immediately by the board upon receipt.</p>
              <p className="project-disclaimer">Concerns are considered URGENT and address those matters that may cause potential damage or pose unsafe conditions immediately or in 
                the near future.</p>
              <p className="project-disclaimer">Regarding 'Concerns' ... they are not considered 'Emergencies' which should be addresses by contacting emergency services or dialing 911.</p>
              <GiHouse size="3em" />
            </div>}
          </div>
          

    </div>

  )
}
}

}

export default Body;