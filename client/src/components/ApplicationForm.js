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
  const { submit } = props

  function handleChange(e){
    let {name, value, type} = e.target

    if(type === "checkbox"){
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: !prevInputs[name]
          }))
        return;
    }
    
    
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    
  }

  function handleSubmit(e){
    e.preventDefault()
    const parcel = {...inputs};
    // parcel.user= JSON.parse(localStorage.getItem("user"))._id
    // console.log(parcel);
    submit(parcel)
    setInputs(initInputs)
  }

  const { jobTitle, companyName, postingUrl,
     createDate, hasCoverLetter, contactedSomeoneAtCompany,
     comments
     } = inputs
  return (
    <form onSubmit={handleSubmit} id="form">
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
      <div>
        <label htmlFor="hasCoverLetter">Included Cover Letter/Email?</label>
        <input 
          type="checkbox" 
          name="hasCoverLetter" 
          value={hasCoverLetter} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="contactedSomeoneAtCompany">Reached out on LinkedIn?</label>
        <input 
          type="checkbox" 
          name="contactedSomeoneAtCompany" 
          value={contactedSomeoneAtCompany} 
          onChange={handleChange} 
          />
      </div>
      
      <textarea
        name="comments" 
        value={comments} 
        onChange={handleChange} 
        placeholder="Additional Comments">
        
      </textarea>

      <button id="log-button">Log application</button>
    </form>
  )
}