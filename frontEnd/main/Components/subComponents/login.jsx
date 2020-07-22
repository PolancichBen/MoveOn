import React from 'react';


const handleLoginCredintials=(event)=>{
  event.preventDefault();
  console.log('Verifying Credintials')
}

const handleNewSignUp=(event)=>{
  event.preventDefault();
  console.log('Making New profile')
}


const Login = (props) => {
  return (
    <div>
      <div>
        Login Go!
        {/* User */}
        {/* Password */}
        <div>
          <button onClick={(event)=>handleLoginCredintials.bind(event)}> Login! </button>
        </div>
      </div>
      <div>
        <div>
          Need to Sign Up?
      </div>
        <div>
          Sign Up Go!
          {/* New User */}
          {/* Password */}
          <div>
            <button onClick={(event)=>handleNewSignUp.bind(event)}> Sign Up! </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;