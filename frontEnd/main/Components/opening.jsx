import React from "react";
import IntroFormEntry from "./subComponents/introFormEntry.jsx";
import Login from "./subComponents/login.jsx";

class Opening extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
    this.handleIncomingSalaryAndLocationData = this.handleIncomingSalaryAndLocationData.bind(this);
    // this.loginPressed = this.loginPressed.bind(this);
    this.sendDataUp = this.sendDataUp.bind(this);
  }

  // loginPressed(event){
  //   event.preventDefault();
  //   this.setState({
  //     // login: true,
  //     salary: null,
  //     Location: null,
  //     zipCode: null,
  //   })
  // }

  handleIncomingSalaryAndLocationData(event){
    if (event.name === 'location'){
      this.setState({
        Location: event.value
      })
    }
    if (event.name === 'salary'){
      this.setState({
        salary: event.value
      })
    }
  }

  sendDataUp(event){
    // console.log('Sending Data Up',event);
    this.props.sendUpSalAndLocal(this.state.salary,this.state.Location);
  }



  render() {
    // if state of login false render this
    if (this.state.login === false) {
      return (
        <div>
          <div className="moveOnTitleMain">Move On</div>
          <div>
            {/* Form Input Component */}
            <IntroFormEntry salaryAndLocal={this.handleIncomingSalaryAndLocationData} sendItUp={this.sendDataUp} />
          </div>
          {/* <div>
            <button onClick={(event)=>this.loginPressed(event)}> Login </button>
          </div> */}
        </div>
      );
    } else {
    // else if state of login true
    // Login component
      return (
        <div>
          <div>
            Login Title
          </div>
          <div>
          <Login />
          </div>
        </div>
      );
    }
  }
}

export default Opening;
