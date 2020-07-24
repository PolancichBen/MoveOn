import React from 'react';
import MainPage from './Components/mainPage.jsx';
import Opening from './Components/opening.jsx';
import Move from './Components/move.jsx';
import axios from 'axios';
import Axios from 'axios';
const preciselyBearer = require('../../config');
var parser = require('parse-address');


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: true,
      main: false,
      closing: false,

      loggedin: false,
      signedUp: false,

      mainSalary: 100000,
      postives: 0,
      mainNeg: 0,

      mainNumberLocation: 618,
      mainStreetLocation: '19th',
      mainTypeLocation: 'Ave',
      mainCityLocation: 'Tuscaloosa',
      mainStateLocation: 'AL',
      mainZipLocation: 35401,

      // weatherStatus: 'Clear',
      // coordinates: { lat: 33.2, lon: -87.56 },
      // temperature: 87,
      // taxInformation: [0.03,0.03,0.04,0.1],
      // schoolInfoArray: [{ distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"},{distance:{value:"0.83547826"}, educationLevel:"M,H", name:"COLLINS-RIVERSIDE MIDDLE SCHOOL"}],
      // crimeLevel: 'Highest',
      // localInformation: ["Average Travel Time (In Minutes) To Work","14.7","Per Household Member Income $","49875",[{value: "0", name: "IN01AGRCX", description: "% Agriculture, Forestry, Fishing And Hunting, And Mining"},{value: "2.27", name: "IN02CNSTCX", description: "% Construction"},{value: "1.92", name: "IN04WTRDCX", description: "% Wholesale Trade"},{value: "11.01", name: "IN05RTRDCX", description: "% Retail Trade"},{value: "0", name: "IN06TRANCX", description: "% Transportation And Warehousing, And Utilities"},{value: "0", name: "IN07INFOCX", description: "% Information"},{value: "6.99", name: "IN08FIRECX", description: "% Finance, Insurance, Real Estate, And Rental And Leasing"},{value: "2.62", name: "IN09PROFCX", description: "% Professional, Scientific, And Management"},{value: "36.71", name: "IN10EDUCCX", description: "% Educational Services, Health Care And Social Assistance"},{value: "26.4", name: "IN11ARTSCX", description: "% Arts, Entertainment, Accommodation And Food Services"},{value: "4.37", name: "IN12OTHSCX", description: "% Other Services, Except Public Administration"},{value: "0", name: "IN13PUBLCX", description: "% Public Administration"}]],
    }
    this.passUpLocalAndSalary = this.passUpLocalAndSalary.bind(this);
    this.moveOn = this.moveOn.bind(this);
    this.startOver = this.startOver.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.downloadAsCSV = this.downloadAsCSV.bind(this);
    // this.getWeather = this.getWeather.bind(this);
    // this.getTaxes = this.getTaxes.bind(this);
    // this.getSchools = this.getSchools.bind(this);
    // this.getCrime = this.getCrime.bind(this);
    // this.getLocalInfo = this.getLocalInfo.bind(this);
    // this.getAllInfo= this.getAllInfo.bind(this);
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
    let parsed = parser.parseLocation(location);
    console.log(parsed)
    if (typeof salaryNum !== 'number' || salary.length === 0 || location.length === 0) {
      alert('Salary Must Be a Number and Location Must be a Full Address (i.e. 888 8th St, mainCityLocation, State, Zipcode')
      this.setState({
        opening: true,
      })
    } else {
      this.setState({
        mainSalary: salaryNum,
        mainZipLocation: parsed.zip,
        mainNumberLocation: parsed.number,
        mainStreetLocation: parsed.street,
        mainTypeLocation: parsed.type,
        mainCityLocation: parsed.city,
        mainStateLocation: parsed.state,
        opening: false,
        main: true,
      })
    }
  }

  // getAllInfo() {
  //   new Promise(()=>{this.getWeather()})
  //     .then(this.getTaxes())
  //     .then(this.getSchools())
  //     .then(this.getCrime())
  //     .then(this.getLocalInfo())
  //     .catch((err) => { console.log('Issue on data intake', err) })
  // }

  // getWeather() { // --> Weather Data API GET --> To Right Main
  //   console.log('Weather Fired') // --> To Right
  //   var app = this;
  //   axios.get('/weather', { params: { zip: app.state.mainZipLocation } })
  //     .then((results) => {
  //       console.log(results)
  //       this.setState({
  //         weatherStatus: results.data.weather[0].main,
  //         coordinates: results.data.coord,
  //         temperature: results.data.main.temp,
  //       })
  //     })
  //     .catch((err) => {
  //       console.log('Issue with Get Req', err)
  //     })
  // }

  getUsers() { // --> DB Req to Get User Data (Not Complete)
    console.log('Users Fired')
    Axios.get('/users')
      .then((results) => {
        console.log(results)
      })
      .catch((err) => {
        console.log('Issue with get users', err)
      })
  }

  // getTaxes() { // --> Taxes Data API GET --> To Local
  //   var app = this;
  //   console.log('Taxes Fired')
  //   Axios.get(`https://api.precisely.com/localtax/v1/taxrate/General/byaddress?address=${parseInt(app.state.mainZipLocation)}`, {
  //     headers: {
  //       Authorization: 'SECRET',
  //     },
  //     body: {
  //       type: 'x-www-form-urlencoded',
  //       Authorization: 'SECRET',
  //     }
  //   })
  //     .then((results) => {
  //       console.log(results)
  //       let bundledTaxInfo = [results.data.useTax.countyTaxRate, results.data.useTax.municipalTaxRate, results.data.useTax.stateTaxRate, results.data.useTax.totalTaxRate]
  //       this.setState({
  //         taxInformation: bundledTaxInfo,
  //       })
  //     })
  //     .catch((err) => { console.log('error in Get taxes Request', err) })
  // }

  // getSchools() { // --> School Data API GET --> To Local
  //   console.log('Schools Fired')
  //   var app = this;
  //   Axios.get(`https://api.precisely.com/schools/v1/school/byaddress?address=${app.state.mainNumberLocation}%20${app.state.mainStreetLocation}%20${app.state.mainTypeLocation}%2C${app.state.mainCityLocation}%2C${app.state.mainStateLocation}%2C${app.state.mainZipLocation}&schoolType=PUB&schoolSubType=R&searchRadius=10&searchRadiusUnit=miles&assignedSchoolsOnly=N&districtSchoolsOnly=N&maxCandidates=5`, {
  //     headers: {
  //       Authorization: 'SECRET',
  //     },
  //     body: {
  //       type: 'x-www-form-urlencoded',
  //       Authorization: 'SECRET',
  //     }
  //   })
  //     .then((results) => {
  //       this.setState({
  //         schoolInfoArray: results.data.school
  //       })
  //     })
  //     .catch((err) => {
  //       console.log('error in getting schools', err)
  //     })
  // }

  // getCrime() { // --> Crime Data API GET --> To Local
  //   var app = this;
  //   console.log('Crime Fired');
  //   Axios.get(`https://api.precisely.com/risks/v1/crime/byaddress?address=${app.state.mainNumberLocation}%20${app.state.mainStreetLocation}%20${app.state.mainTypeLocation}%2C${app.state.mainCityLocation}%2C${app.state.mainStateLocation}%2C${app.state.mainZipLocation}&type=all&includeGeometry=N`, {
  //     headers: {
  //       Authorization: 'SECRET',
  //     },
  //     body: {
  //       type: 'x-www-form-urlencoded',
  //       Authorization: 'SECRET',
  //     }
  //   })
  //     .then((results) => {
  //       console.log(results)
  //       /*
  //       results.data
  //       .themes[0].crimeIndexTheme.indexVariable[0].category //returns string of level of crime
  //       */
  //       this.setState({
  //         crimeLevel: results.data.themes[0].crimeIndexTheme.indexVariable[0].category,
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  // getLocalInfo() { // --> Local Data API GET --> To Local
  //   console.log('Local Info Fired');
  //   Axios.get(`https://api.precisely.com/demographics-segmentation/v1/demographics/byaddress?address=${app.state.mainNumberLocation}%20${app.state.mainStreetLocation}%20${app.state.mainTypeLocation}%2C%20${app.state.mainCityLocation}%2C%20${app.state.mainStateLocation}&country=USA&valueFormat=PercentAsAvailable&variableLevel=Key`, {
  //     headers: {
  //       Authorization: 'SECRET',
  //     },
  //     body: {
  //       type: 'x-www-form-urlencoded',
  //       Authorization: 'SECRET',
  //     }
  //   })
  //     .then((results) => {
  //       //Avg Travel time to work description, Number, Perhousehold Member income Description, number, Arr of Industrys and Percentages
  //       let bundledUpResults = [results.data.themes.employmentTheme.individualValueVariable[2].description, results.data.themes.employmentTheme.individualValueVariable[2].value, results.data.themes.incomeTheme.individualValueVariable[5].description, results.data.themes.incomeTheme.individualValueVariable[5].value, results.data.themes.employmentTheme.rangeVariable[4].field];
  //       this.setState({
  //         localInformation: bundledUpResults,
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  moveOn(arr) { // --> Function to transistion state to Move On
    this.setState({
      main: false,
      postives: arr[1],
      negatives: arr[0],
      posArr: arr[2],
      NegArr: arr[3],
      closing: true,
    })
  }

  startOver(event) { // --> Function to Send Back to Landing Page
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
    } else if (this.state.main) {
      return (
        <div>
          <MainPage
            // getAllInfo={this.getAllInfo}
            moveOn={this.moveOn}
            salary={this.state.mainSalary}
            location={this.state.mainZipLocation}
            negative={this.state.mainNeg}
            postives={this.state.postives}
            mainNumberLocation={this.state.mainNumberLocation}
            mainStateLocation={this.state.mainStateLocation}
            mainStreetLocation={this.state.mainStreetLocation}
            mainTypeLocation={this.state.mainTypeLocation}
            mainCityLocation={this.state.mainCityLocation}
            mainZipLocation={this.state.mainZipLocation}
          // weatherTemp={this.state.temperature}
          // weatherStatus={this.state.weatherStatus}
          // taxInformation={this.state.taxInformation}
          // schoolInformation={this.state.schoolInfoArray}
          // crimeLevel={this.state.crimeLevel}
          // localInformation={this.state.localInformation}
          />
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