import React from 'react';
import MainPage from './Components/mainPage.jsx';
import Opening from './Components/opening.jsx';
import Move from './Components/move.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: false,
      loggedin: false,
      signedUp: false,
      main: true,
      closing: false,
      mainSalary: 100000,
      mainNeg: null,
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
          <MainPage />
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