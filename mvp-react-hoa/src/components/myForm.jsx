import React, { useState } from "react";
import { useEffect } from "react"
import { useContext } from "react";
import { appContext } from '../App'
import './myForm.css'
import axios from "axios"


function MyForm(props) {

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [state_name, setStateName] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhoneNUmber] = useState("")
    const [community_name, setCommunityName] = useState("")
    const [proposal, setUserProposal] = useState("")
    const [reviewed, setReviewed] = useState("")
    const [response, setBoardResponse] = useState("")
    const [project_name, setProjectName] = useState("")
    const [board_member, setBoardMember] = useState("")
    const [id, setId] = useState()
    const [projectSubmit, setProjectSubmit] = useState(false)

    const {displayProjects, setDisplayProjects} = useContext(appContext)

 
    const handleProposalSubmit = (e) => {
      e.preventDefault();
      const update =  {
        first_name: first_name, 
        last_name: last_name, 
        city: city, 
        state_name: state_name, 
        email: email, 
        phone_number: phone_number, 
        community_name: community_name, 
        proposal: proposal, 
        reviewed: reviewed, 
        response: response, 
        project_name: project_name, 
        board_member: board_member };
      console.log(update);
       fetch('http://localhost:8007/proposals', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(update)
      })
      .then((response) => {
        console.log('new item added');
        console.log(response);
      })
      .catch(error =>{
        console.log(error)
       })
    }
   

  //   const handleProposalSubmit = (e) => {
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



    let isReviewed = "Reviewed : " + reviewed;


    return (
      <form className="proposal-form">
      <p className="inputRequest">Please fill in the fields below</p>
      <p></p>
        <label className="label"
        >First name :&nbsp;
          <input className="input-field" type="text" 
          id="firstNameInput"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Last name :&nbsp;
          <input className="input-field" type="text" 
          id="lastNameInput"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >City :&nbsp;
          <input className="input-field" type="text" 
          id="cityInput"
          value={city}
          onChange={(e) => setCity(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >state :&nbsp;
          <input className="input-field" type="text" 
          id="stateInput"
          value={state_name}
          onChange={(e) => setStateName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Email :&nbsp;
          <input className="input-field" type="text" 
          id="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Phone number :&nbsp;
          <input className="input-field" type="text" 
          id="phoneNumberInput"
          value={phone_number}
          onChange={(e) => setPhoneNUmber(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Community :&nbsp;
          <input className="input-field" type="text" 
          id="communityNameInput"
          value={community_name}
          onChange={(e) => setCommunityName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Proposal / Concern :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={proposal}
          onChange={(e) => setUserProposal(e.target.value)} 
          />
        </label>
        <p></p>
        <p className="p">--------&nbsp;Input below this line is for Board Members only&nbsp;--------</p>
        <p></p>
        <label className="label"
        >Reviewed by Board Member :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={reviewed}
          onChange={(e) => setReviewed(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Board Response :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={response}
          onChange={(e) => setBoardResponse(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Project Name if Approved :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={project_name}
          onChange={(e) => setProjectName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Reviewed by 'Boardmember' :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={board_member}
          onChange={(e) => setBoardMember(e.target.value)} 
          />
        </label>
        <p></p>
        <button className="submit-form" onClick={handleProposalSubmit}>Submit</button>
        
       
      </form>
    )
}

    export default MyForm;
