// import React, { useState } from "react"
// import { useContext } from "react"
// import { appContext } from "../App"
// import MyForm from "./myForm"
// import reactLogo from '../assets/react.svg'
// import './navbar.css'
// import {GiHouse} from "react-icons/all"
// import { useEffect } from "react";
  
  
//   // const Proposals = (props) => {
//   // let displayProposalsArray;

//   // const handleProposalSubmit = (e) => {
//   //   e.preventDefault();
//   //   const update = {firstName, lastName, city, stateName, email, phoneNumber, communityName, userProposal};
//   //   console.log(update);
//   //   fetch('http://localhost:8007/proposals', {
//   //     method: 'POST',
//   //     headers: {'Content-Type': 'application/json'},
//   //     body: JSON.stringify(update);
//   //   })
//   //   .then(() => {
//   //     console.log('new item added');
//   //   })
//   // }
  
    
//   // var handleGetProposalClick = () =>{
//   //   if(displayProposalsStatus === true){
//   //     setDisplayProposalStatus(false);
//   //     console.log(displayProposalsStatus);
//   //     console.log("true");
//   //     console.log("proposals is set to display data");


//   //   }else{
//   //     setDisplayProposalStatus(true);
//   //     console.log("false");
//   //     console.log("proposals remove data");
//   //   }

//   // }


// return(
// <div>
// <form>
//       <p className="inputRequest">Please fill in the fields below</p>
//       <p></p>
//         <label className="label"
//         >First name :&nbsp;
//           <input className="input-field" type="text" 
//           id="firstNameInput"
//           value={ownerFirstName}
//           onChange={(e) => setOwnerFirstName(e.target.value)} 
//           />
//         </label>
//         <p></p>
//         <label className="label"
//         >Last name :&nbsp;
//           <input className="input-field" type="text" 
//           id="lastNameInput"
//           value={ownerLastName}
//           onChange={(e) => setOwnerLastName(e.target.value)} 
//           />
//         </label>
//         <p></p>
//         <label className="label"
//         >City :&nbsp;
//           <input className="input-field" type="text" 
//           id="cityInput"
//           value={city}
//           onChange={(e) => setCity(e.target.value)} 
//           />
//         </label>
//         <p></p>
//         <label className="label"
//         >state :&nbsp;
//           <input className="input-field" type="text" 
//           id="stateInput"
//           value={stateName}
//           onChange={(e) => setStateName(e.target.value)} 
//           />
//         </label>
//         <p></p>
//         <label className="label"
//         >Email :&nbsp;
//           <input className="input-field" type="text" 
//           id="emailInput"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} 
//           />
//         </label>
//         <p></p>
//         <label className="label"
//         >Phone number :&nbsp;
//           <input className="input-field" type="text" 
//           id="phoneNumberInput"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNUmber(e.target.value)} 
//           />
//         </label>
//         <p></p>
//         <label className="label"
//         >Community :&nbsp;
//           <input className="input-field" type="text" 
//           id="communityNameInput"
//           value={communityName}
//           onChange={(e) => setCommunityName(e.target.value)} 
//           />
//         </label>
//         <p></p>
//         <label className="label"
//         >Proposal / Concern :&nbsp;
//           <input className="input-field" type="text" 
//           id="proposalInput"
//           value={proposalConcern}
//           onChange={(e) => setProposalConcern(e.target.value)} 
//           />
//         </label>
//         <p></p>
//          <label className="labelOutput"
//         >reviewed :&nbsp;{reviewed === false ? "No" : "Yes"}
          
//         </label>
//         <p>&nbsp;</p>
//         <button className="submit-form" onClick={submitDataToProjects}>Submit</button>
//         <p></p>
//         <p className="p">--------&nbsp;Input below this line is for Board Members only&nbsp;--------</p>
//         <p>&nbsp;</p>

       
//       </form>
//             </div>

// )
//         }

//         export default Proposals;