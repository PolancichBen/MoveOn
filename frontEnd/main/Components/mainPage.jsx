import React from 'react';
import LocalInfo from './Main/localInfo';
import BillsMain from './Main/billsMain';
import RightMain from './Main/rightMain';

class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      salary: this.props.salary,
      location: this.props.location,
      negatives: this.props.negative,
      expensesArr: [],
      debitsArr: [],
    }
  }

  // Need to handle API Calls Here





  render(){
    console.log(this.props)
    return (
      <div className="mainContainer">
        {/* Local Info Component */}
        <div className="localInfoContainer">
        <LocalInfo />
        </div>
        {/* Bills Component */}
        <div className="billsContainer">
          {/* Need to pass down neg and pos expenses */}
        <BillsMain positive={this.state.salary} negative={this.state.negatives} expensesArr={this.state.expensesArr} debitsArr={this.state.debitsArr} />
        </div>
        {/* Weather, Options, and Move On Component */}
        <div className="rightMainContainer">
        <RightMain />
        </div>
      </div>
    )
  }
}

export default MainPage;