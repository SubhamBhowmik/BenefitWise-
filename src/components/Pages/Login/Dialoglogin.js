import React, { useState } from 'react'
import './dialoglogin.css'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
const Dialoglogin = ({ handleChange, signUp, updateFormState,formState }) => {
  const history = useHistory()
  const [bg1, setbg1] = useState('white')
  const [bg2, setbg2] = useState('black')
  const [state, setstate] = useState(false)





  const colorChange = () => {

    setstate(!state);
    switch (state) {
      case true:
        setbg1('black');
        setbg2('white')
        break;
      case false:
        setbg1('white');
        setbg2('black')
        break;


    }

  }
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  return (
    <>
      <div className='bg-login'>
        <div class=" p-md-5 mx-md-4 ">






          <div className='text-center text-format text-violet mb-5 px-2 '>
            Login
          </div>
          <input type='text' name='username' onChange={handleChange} placeholder='Username' />
          <input type='password' name='password' onChange={handleChange} placeholder='password' />
          <input type='text' name='email' onChange={handleChange} placeholder='email' />


          <div className="d-flex justify-content-center">

            <div className="eye" onClick={togglePassword}>
              {passwordType === "password" ?
                <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
              }
            </div>
          </div>




          <div class="col">

            <a href="#!" className='text-decoration-none'>Forgot password?</a>
          </div>
          <div className='sw' id='ss'>
            <label class="switch " onClick={colorChange} >
              <input type="checkbox" />
              <span class="slider">
                <div className='switch-text '>

                  <div className=' ' style={{ color: bg1 }}> <h2>Employee</h2></div>
                  <div className='  float-right' style={{ color: bg2 }}> <h2>Employer</h2> </div>
                </div>


              </span>
            </label>
          </div>
          <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
            <div id='loginpage'>
              <button onClick={signUp}>SignUp</button>
              <button onClick={() => { updateFormState(() => ({ ...formState, formType: "signIn" })) }}>SignIn</button>

            </div>
          </div>



          <div class="d-flex align-items-center justify-content-center pb-4">
            {/* <p class="mb-0 me-2 ">Don't have an account?</p> */}

          </div>



        </div>
      </div>
    </>
  )
}

export default Dialoglogin