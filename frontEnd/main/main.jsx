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
      postives: 0,

      mainNeg: 5000,

      mainLocation: 0,
    }
    this.passUpLocalAndSalary = this.passUpLocalAndSalary.bind(this);
    this.passUpNewPosAndNewNeg = this.passUpNewPosAndNewNeg.bind(this);
    this.moveOn = this.moveOn.bind(this);
    this.startOver = this.startOver.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.downloadAsCSV = this.downloadAsCSV.bind(this);
  }

  passUpLocalAndSalary(salary, location) {
    console.log('Recieved Salary of', salary, 'and Location of', location)
    console.log( typeof salary,typeof location)
    let salaryNum = Number(salary)
    let locationNum = Number(location)
    if (typeof salaryNum !== 'number' || typeof locationNum !== 'number'|| salary.length === 0 || location.length === 0 || location.length !== 5) {
      alert('Salary Must Be a Number and Location Must be a Zip Code must be a number of Five digits long')
      this.setState({
        opening: true,
      })
    } else {
      this.setState({
        mainSalary: salaryNum,
        mainLocation: locationNum,
        opening: false,
        main: true,
      })
    }
  }

  passUpNewPosAndNewNeg(type, amt) {
    console.log('Pass up Recieved', type, amt)
    if (type === 'Negative') {
      let newNegative = parseInt(this.state.mainNeg) + amt;
      this.setState({
        negatives: newNegative,
      })
    } else if (type === 'Positive') {
      let newPostive = parseInt(this.state.postives) + amt;
      this.setState({
        postives: newPostive,
      })
    }
  }

  moveOn(event) {
    console.log('Main App recieved Move On req')
    this.setState({
      main: false,
      closing: true,
    })
  }

  startOver(event) {
    console.log('Starting Over!')
    this.setState({
      closing: false,
      opening: true,
      mainSalary: 0,
      mainNeg: 0,
      mainLocation: null,
      postives: 0,
    })
  }

  changeLocation(event) {
    console.log('Changing Location!')
    // Handle form to chnage Location
  }

  downloadAsCSV(event) {
    console.log('Downloading as CSV!')
    // Handle functionality to Downlad as CSV
  }

  render() {
    if (this.state.opening) {
      return (
        <div>
          <Opening sendUpSalAndLocal={this.passUpLocalAndSalary} />
        </div>
      )
    } else if (this.state.main) {
      return (
        <div>
          <MainPage moveOn={this.moveOn} updatePosAndNeg={this.passUpNewPosAndNewNeg} salary={this.state.mainSalary} location={this.state.mainLocation} negative={this.state.mainNeg} />
        </div>
      )
    } else if (this.state.closing) {
      return (
        <div>
          <Move startOver={this.startOver} changeLocal={this.changeLocation} cSV={this.downloadAsCSV} />
        </div>
      )
    }
  }
}

export default Main;