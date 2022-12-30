import React, { useState } from "react"
import { useContext } from "react"
import { appContext } from "../App"
import MyForm from "./myForm"
import reactLogo from '../assets/react.svg'
import './navbar.css'
import {GiHouse} from "react-icons/all"
import { useEffect } from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"





const Body = (props) => {


    const [eyeD, setEyeD] = useState("")
    const [deleteEyeD, setDeleteEyeD] = useState("")

    const [reviewed, setReviewed] = useState("")
    const [response, setBoardResponse] = useState("")
    const [project_name, setProjectName] = useState("")
    const [board_member, setBoardMember] = useState("")
    const [passwd, setPasswd] = useState("")
    const [deletePassword, setDeletePassword] = useState("")

    const memberPassword = "8675309"
    const deleteMemberPassword = "8675309" 


  const {formStatus} = useContext(appContext)
  const {displayProjects, setDisplayProjects} = useContext(appContext)
  const {navbarFormLinkStatus, setNavbarFormLinkStatus} = useContext(appContext)
  const {displayProjectStatus, setDisplayProjectStatus} = useContext(appContext)
  const {displayProposalsStatus, setDisplayProposalsStatus} = useContext(appContext)
  const {displayProposals, setDisplayProposals} = useContext(appContext)
  const {editProposalStatus, setEditProposalStatus} = useContext(appContext)
  const {deleteProposalStatus, setDeleteProposalStatus} = useContext(appContext)
  
let myProjectArray = [];

  useEffect(() => {  
  
    const getProjectsData = async () => {await fetch('http://localhost:8007/projects')
              .then(res => {
                return res.json();
              })
              .then(data => {
                myProjectArray = data.rows;
                setDisplayProjects(data.rows);
                console.log(data.rows);
                // console.log(displayProjects);
              })}
          getProjectsData();
  }, []);






  const handleDelete = (e) => { 
    e.preventDefault();
    console.log(deleteEyeD)
    if(deleteMemberPassword === deletePassword){
      axios.delete(`http://localhost:8007/delete/${deleteEyeD}`,
     ).then((response) => {
      console.log(response);
     }).catch((error) => {
      console.log(error);
     })
    }else{
      alert("Incorrect Password!")
    }
  }


  const handleProposalUpdates = (e) => { 
    e.preventDefault();
    if(memberPassword === passwd){
      axios.patch(`http://localhost:8007/update/${eyeD}`,
      { 
      reviewed: reviewed,
      response: response,
      project_name: project_name,
      board_member: board_member },
      { headers: { 'Content-Type': 'application/json' }, }
     ).then((response) => {
      console.log(response);
     }).catch((error) => {
      console.log(error);
     })
    }else{
      alert("Incorrect Password!")
    }
  }






  var handleGetProjectDataClick = () =>{
    if(displayProjectStatus === false){
      setDisplayProjectStatus(true);
      console.log("true");
      console.log("projects is set to display data");


    }else{
      setDisplayProjectStatus(false);
      console.log("false");
      console.log("projects remove data");
    }

  }




// // sending PUT request with fetch API in javascript






if(displayProjectStatus === true){
  return(
    <>
    <div className="primary">
      <div className="card" id="card5">
        <div>
          <button className="getProjects-button" onClick={handleGetProjectDataClick}>Close Projects</button>
        </div>
        <div>
          <p>&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="projects">
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

      </div>
    </div>
    <p>&nbsp;&nbsp;&nbsp;</p>
    <GiHouse size="3em" />
    </>
  )
}else{
if(deleteProposalStatus === true){
  return(
    <>
    <div className="primary">
      <div></div>
      <div className="card" id="card1" width='100%' height='100%'>
      <form className="proposal-form">
      <p className="inputRequest">Enter ID of proposal you wish to delete below</p>
      <p></p>
          <input className="input-field" type="text" 
          id="idInput"
          value={eyeD}
          onChange={(e) => setEyeD(e.target.value)} 
          />
        <p></p>
        <button className="submit-form" >Delete</button>

      </form>
       </div>
    </div>
    <p>&nbsp;&nbsp;&nbsp;</p>
    <GiHouse size="3em" />
    </>
  )
}else{

 if(displayProposalsStatus === true){

  return(
<>
  <div className="primary">
    <div></div>
     <div className="card" id="card2">
       <div>
              {displayProposals.map(myProposal => (
                <div key={myProposal.id} >
                  <div className="proposalId">Proposal&nbsp;{myProposal.id}</div>
                  <p></p>
                  <div className="proposal-items">Homeowner :&nbsp;{myProposal.first_name}</div>
                  <div className="proposal-items">City :&nbsp;{myProposal.city}</div>
                  <div className="proposal-items">State :&nbsp;{myProposal.state_name}</div>
                  <div className="proposal-items">Community :&nbsp;{myProposal.community_name}</div>
                  <div className="proposal-items">proposal :&nbsp;{myProposal.proposal}</div>
                  <div className="proposal-items">reviewed :&nbsp;{myProposal.reviewed}</div>
                  <div className="proposal-items">HOA Response :&nbsp;{myProposal.response}</div>
                  <div className="proposal-items">Project :&nbsp;{myProposal.project_name}</div>
                  <div className="proposal-items">Supervisor :&nbsp;{myProposal.board_member}</div>
                  <div className="deletDiv">
                  <p>&nbsp;</p>
                  <p className="p">--------&nbsp;Board-members Only: Delete disapproved proposals after 30 days&nbsp;--------</p>
                  <p>&nbsp;</p>
                  <label className="label">
                      Enter password :&nbsp;
                      <input className="input-field" 
                        type="text" 
                        value={deletePassword}
                        placeholder="Password"
                        onChange={(e) => {setDeleteEyeD(myProposal.id); setDeletePassword(e.target.value)}} />
                    </label>
                    <p></p>
                    <button className="submit-form" onClick={handleDelete}>Delete</button>
                  </div>
                  <p>&nbsp;</p>
                  <p className="p">--------&nbsp;Board-members Only: Review and update this proposal with the form below ... 'if not reviewed'&nbsp;--------</p>
                  <p>&nbsp;</p>

                  <div className="Update-proposal-form">
                    <label className="label">
                      Enter password :&nbsp;
                      <input className="input-field" 
                        type="text" 
                        value={passwd}
                        placeholder="Password"
                        onChange={(e) => {setEyeD(myProposal.id); setPasswd(e.target.value)}} />
                    </label>
                    <p></p>
                    {/* <label className="label">
                      Enter Proposal ID :&nbsp;
                      <input className="input-field" 
                        type="text" 
                        id="proposalId"
                        value={eyeD}
                        placeholder="ID"
                        onChange={(e) => setEyeD(e.target.value)} />
                    </label> */}
                    <p></p>
                    <label className="label">
                      Reviewed Status :&nbsp;
                      <input className="input-field" type="text" 
                      id="reviewStatus"
                      value={reviewed}
                      placeholder="Reviewed / Not-Reviewed"
                      onChange={(e) => setReviewed(e.target.value)}/>
                    </label>
                    <p></p>
                    <label className="label">
                      Board Response :&nbsp;
                      <input className="input-field" type="text" 
                        id="boardResponse"
                        value={response}
                        placeholder="Response"
                        onChange={(e) => setBoardResponse(e.target.value)} />
                    </label>
                    <p></p>
                    <label className="label">
                      Project Name if Approved :&nbsp;
                      <input className="input-field" type="text" 
                      id="projectName"
                      value={project_name}
                      placeholder="Project Name"
                      onChange={(e) => setProjectName(e.target.value)} />
                    </label>
                    <p></p>
                    <label className="label">
                      Reviewed by 'Board-member' :&nbsp;
                      <input className="input-field" type="text" 
                      id="boardMember"
                      value={board_member}
                      placeholder="Member Last Name"
                      onChange={(e) => setBoardMember(e.target.value)} />
                    </label>
                    <p></p>
                    <button className="submit-form" onClick={handleProposalUpdates}>Update</button>
                  </div>
                  <p>&nbsp;&nbsp;&nbsp;</p>
                  <p>&nbsp;&nbsp;&nbsp;</p>
              </div>
           ))}
        </div>
      </div>
    </div>
    <p>&nbsp;&nbsp;&nbsp;</p>
    <GiHouse size="3em" />
    </>
  )
}else{

 if(formStatus === true){
  return (
    <>
  <div className="primary">
    <MyForm />
    
    <div className="card" id="card3">

            <div value='{displayProjects}'/>

        </div>
  </div>
  <p>&nbsp;&nbsp;&nbsp;</p>
    <GiHouse size="3em" />
    </>
  )
}else{
  return (
    <>
  <div className="primary">
    <div className="card" id="card4">
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
      </div>
    </div>
  </div>
  <p>&nbsp;&nbsp;&nbsp;</p>
    <GiHouse size="3em" />
    </>

    )
   }

  }
 }
}
}

export default Body;


            