import React, { useState } from 'react'

const initInputs = {
  jobTitle: "",
  companyName: "",
  postingUrl: "",
  createDate: "",
  hasCoverLetter: false,
  contactedSomeoneAtCompany: false, 
  comments: "" 
}

export default function ApplicationForm(props){
  const [inputs, setInputs] = useState(initInputs)
//   const { addIssue } = props

  function handleChange(e){
    let {name, value, type} = e.target

    if(type === "checkbox"){
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: !prevInputs[name]
          }))
        console.log(name, inputs[name])
        return;
    }
    
    
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    console.log(inputs[name])
  }

  function handleSubmit(e){
    e.preventDefault()
    // const parcel = {...inputs};
    // parcel.authorName= JSON.parse(localStorage.getItem("user")).username
    // addIssue(parcel)
    setInputs(initInputs)
  }

  const { jobTitle, companyName, postingUrl,
     createDate, hasCoverLetter, contactedSomeoneAtCompany,
     comments
     } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="jobTitle" 
        value={jobTitle} 
        onChange={handleChange} 
        placeholder="Job Title"/>
      <input 
        type="text" 
        name="companyName" 
        value={companyName} 
        onChange={handleChange} 
        placeholder="companyName"/>
      <input 
        type="text" 
        name="postingUrl" 
        value={postingUrl} 
        onChange={handleChange} 
        placeholder="Url of Posting"/>
      <input 
        type="date" 
        name="createDate" 
        value={createDate} 
        onChange={handleChange} 
        placeholder="Application date"/>
      <label htmlFor="hasCoverLetter">Included Cover Letter/Email?</label>
      <input 
        type="checkbox" 
        name="hasCoverLetter" 
        value={hasCoverLetter} 
        onChange={handleChange} 
        />
      <label htmlFor="contactedSomeoneAtCompany">Contacted Someone at Company?</label>
      <input 
        type="checkbox" 
        name="contactedSomeoneAtCompany" 
        value={contactedSomeoneAtCompany} 
        onChange={handleChange} 
        />
      <textarea
        name="comments" 
        rows="4"
        value={comments} 
        onChange={handleChange} 
        placeholder="Additional Comments">
        
      </textarea>

      <button>Log application</button>
    </form>
  )
}