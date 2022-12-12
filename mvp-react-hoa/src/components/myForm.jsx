import React, { useState } from "react";
import { useEffect } from "react"
import { useContext } from "react";
import { appContext } from '../App'
import './myForm.css'


function MyForm(props) {

    const [ownerFirstName, setOwnerFirstName] = useState("")
    const [ownerLastName, setOwnerLastName] = useState("")
    const [city, setCity] = useState("")
    const [stateName, setStateName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNUmber] = useState("")
    const [communityName, setCommunityName] = useState("")
    const [proposalConcern, setProposalConcern] = useState("")
    const [reviewed, setReviewed] = useState(false)
    const [boardResponse, setBoardResponse] = useState("")
    const [projectName, setProjectName] = useState("")
    const [boardMember, setBoardMember] = useState("")
    const [password, getPassword] = useState('8675309')
    const [projectSubmit, setProjectSubmit] = useState(false)

    const {displayProjects, setDisplayProjects} = useContext(appContext)

 
    const submitDataToProjects = () =>{
      if(projectSubmit === false){
      console.log("I will be submitting something soon");
      setProjectSubmit(true)
      }else{
        setProjectSubmit(false)
        console.log("I will return to original status");
      }
    }
   




    let isReviewed = "Reviewed : " + reviewed;


    return (
      <form>
      <p className="inputRequest">Please fill in the fields below</p>
      <p></p>
        <label className="label"
        >First name :&nbsp;
          <input className="input-field" type="text" 
          id="firstNameInput"
          value={ownerFirstName}
          onChange={(e) => setOwnerFirstName(e.target.value)} 
          />
        </label>
        <p></p>
        <label className="label"
        >Last name :&nbsp;
          <input className="input-field" type="text" 
          id="lastNameInput"
          value={ownerLastName}
          onChange={(e) => setOwnerLastName(e.target.value)} 
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
          value={proposalConcern}
          onChange={(e) => setProposalConcern(e.target.value)} 
          />
        </label>
        <p></p>
         <label className="labelOutput"
        >reviewed :&nbsp;{reviewed === false ? "No" : "Yes"}
          
        </label>
        <p>&nbsp;</p>
        <button className="submit-form" onClick={submitDataToProjects}>Submit</button>
        <p></p>
        <p className="p">--------&nbsp;Input below this line is for Board Members only&nbsp;--------</p>
        <p>&nbsp;</p>

       
      </form>
    )
}

    export default MyForm;
