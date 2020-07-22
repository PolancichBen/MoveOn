import React from 'react';


const handleSubmit = (event,props) =>{
  console.log(event)
  event.preventDefault();
 
}



const IntroFormEntry = (props) =>{
  return (
    <div>
      IntroFormEntry Go!
      <form onSubmit={()=>handleSubmit(event)}>
        <label>
      {/* Location */}
          <input onChange={(event)=>props.salaryAndLocal(event.target)} type="text" name="location" defaultValue="ZipCode"/>
      {/* Salary */}
          <input onChange={(event)=>props.salaryAndLocal(event.target)} type="text" name="salary" defaultValue="Salary"/>
        </label>
        <input onClick={()=>props.sendItUp()} type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default IntroFormEntry;