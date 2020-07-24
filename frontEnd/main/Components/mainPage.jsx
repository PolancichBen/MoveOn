import React from 'react';
import LocalInfo from './Main/localInfo';
import BillsMain from './Main/billsMain';
import RightMain from './Main/rightMain';
import NewExpense from './subComponents/addExpenseForm.jsx'

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
    }
    this.addANewNegative = this.addANewNegative.bind(this);
    this.addANewPositive = this.addANewPositive.bind(this);
    this.handleExpenseSubmission = this.handleExpenseSubmission.bind(this);
    this.handleExpenseChanges = this.handleExpenseChanges.bind(this);
    this.handleMovingOn = this.handleMovingOn.bind(this);
    this.deleteAnExpense = this.deleteAnExpense.bind(this);
  }

  // Need to handle API Calls Here


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
    let toBeSentUp = [this.state.negatives,this.state.postives,this.state.expensesArr,this.state.debitsArr]
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

            <LocalInfo cityName={this.props.mainCityLocation} taxInformation={this.props.taxInformation} schoolInformation={this.props.schoolInformation} crimeLevel={this.props.crimeLevel} localInformation={this.props.localInformation} />
          </div>
          {/* Bills Component */}
          <div className="billsContainer">
            {/* Need to pass down neg and pos expenses */}
            <BillsMain salary={this.state.salary} deleteExpense={this.deleteAnExpense} debits={this.state.postives} negative={this.state.negatives} expensesArr={this.state.expensesArr} debitsArr={this.state.debitsArr} />
          </div>
          {/* Weather, Options, and Move On Component */}
          <div className="rightMainContainer">
            <RightMain moveOn={this.handleMovingOn} addDebit={this.addANewNegative} addCredit={this.addANewPositive} weatherTemp={this.props.weatherTemp} weatherStatus={this.props.weatherStatus} />
          </div>
        </div>
      )
    } else {
      return(
        <NewExpense typeNeg={this.state.addNeg} typePos={this.state.addPos} handleExpenseSubmission={this.handleExpenseSubmission} handleExpenseChanges={this.handleExpenseChanges} />
      )
    }
  }
}

export default MainPage;