import React from 'react';
import LocalInfo from './Main/localInfo';
import BillsMain from './Main/billsMain';
import RightMain from './Main/rightMain';
import NewExpense from './subComponents/addExpenseForm.jsx'
import axios from 'axios';
import Axios from 'axios';
import 'regenerator-runtime/runtime';
var parser = require('parse-address');

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      salary: this.props.salary,
      location: this.props.location,
      negatives: this.props.negative,
      postives: this.props.postives,
      expensesArr: [['Salary', this.props.salary]],
      debitsArr: [],
      addNeg: false,
      addPos: false,
      expenseToBeAdded: 0,
      expenseToBeAddedName: null,

      weatherStatus: 'Clear',
      coordinates: { lat: 33.2, lon: -87.56 },
      temperature: 87,
      taxInformation: [0.03, 0.03, 0.04, 0.1],
      schoolInfoArray: [{ distance: { value: "0.83547826" }, educationLevel: "M", name: "COLLINS-RIVERSIDE MIDDLE SCHOOL" }, { distance: { value: "1.12" }, educationLevel: "E", name: "MATTHEWS ELEMENTARY SCHOOL" }, { distance: { value: "1.53" }, educationLevel: "H", name: "CENTRAL HIGH SCHOOL" }, { distance: { value: "2.54" }, educationLevel: "E", name: "CENTRAL ELEMENTARY SCHOOL" }, { distance: { value: "3.63" }, educationLevel: "E", name: "MARTIN LUTHER KING JR. ELEMENTARY SCHOOL" }],
      crimeLevel: 'Highest',
      localInformation: ["Average Travel Time (In Minutes) To Work", "14.7", "Per Household Member Income $", "49875", [{ value: "0", name: "IN01AGRCX", description: "% Agriculture, Forestry, Fishing And Hunting, And Mining" }, { value: "2.27", name: "IN02CNSTCX", description: "% Construction" }, { value: "1.92", name: "IN04WTRDCX", description: "% Wholesale Trade" }, { value: "11.01", name: "IN05RTRDCX", description: "% Retail Trade" }, { value: "0", name: "IN06TRANCX", description: "% Transportation And Warehousing, And Utilities" }, { value: "0", name: "IN07INFOCX", description: "% Information" }, { value: "6.99", name: "IN08FIRECX", description: "% Finance, Insurance, Real Estate, And Rental And Leasing" }, { value: "2.62", name: "IN09PROFCX", description: "% Professional, Scientific, And Management" }, { value: "36.71", name: "IN10EDUCCX", description: "% Educational Services, Health Care And Social Assistance" }, { value: "26.4", name: "IN11ARTSCX", description: "% Arts, Entertainment, Accommodation And Food Services" }, { value: "4.37", name: "IN12OTHSCX", description: "% Other Services, Except Public Administration" }, { value: "0", name: "IN13PUBLCX", description: "% Public Administration" }]],
    }
    this.addANewNegative = this.addANewNegative.bind(this);
    this.addANewPositive = this.addANewPositive.bind(this);
    this.handleExpenseSubmission = this.handleExpenseSubmission.bind(this);
    this.handleExpenseChanges = this.handleExpenseChanges.bind(this);
    this.handleMovingOn = this.handleMovingOn.bind(this);
    this.deleteAnExpense = this.deleteAnExpense.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getTaxes = this.getTaxes.bind(this);
    this.getSchools = this.getSchools.bind(this);
    this.getCrime = this.getCrime.bind(this);
    this.getLocalInfo = this.getLocalInfo.bind(this);
    this.getAllInfo = this.getAllInfo.bind(this);
  }

  // Need to handle API Calls Here

  componentDidMount() {
    this.getAllInfo()
  }

  getAllInfo() {
    new Promise(() => { this.getWeather() })
      .then(this.getTaxes())
      .then(this.getSchools())
      .then(this.getCrime())
      .then(this.getLocalInfo())
      .catch((err) => { console.log('Issue on data intake', err) })
  }

  async getTaxes() { // --> Taxes Data API GET --> To Local
    var app = this;
    console.log('Taxes Fired')
    await Axios.get(`https://api.precisely.com/localtax/v1/taxrate/General/byaddress?address=${parseInt(app.props.mainZipLocation)}`, {
      headers: {
        Authorization: 'SECRET',
        // 'Access-Control-Allow-Origin': '*'
      },
      body: {
        'Access-Control-Allow-Origin': '*',
        type: 'x-www-form-urlencoded',
        Authorization: 'SECRET',
      }
    })
      .then((results) => {
        console.log(results)
        let bundledTaxInfo = [results.data.useTax.countyTaxRate, results.data.useTax.municipalTaxRate, results.data.useTax.stateTaxRate, results.data.useTax.totalTaxRate]
        this.setState({
          taxInformation: bundledTaxInfo,
        })
      })
      .catch((err) => { console.log('error in Get taxes Request', err) })
  }

  async getSchools() { // --> School Data API GET --> To Local
    console.log('Schools Fired')
    var app = this;
    await Axios.get(`https://api.precisely.com/schools/v1/school/byaddress?address=${app.props.mainNumberLocation}%20${app.props.mainStreetLocation}%20${app.props.mainTypeLocation}%2C${app.props.mainCityLocation}%2C${app.props.mainStateLocation}%2C${app.props.mainZipLocation}&schoolType=PUB&schoolSubType=R&searchRadius=10&searchRadiusUnit=miles&assignedSchoolsOnly=N&districtSchoolsOnly=N&maxCandidates=5`, {
      headers: {
        Authorization: 'SECRET',
        // 'Access-Control-Allow-Origin': '*'
      },
      body: {
        'Access-Control-Allow-Origin': '*',
        type: 'x-www-form-urlencoded',
        Authorization: 'SECRET',
      }
    })
      .then((results) => {
        this.setState({
          schoolInfoArray: results.data.school
        })
      })
      .catch((err) => {
        console.log('error in getting schools', err)
      })
  }

  async getCrime() { // --> Crime Data API GET --> To Local
    var app = this;
    console.log('Crime Fired');
    await Axios.get(`https://api.precisely.com/risks/v1/crime/byaddress?address=${app.props.mainNumberLocation}%20${app.props.mainStreetLocation}%20${app.props.mainTypeLocation}%2C${app.props.mainCityLocation}%2C${app.props.mainStateLocation}%2C${app.props.mainZipLocation}&type=all&includeGeometry=N`, {
      headers: {
        Authorization: 'SECRET',
        // 'Access-Control-Allow-Origin': '*'
      },
      body: {
        'Access-Control-Allow-Origin': '*',
        type: 'x-www-form-urlencoded',
        Authorization: 'SECRET',
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

  async getLocalInfo() { // --> Local Data API GET --> To Local
    console.log('Local Info Fired');
    var app = this;
    await Axios.get(`https://api.precisely.com/demographics-segmentation/v1/demographics/byaddress?address=${app.props.mainNumberLocation}%20${app.props.mainStreetLocation}%20${app.props.mainTypeLocation}%2C%20${app.props.mainCityLocation}%2C%20${app.props.mainStateLocation}&country=USA&valueFormat=PercentAsAvailable&variableLevel=Key`, {
      headers: {
        Authorization: 'SECRET',
        // 'Access-Control-Allow-Origin': '*'
      },
      body: {
        'Access-Control-Allow-Origin': '*',
        type: 'x-www-form-urlencoded',
        Authorization: 'SECRET',
      }
    })
      .then((results) => {
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

  async getWeather() { // --> Weather Data API GET --> To Right Main
    console.log('Weather Fired') // --> To Right
    var app = this;
    await axios.get('/weather', { params: { zip: app.props.mainZipLocation } })
      .then((results) => {
        this.setState({
          weatherStatus: results.data.weather[0].main,
          coordinates: results.data.coord,
          temperature: results.data.main.temp,
        })
      })
      .catch((err) => {
        console.log('Issue with Get Req', err)
      })
  }

  addANewNegative(info) {
    this.setState({
      addNeg: true
    })
  }

  addANewPositive(info) {
    this.setState({
      addPos: true
    })
  }

  handleExpenseChanges(info) {
    if (info.name === "name") {
      this.setState({
        expenseToBeAddedName: info.value
      })
    } if (info.name === "creditAmt" || info.name === "debitAmt") {
      this.setState({
        expenseToBeAdded: info.value
      })
    }
  }

  deleteAnExpense(type, amt, index) { //not done
    //need to get type
    if (type === 'Positive') {
      if (this.state.expensesArr.length === 1) {
        var newExpensesArr = [];
      } else {
        let beginning = this.state.expensesArr.slice(0, index)
        let end = this.state.expensesArr.slice(index + 1)
        var newExpensesArr = beginning.concat(end)
      }
      let newPositive = parseInt(this.state.postives) - parseInt(amt);
      this.setState({
        postives: newPositive,
        expensesArr: newExpensesArr
      })
    } else if (type === 'Negative') {
      if (this.state.debitsArr === 1) {
        var newDebitsArr = []
      } else {
        let beginning = this.state.debitsArr.slice(0, index);
        let end = this.state.debitsArr.slice(index + 1)
        var newDebitsArr = beginning.concat(end)
      }
      let newNegative = parseInt(amt) - parseInt(this.state.negatives)
      this.setState({
        negatives: newNegative,
        debitsArr: newDebitsArr
      })
    }
  }

  handleExpenseSubmission(event, info) {
    event.preventDefault()
    if (info === 'Positive') {
      let newPostiveAmt = parseInt(this.state.postives) + parseInt(this.state.expenseToBeAdded);
      let buildingNewPositiveArr = this.state.expensesArr.concat([[this.state.expenseToBeAddedName, parseInt(this.state.expenseToBeAdded)]]);
      this.setState({
        postives: newPostiveAmt,
        expensesArr: buildingNewPositiveArr,
        addPos: false
      })
    } else if (info === 'Negative') {
      let newNegativeAmt = parseInt(this.state.negatives) + parseInt(this.state.expenseToBeAdded);
      let buildingNewNegativeArr = this.state.debitsArr.concat([[this.state.expenseToBeAddedName, parseInt(this.state.expenseToBeAdded)]])
      this.setState({
        negatives: newNegativeAmt,
        debitsArr: buildingNewNegativeArr,
        addNeg: false
      })
    }
  }

  handleMovingOn(event) {
    let toBeSentUp = [this.state.negatives, this.state.postives, this.state.expensesArr, this.state.debitsArr]
    event.preventDefault();
    //pass up new pos and neg values
    // this.props.updatePosAndNeg(info,newPostiveAmt)
    this.props.moveOn(toBeSentUp);
  }

  render() {
    if (this.state.addNeg === false && this.state.addPos === false) {
      return (
        <div className="mainContainer">
          {/* Local Info Component */}
          <div className="localInfoContainer">
            <LocalInfo cityName={this.props.mainCityLocation} taxInformation={this.state.taxInformation} schoolInformation={this.state.schoolInfoArray} crimeLevel={this.state.crimeLevel} localInformation={this.state.localInformation} />
          </div>
          {/* Bills Component */}
          <div className="billsContainer">
            {/* Need to pass down neg and pos expenses */}
            <BillsMain salary={this.state.salary} deleteExpense={this.deleteAnExpense} debits={this.state.postives} negative={this.state.negatives} expensesArr={this.state.expensesArr} debitsArr={this.state.debitsArr} />
          </div>
          {/* Weather, Options, and Move On Component */}
          <div className="rightMainContainer">
            <RightMain moveOn={this.handleMovingOn} addDebit={this.addANewNegative} addCredit={this.addANewPositive} weatherTemp={this.state.temperature} weatherStatus={this.state.weatherStatus} />
          </div>
        </div>
      )
    } else {
      return (
        <NewExpense typeNeg={this.state.addNeg} typePos={this.state.addPos} handleExpenseSubmission={this.handleExpenseSubmission} handleExpenseChanges={this.handleExpenseChanges} />
      )
    }
  }
}

export default MainPage;