import React from 'react';
import MainPage from './Components/mainPage.jsx';
import Opening from './Components/opening.jsx';
import Move from './Components/move.jsx';
import axios from 'axios';


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

      mainZipLocation: 35401,
      weatherStatus: 'Clear',
      coordinates: {lat: 33.2 ,lon: -87.56},
      temperature: 87,
      cityName: 'Tuscaloosa',
    }
    this.passUpLocalAndSalary = this.passUpLocalAndSalary.bind(this);
    this.passUpNewPosAndNewNeg = this.passUpNewPosAndNewNeg.bind(this);
    this.moveOn = this.moveOn.bind(this);
    this.startOver = this.startOver.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.downloadAsCSV = this.downloadAsCSV.bind(this);
    this.deleteAnExpense = this.deleteAnExpense.bind(this);
  }

  //////////////////////////////////////////////////
// HOW TO QUERY FOR IMAGES
  //////////////////////////////////////////////////
  // getPicture(search){
  //   const client = createClient('563492ad6f91700001000001f4f74e2fca2a4d7197bf0e5806adb3ae')
  //   const query = search;

  //   client.photos.search({query, per_page:1})
  //   .then(photos=>{
  //     console.log(photos)
  //   })
  // }
//////////////////////////////////////////////////////////////////////////

  passUpLocalAndSalary(salary, location) {
    let salaryNum = Number(salary);
    let locationNum = Number(location);
    if (typeof salaryNum !== 'number' || typeof locationNum !== 'number'|| salary.length === 0 || location.length !== 5) {
      alert('Salary Must Be a Number and Location Must be a Zip Code must be a number of Five digits long')
      this.setState({
        opening: true,
      })
    } else {
      this.setState({
        mainSalary: salaryNum,
        mainZipLocation: locationNum,
        opening: false,
        main: true,
      })
    }
    this.getWeather();
  }

  getWeather(){
    let app = this;
    axios.get('/weather',{params:{zip: app.state.mainZipLocation}})
    .then((results)=>{
      console.log('Client Recieved!',results)
      this.setState({
        weatherStatus: results.data.weather[0].main,
        coordinates: results.data.coord,
        temperature: results.data.main.temp,
        cityName: results.data.name,
      })
    })
    .catch((err)=>{
      console.log('Issue with Get Req',err)
    })
  }

  passUpNewPosAndNewNeg(type, amt) {
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
      mainZipLocation: null,
      postives: 0,
    })
  }

  deleteAnExpense(info){ //not done
    console.log('Delete an Expenses',info)
  }
  
  changeLocation(event) { //not done
    console.log('Changing Location!')
    // Handle form to chnage Location
  }

  downloadAsCSV(event) { //not done
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
      this.getWeather()
      return (
        <div>
          <MainPage moveOn={this.moveOn} deleteExpense={this.deleteAnExpense} updatePosAndNeg={this.passUpNewPosAndNewNeg} salary={this.state.mainSalary} location={this.state.mainZipLocation} negative={this.state.mainNeg} cityName={this.state.cityName} weatherTemp={this.state.temperature} weatherStatus={this.state.weatherStatus} />
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