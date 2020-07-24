import React from 'react';

const TaxesAndCrime = (props) =>{
  // console.log('Taxes And crime props',props)
  return (
    <div className="taxesAndCrimeMainContainer">
      <div className="taxesAndCrimeTitle">Taxes and Crime Title</div>
      <div className="taxesAndCrimeEach"><span className="taxesAndCrimeName">Total Tax Rate</span><span className="taxesAndCrimePercent"> {props.taxes[3]}</span></div>
      <div className="taxesAndCrimeEach"><span className="taxesAndCrimeName">State Tax Rate</span><span className="taxesAndCrimePercent"> {props.taxes[2]}</span></div>
      <div className="taxesAndCrimeEach"><span className="taxesAndCrimeName">Municipal Tax Rate</span><span className="taxesAndCrimePercent"> {props.taxes[1]}</span></div>
      <div className="taxesAndCrimeEach"><span className="taxesAndCrimeName">County Tax Rate</span><span className="taxesAndCrimePercent"> {props.taxes[0]}</span></div>
      <div className="taxesAndCrimeEach"><span className="taxesAndCrimeName">Crime Rate</span><span className="taxesAndCrimePercent"> {props.crime}</span></div>
    </div>
  )
}

export default TaxesAndCrime;