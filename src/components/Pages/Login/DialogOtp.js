import React, { useState } from 'react'
import './dialogotp.css'
import { getAuth } from "firebase/auth";
import firebase from '../../Firebase/Firebase';
import { useHistory } from 'react-router-dom';
const DialogOtp = () => {
   const history=useHistory()

    const [state, setstate] = useState("")
    const [toggle, settoggle] = useState(true)
    const handlechange = (e) => {
        const { name, value } = e.target
        setstate({ [name]: value })
        console.log(state);
    }

    const configcaptcha = () => {


        const auth = getAuth();
        auth.languageCode = 'ENG';
        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().useDeviceLanguage();

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();

            },
            defaultCountry: "IN"
        });

    }

    const onSignInSubmit = (e) => {
        e.preventDefault()
        configcaptcha();
        const phoneNumber = "+91" + state.mobile;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
                alert('OTP has been sent')
               
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                alert('OTP has not been sent')
                history.push('/landingpage1')
            });
        settoggle(false)

    }



    const onSubmitOTP = () => {
     
        const code = state.otp;
        console.log(code);
        window.confirmationResult.confirm(code).then((result) => {
            const user = result.user;
            console.log(JSON.stringify(user));
            alert('verified')
            history.push('/landingpage1')
        }).catch((error) => {
            alert('error Invalid OTP')
            history.push('/')
        })
    }



    return (
        <>

            {
                toggle ?
                    <div className='bg-login' id='dialog-otp'>
                        <div class=" p-md-5 mx-md-4 ">



                            <div style={{ height: "100%", width: "100%" }} className="main-wrap">
                                <div id='sign-in-button'></div>

                                <form action="
                        ">
                                    <input id="form_name" type="number" name="mobile" class="form-control mb-3" placeholder="Enter Phone Number (+91)" required="required" data-error="Firstname is required."
                                        onChange={handlechange}
                                    />


                                    <div className='d-flex justify-content-center'>
                                        <div id='loginpage'>


                                            <button onClick={onSignInSubmit} className='my-btn-2 bg-violet text-white' >Get OTP</button>






                                        </div>
                                    </div>
                                </form>











                            </div>

                        </div>
                    </div> :
                    <div className='bg-login' id='dialog-otp'>
                        <div class=" p-md-5 mx-md-4 ">



                            <div style={{ height: "100%", width: "100%" }} className="main-wrap">
                                <div id='sign-in-button'></div>

                                
                                    <input  type="number" name="otp" class="form-control mb-3" placeholder="Enter OTP" required="required" data-error="Firstname is required."
                                        onChange={handlechange}
                                    />


                                    <div className='d-flex justify-content-center'>
                                        <div id='loginpage'>


                                            <button onClick={()=>{onSubmitOTP()}} className='my-btn-2 bg-violet text-white' >Enter OTP</button>






                                        </div>
                                    </div>
                               











                            </div>

                        </div>
                    </div>
            }

        </>
    )
}

export default DialogOtp