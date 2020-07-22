import React from 'react';
import LocalInfo from './Main/localInfo';
import BillsMain from './Main/billsMain';
import RightMain from './Main/rightMain';

class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      salary: this.props.salary,
      location: this.props.location,
      negatives: this.props.negative,
      postives: 0,
      expensesArr: [['Salary',this.props.salary]],
      debitsArr: [],
      addNeg:false,
      addPos:false,
      expenseToBeAdded: 0,
      expenseToBeAddedName: null,
    }
    this.addANewNegative = this.addANewNegative.bind(this);
    this.addANewPositive = this.addANewPositive.bind(this);
    this.handleExpenseSubmission = this.handleExpenseSubmission.bind(this);
    this.handleExpenseChanges= this.handleExpenseChanges.bind(this);
    this.handleMovingOn = this.handleMovingOn.bind(this)
  }

  // Need to handle API Calls Here

  addANewNegative(info){ this.setState({ addNeg:true }) }
  addANewPositive(info){ this.setState({ addPos:true }) }

  handleExpenseChanges(info){
    if (info.name === "name"){
      this.setState({
        expenseToBeAddedName: info.value
      })
    } if (info.name === "creditAmt" || info.name === "debitAmt"){
      this.setState({
        expenseToBeAdded: info.value
      })
    }
  }

  handleExpenseSubmission(event,info){
    event.preventDefault()
    if (info === 'Positive'){
      let newPostiveAmt = parseInt(this.state.postives) + parseInt(this.state.expenseToBeAdded);
      let buildingNewPositiveArr = this.state.debitsArr.concat([[this.state.expenseToBeAddedName,parseInt(this.state.expenseToBeAdded)]]);
      this.setState({
        postives: newPostiveAmt,
        debitsArr:buildingNewPositiveArr,
        addPos:false
      })
      this.props.updatePosAndNeg(info,newPostiveAmt)
    } else if (info === 'Negative'){
      let newNegativeAmt = parseInt(this.state.negatives) + parseInt(this.state.expenseToBeAdded);
      let buildingNewNegativeArr =this.state.expensesArr.concat([[this.state.expenseToBeAddedName,parseInt(this.state.expenseToBeAdded)]])
      this.setState({
        negatives: newNegativeAmt,
        expensesArr:buildingNewNegativeArr,
        addNeg:false
      })
      this.props.updatePosAndNeg(info,newNegativeAmt)
    }
  }

  handleMovingOn(event){
    event.preventDefault();
    this.props.moveOn();
  }

  render(){
    if (this.state.addNeg === false && this.state.addPos === false){
    return (
      <div className="mainContainer">
        {/* Local Info Component */}
        <div className="localInfoContainer">
        <LocalInfo />
        </div>
        {/* Bills Component */}
        <div className="billsContainer">
          {/* Need to pass down neg and pos expenses */}
        <BillsMain salary={this.state.salary} debits={this.state.postives} negative={this.state.negatives} expensesArr={this.state.expensesArr} debitsArr={this.state.debitsArr} />
        </div>
        {/* Weather, Options, and Move On Component */}
        <div className="rightMainContainer">
        <RightMain moveOn={this.handleMovingOn} addDebit={this.addANewNegative} addCredit={this.addANewPositive}/>
        </div>
      </div>
    )
    }
    else if (this.state.addPos){
      return (
        <div>
          add pos
          <form onSubmit={(event)=>this.handleExpenseSubmission(event,'Positive')}>
            <label>
              Name of Debit:
              <input onChange={(event)=>this.handleExpenseChanges(event.target)} type="text" name="name"/>
              <input onChange={(event)=>this.handleExpenseChanges(event.target)} type="text" name="debitAmt"/>
            </label>
            <input type="submit" name="submit"/>
          </form>
        </div>
      )
    } else if (this.state.addNeg){
      return (
        <div>
          add neg
          <form onSubmit={(event)=>this.handleExpenseSubmission(event,'Negative')}>
            <label>
              Name of Credit:
              <input onChange={(event)=>this.handleExpenseChanges(event.target)} type="text" name="name"/>
              <input onChange={(event)=>this.handleExpenseChanges(event.target)} type="text" name="creditAmt"/>
            </label>
            <input type="submit" name="submit"/>
          </form>
        </div>
      )
    }
  }
}

export default MainPage;