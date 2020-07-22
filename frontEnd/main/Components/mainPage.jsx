import React from 'react';
import LocalInfo from './Main/localInfo';
import BillsMain from './Main/billsMain';
import RightMain from './Main/rightMain';

class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <div className="mainContainer">
        {/* Local Info Component */}
        <div className="localInfoContainer">
        <LocalInfo />
        </div>
        {/* Bills Component */}
        <div className="billsContainer">
          {/* Need to pass down neg and pos expenses */}
        <BillsMain />
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