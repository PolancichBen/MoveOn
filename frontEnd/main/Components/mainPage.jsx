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
      expensesArr: ['Test -'],
      debitsArr: ['Test +'],
      addNeg:false,
      addPos:false,
    }
    this.addANewNegative = this.addANewNegative.bind(this);
    this.addANewPositive = this.addANewPositive.bind(this);
    this.handleExpenseSubmission = this.handleExpenseSubmission.bind(this);

  }

  // Need to handle API Calls Here

  addANewNegative(info){
    console.log('Negative Expense',info)
      this.setState({
        addNeg:true
      })
  }

  addANewPositive(info){
    console.log('Postive Expense',info)
      this.setState({
        addPos:true
      })
  }

  handleExpenseSubmission(event,info){
    event.preventDefault()
    console.log('Expense Submission',info)
    this.setState({
      addNeg:false,
      addPos:false
    })
  }



  render(){
    console.log(this.props)
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
        <BillsMain positive={this.state.salary} negative={this.state.negatives} expensesArr={this.state.expensesArr} debitsArr={this.state.debitsArr} />
        </div>
        {/* Weather, Options, and Move On Component */}
        <div className="rightMainContainer">
        <RightMain addDebit={this.addANewPositive} addCredit={this.addANewNegative}/>
        </div>
      </div>
    )
    }
    else if (this.state.addPos){
      return (
        <div>
          add pos
          <form onSubmit={(event)=>this.handleExpenseSubmission(event)}>
            <label>
              Name of Debit:
              <input type="text" name="debit"/>
            </label>
            <input type="submit" name="submit"/>
          </form>
        </div>
      )
    } else if (this.state.addNeg){
      return (
        <div>
          add neg
          <form onSubmit={(event)=>this.handleExpenseSubmission(event)}>
            <label>
              Name of Credit:
              <input type="text" name="credit"/>
            </label>
            <input type="submit" name="submit"/>
          </form>
        </div>
      )
    }
  }
}

export default MainPage;