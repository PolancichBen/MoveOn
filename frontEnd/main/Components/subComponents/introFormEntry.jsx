import React from 'react';


const handleSubmit = (event, props) => {
  console.log(event)
  event.preventDefault();

}



const IntroFormEntry = (props) => {
  return (
    <div className="introFormMainContainer">
      <div className="introDescriptor">Submit your Address and Salary Below</div>
      <form onSubmit={() => handleSubmit(event)}>
        <label>
          {/* Location */}
          <div className="introButtonMainContainer">
            <div className="introButtonContainers">
              <input className="introFormInput" onChange={(event) => props.salaryAndLocal(event.target)} type="text" name="location" defaultValue="ZipCode" />
              {/* Salary */}
            </div>
            <div className="introButtonContainers">
              <input className="introFormInput" onChange={(event) => props.salaryAndLocal(event.target)} type="text" name="salary" defaultValue="Salary" />
            </div>
          </div>
        </label>
        <input className="introFormSubmit" onClick={() => props.sendItUp()} type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default IntroFormEntry;