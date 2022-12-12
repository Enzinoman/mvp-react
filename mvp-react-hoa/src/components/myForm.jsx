import React, { useState } from "react";
import { useEffect } from "react"
import { useContext } from "react";
import { appContext } from '../App'
import './myForm.css'


function MyForm(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [stateName, setStateName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNUmber] = useState("")
    const [communityName, setCommunityName] = useState("")
    const [userProposal, setUserProposal] = useState("")
    const [reviewed, setReviewed] = useState(false)
    const [boardResponse, setBoardResponse] = useState("")
    const [projectName, setProjectName] = useState("")
    const [boardMember, setBoardMember] = useState("")
    const [password, getPassword] = useState('8675309')
    const [projectSubmit, setProjectSubmit] = useState(false)

    const {displayProjects, setDisplayProjects} = useContext(appContext)

 
    const handleProposalSubmit = (e) => {
      e.preventDefault();
      const update = {firstName, lastName, city, stateName, email, phoneNumber, communityName, userProposal};
      console.log(update);
      fetch('http://localhost:8007/proposals', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(update)
      })
      .then(() => {
        console.log('new item added');
      })
    }
   




    let isReviewed = "Reviewed : " + reviewed;


    return (
      <form className="proposal-form">
      <p className="inputRequest">Please fill in the fields below</p>
      <p></p>
        <label className="label"
        >First name :&nbsp;
          <input className="input-field" type="text" 
          id="firstNameInput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Last name :&nbsp;
          <input className="input-field" type="text" 
          id="lastNameInput"
          value={lastName}
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
          value={stateName}
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
          value={phoneNumber}
          onChange={(e) => setPhoneNUmber(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Community :&nbsp;
          <input className="input-field" type="text" 
          id="communityNameInput"
          value={communityName}
          onChange={(e) => setCommunityName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Proposal / Concern :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={userProposal}
          onChange={(e) => setUserProposal(e.target.value)} 
          />
        </label>
        <p></p>
         <label className="labelOutput"
        >reviewed :&nbsp;{reviewed === false ? "No" : "Yes"}
          
        </label>
        <p>&nbsp;</p>
        <button className="submit-form" onClick={handleProposalSubmit}>Submit</button>
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
          value={boardResponse}
          onChange={(e) => setBoardResponse(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Project Name if Approved :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Reviewed by 'Boardmember' :&nbsp;
          <input className="input-field" type="text" 
          id="proposalInput"
          value={boardMember}
          onChange={(e) => setBoardMember(e.target.value)} 
          />
        </label>
        
       
      </form>
    )
}

    export default MyForm;
