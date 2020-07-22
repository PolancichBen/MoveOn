import React from 'react';
import MainPage from './Components/mainPage.jsx';
import Opening from './Components/opening.jsx';
import Move from './Components/move.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: false,
      main: true,
      closing: false,
      
      loggedin: false,
      signedUp: false,
      mainSalary: 100000,
      mainNeg: 50000,
      mainLocation: 35401,
    }
    this.passUpLocalAndSalary = this.passUpLocalAndSalary.bind(this);
  }

  passUpLocalAndSalary(salary,location){
    console.log('Recieved Salary of',salary,'and Location of',location)
    this.setState({
      mainSalary:salary,
      mainLocation: location,
      opening:false,
      main: true,
    })
  }

  render() {
    if (this.state.opening) {
      return (
        <div>
          <Opening sendUpSalAndLocal={this.passUpLocalAndSalary}/>
        </div>
      )
    } else if (this.state.main) {
      return (
        <div>
          <MainPage salary={this.state.mainSalary} location={this.state.mainLocation} negative={this.state.mainNeg} />
        </div>
      )
    } else if (this.main.closing) {
      return (
        <div>
          <Move />
        </div>
      )
    }
  }
}

export default Main;