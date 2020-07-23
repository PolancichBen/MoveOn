import React from 'react';

const TaxesAndCrime = (props) =>{
  console.log('Taxes And crime props',props)
  return (
    <div>
      <div>Taxes and Crime Title</div>
      <div><span>Total Tax Rate</span><span>{props.taxes[3]}</span></div>
      <div><span>State Tax Rate</span><span>{props.taxes[2]}</span></div>
      <div><span>Municipal Tax Rate</span><span>{props.taxes[1]}</span></div>
      <div><span>County Tax Rate</span><span>{props.taxes[0]}</span></div>
      <div><span>Crime Rate</span><span>{props.crime}</span></div>
    </div>
  )
}

export default TaxesAndCrime;