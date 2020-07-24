import React from 'react';
import MainPage from './Components/mainPage.jsx';
import Opening from './Components/opening.jsx';
import Move from './Components/move.jsx';
import axios from 'axios';
import Axios from 'axios';
import LocalInfo from './Components/Main/localInfo.jsx';
const preciselyBearer = require('../../config');
var parser = require('parse-address');


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: false,
      main: false,
      waiting: true,
      closing: true,
      loggedin: false,
      signedUp: false,
      mainSalary: 100000,
      postives: 0,
      mainNeg: 5000,
      mainZipLocation: 35401,
      weatherStatus: 'Clear',
      coordinates: { lat: 33.2, lon: -87.56 },
      temperature: 87,
      cityName: 'Tuscaloosa',
      taxInformation: [0.03,0.03,0.04,0.1],
      schoolInfoArray: [{ distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"}],
      crimeLevel: 'Highest',
      localInformation: ["Average Travel Time (In Minutes) To Work","14.7","Per Household Member Income $","49875",[{value: "0", name: "IN01AGRCX", description: "% Agriculture, Forestry, Fishing And Hunting, And Mining"},{value: "2.27", name: "IN02CNSTCX", description: "% Construction"},{value: "1.92", name: "IN04WTRDCX", description: "% Wholesale Trade"},{value: "11.01", name: "IN05RTRDCX", description: "% Retail Trade"},{value: "0", name: "IN06TRANCX", description: "% Transportation And Warehousing, And Utilities"},{value: "0", name: "IN07INFOCX", description: "% Information"},{value: "6.99", name: "IN08FIRECX", description: "% Finance, Insurance, Real Estate, And Rental And Leasing"},{value: "2.62", name: "IN09PROFCX", description: "% Professional, Scientific, And Management"},{value: "36.71", name: "IN10EDUCCX", description: "% Educational Services, Health Care And Social Assistance"},{value: "26.4", name: "IN11ARTSCX", description: "% Arts, Entertainment, Accommodation And Food Services"},{value: "4.37", name: "IN12OTHSCX", description: "% Other Services, Except Public Administration"},{value: "0", name: "IN13PUBLCX", description: "% Public Administration"}]],
    }
    this.passUpLocalAndSalary = this.passUpLocalAndSalary.bind(this);
    this.passUpNewPosAndNewNeg = this.passUpNewPosAndNewNeg.bind(this);
    this.moveOn = this.moveOn.bind(this);
    this.startOver = this.startOver.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.downloadAsCSV = this.downloadAsCSV.bind(this);
    this.deleteAnExpense = this.deleteAnExpense.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getTaxes = this.getTaxes.bind(this);
    this.getSchools = this.getSchools.bind(this);
    this.getCrime = this.getCrime.bind(this);
    this.getLocalInfo = this.getLocalInfo.bind(this);
    this.getAllInfo= this.getAllInfo.bind(this);
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
    if (typeof salaryNum !== 'number' || typeof locationNum !== 'number' || salary.length === 0 || location.length !== 5) {
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

  getAllInfo() {
    new Promise(()=>{this.getWeather()})
      .then(this.getTaxes())
      .then(this.getSchools())
      .then(this.getCrime())
      .then(this.getLocalInfo())
      .then(
        this.setState({
          waiting: false,
        })
      )
      .catch((err) => { console.log('Issue on data intake', err) })
  }

  getWeather() {
    console.log('Weather Fired') // --> To Right
    let app = this;
    axios.get('/weather', { params: { zip: app.state.mainZipLocation } })
      .then((results) => {
        console.log(results)
        this.setState({
          weatherStatus: results.data.weather[0].main,
          coordinates: results.data.coord,
          temperature: results.data.main.temp,
          cityName: results.data.name,
        })
      })
      .catch((err) => {
        console.log('Issue with Get Req', err)
      })
  }

  getUsers() {
    console.log('Users Fired')
    Axios.get('/users')
      .then((results) => {
        console.log(results)
      })
      .catch((err) => {
        console.log('Issue with get users', err)
      })
  }

  getTaxes() { //--> To Local
    let app = this;
    console.log('Taxes Fired')
    'https://api.precisely.com/localtax/v1/taxrate/General/byaddress?address=35401'
    Axios.get(`https://api.precisely.com/localtax/v1/taxrate/General/byaddress?address=${parseInt(app.state.mainZipLocation)}`, {
      headers: {
        Authorization: 'Secret',
      },
      body: {
        type: 'x-www-form-urlencoded',
        Authorization: 'Secret',
      }
    })
      .then((results) => {
        console.log(results)
        /*
          results.data
          .useTax
            .countyTaxRate
            .municipalTaxRate
            .stateTaxRate
            .totalTaxRate
        */
        let bundledTaxInfo = [results.data.useTax.countyTaxRate, results.data.useTax.municipalTaxRate, results.data.useTax.stateTaxRate, results.data.useTax.totalTaxRate]
        this.setState({
          taxInformation: bundledTaxInfo,
        })
      })
      .catch((err) => { console.log('error in Get taxes Request', err) })
  }

  getSchools() { // --> To Local
    let parsed = parser.parseLocation('618 19th Ave, Tuscaloosa, AL, 35401');
    console.log('Schools Fired');
    Axios.get(`https://api.precisely.com/schools/v1/school/byaddress?address=${parsed.number}%20${parsed.street}%20${parsed.type}%2C${parsed.city}%2C${parsed.state}%2C${parsed.zip}&schoolType=PUB&schoolSubType=R&searchRadius=10&searchRadiusUnit=miles&assignedSchoolsOnly=N&districtSchoolsOnly=N&maxCandidates=5`, {
      headers: {
        Authorization: 'Secret',
      },
      body: {
        type: 'x-www-form-urlencoded',
        Authorization: 'Secret',
      }
    })
      .then((results) => {
        /*
          results.data
          .school = array of objects schools
          [0]
          .name = school name
          .educationLevel (E,M,H)
          .distance.value = num of miles
        */
        this.setState({
          schoolInfoArray: results.data.school
        })
      })
      .catch((err) => {
        console.log('error in getting schools', err)
      })
  }

  getCrime() { // --> To Local
    let parsed = parser.parseLocation('618 19th Ave, Tuscaloosa, AL, 35401');
    console.log('Crime Fired');
    Axios.get(`https://api.precisely.com/risks/v1/crime/byaddress?address=${parsed.number}%20${parsed.street}%20${parsed.type}%2C${parsed.city}%2C${parsed.state}%2C${parsed.zip}&type=all&includeGeometry=N`, {
      headers: {
        Authorization: 'Secret',
      },
      body: {
        type: 'x-www-form-urlencoded',
        Authorization: 'Secret',
      }
    })
      .then((results) => {
        console.log(results)
        /*
        results.data
        .themes[0].crimeIndexTheme.indexVariable[0].category //returns string of level of crime
        */
        this.setState({
          crimeLevel: results.data.themes[0].crimeIndexTheme.indexVariable[0].category,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getLocalInfo() { // --> To Local
    let parsed = parser.parseLocation('618 19th Ave, Tuscaloosa, AL, 35401');
    console.log('Local Info Fired');
    Axios.get(`https://api.precisely.com/demographics-segmentation/v1/demographics/byaddress?address=${parsed.number}%20${parsed.street}%20${parsed.type}%2C%20${parsed.city}%2C%20${parsed.state}&country=USA&valueFormat=PercentAsAvailable&variableLevel=Key`, {
      headers: {
        Authorization: 'Secret',
      },
      body: {
        type: 'x-www-form-urlencoded',
        Authorization: 'Secret',
      }
    })
      .then((results) => {
        /*
        results.data
        .themes
          .employmentTheme.individualValueVariable[2].description === string 'AVG TRAVEL TIME TO WORK'
          .employmentTheme.individualValueVariable[2].value === Number 'AVG TRAVEL TIME TO WORK'
          .incomeTheme.individualValueVariable[5].description === string 'Per Household Member Income $'
          .incomeTheme.individualValueVariable[5].value === Number 'Per Household Member Income $'
          .employmentTheme.rangeVariable[4].field === ARRAY of Industrys and percentages
        */
        //Avg Travel time to work description, Number, Perhousehold Member income Description, number, Arr of Industrys and Percentages
        let bundledUpResults = [results.data.themes.employmentTheme.individualValueVariable[2].description, results.data.themes.employmentTheme.individualValueVariable[2].value, results.data.themes.incomeTheme.individualValueVariable[5].description, results.data.themes.incomeTheme.individualValueVariable[5].value, results.data.themes.employmentTheme.rangeVariable[4].field];
        this.setState({
          localInformation: bundledUpResults,
        })
      })
      .catch((err) => {
        console.log(err)
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

  deleteAnExpense(info) { //not done
    console.log('Delete an Expenses', info)
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
        <div className="openingMain">
          <Opening sendUpSalAndLocal={this.passUpLocalAndSalary} />
        </div>
      )
    } else if (this.state.main && this.state.waiting === false) {
      return (
        <div>
          <MainPage
            getAllInfo={this.getAllInfo}
            moveOn={this.moveOn}
            deleteExpense={this.deleteAnExpense}
            updatePosAndNeg={this.passUpNewPosAndNewNeg}
            salary={this.state.mainSalary}
            location={this.state.mainZipLocation}
            negative={this.state.mainNeg}
            cityName={this.state.cityName}
            weatherTemp={this.state.temperature}
            weatherStatus={this.state.weatherStatus}
            taxInformation={this.state.taxInformation}
            schoolInformation={this.state.schoolInfoArray}
            crimeLevel={this.state.crimeLevel}
            localInformation={this.state.localInformation}
          />
        </div>
      )
    } else if (this.state.main && this.state.waiting === true){
      this.getAllInfo()
      return(
        <div>
          standby
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