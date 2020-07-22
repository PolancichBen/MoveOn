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

      mainSalary: 10,
      postives: 0,

      mainNeg: 0,

      mainLocation: 0,
    }
    this.passUpLocalAndSalary = this.passUpLocalAndSalary.bind(this);
    this.passUpNewPosAndNewNeg = this.passUpNewPosAndNewNeg.bind(this);
  }

  passUpLocalAndSalary(salary,location){
    console.log('Recieved Salary of',salary,'and Location of',location)
    salary = parseInt(salary)
    this.setState({
      mainSalary:salary,
      mainLocation: location,
      opening:false,
      main: true,
    })
  }

  passUpNewPosAndNewNeg(type,amt){
    console.log('Pass up Recieved',type,amt)
    if (type === 'Negative'){
      let newNegative = parseInt(this.state.mainNeg) + amt;
      this.setState({
        negatives: newNegative,
      })
    } else if (type === 'Positive'){
      let newPostive = parseInt(this.state.postives) + amt;
      this.setState({
        postives: newPostive,
      })
    }
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
          <MainPage updatePosAndNeg={this.passUpNewPosAndNewNeg} salary={this.state.mainSalary} location={this.state.mainLocation} negative={this.state.mainNeg} />
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