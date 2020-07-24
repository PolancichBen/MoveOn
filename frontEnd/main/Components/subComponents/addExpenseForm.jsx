import React from 'react';


const NewExpense = (props) => {
  if (props.typePos) {
    return (
      <div className="newExpenseWrap">
        <div className="newExpenseInnerTitle">Add A New Credit!</div>
        <form onSubmit={(event) => props.handleExpenseSubmission(event, 'Positive')}>
          <label>
            <div className="newExpenseTextContainer">
              <div className="newExpenseTextField">
                <input className="newExpenseInput" onChange={(event) => props.handleExpenseChanges(event.target)} type="text" placeholder="Name of Credit" name="name" />
              </div>
              <div className="newExpenseTextField">
                <input className="newExpenseInput" onChange={(event) => props.handleExpenseChanges(event.target)} type="text" placeholder="Amount of Credit" name="debitAmt" />
              </div>
            </div>
          </label>
          <input type="submit" name="submit" />
        </form>
      </div>
    )
  } else if (props.typeNeg) {
    return (
      <div className="newExpenseWrap">
        <div className="newExpenseInnerTitle">Add A New Debit</div>
        <form onSubmit={(event) => props.handleExpenseSubmission(event, 'Negative')}>
          <label>
            <div className="newExpenseTextContainer">
              <div className="newExpenseTextField">
                <input className="newExpenseInput" onChange={(event) => props.handleExpenseChanges(event.target)} type="text" placeholder="Name of Debit" name="name" />
              </div>
              <div className="newExpenseTextField">
                <input className="newExpenseInput" onChange={(event) => props.handleExpenseChanges(event.target)} type="text" placeholder="Amount of Debit" name="creditAmt" />
              </div>
            </div>
          </label>
          <input type="submit" name="submit" />
        </form>
      </div>
    )
  }
}

export default NewExpense;