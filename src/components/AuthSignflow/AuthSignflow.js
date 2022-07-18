import React, { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import Dialoglogin from '../Pages/Login/Dialoglogin'
import { useHistory } from 'react-router-dom'
import { Dialog } from 'material-ui-core'
import Employer1 from '../Pages/Employer/Employer1'

const AuthSignflow = () => {
    const initialState = {
        username: "", password: "", email: "", authCode: "", code: "", newpassword: "", formType: "signUp"
    }
    const [user, updateUser] = useState(null)
    const [loader, setloader] = useState(true)
    const [formState, updateFormState] = useState(initialState)

    const checkUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser()
            updateUser(user)

            console.log(user);
            updateFormState(() => ({ ...formState, formType: "signedIn" }))
        } catch (error) {
            // updateUser(null)
            console.log(user, "No user");
        }
    }
    const setAuthListener = () => {
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    console.log('user signed in');
                    setloader(true)
                    break;

                case 'signOut':
                    console.log(data, 'user signed out');
                    updateFormState(() => ({ ...formState, formType: "signUp" }))
                    break;

            }
        });
    }

    useEffect(() => {

        checkUser();
        setAuthListener()

    }, [])



    const handleChange = (e) => {
        e.persist();
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }
    const { formType } = formState

    const signUp = async () => {
        // const { username, password, email } = formState
        // await Auth.signUp({ username, password, attributes: { email } })
        const { username, password } = formState
        await Auth.signUp({ username, password })
        updateFormState(() => ({ ...formState, formType: "confirmSignUp" }))
    }

    const confirmSignUp = async () => {
        const { username, authCode } = formState
        await Auth.confirmSignUp(username, authCode)
        updateFormState(() => ({ ...formState, formType: "signIn" }))
    }
    const signIn = async () => {
      try {
        setloader(!loader)
        const { username, password } = formState
        await Auth.signIn(username, password)
        alert('Sign In Successful')
        updateFormState(() => ({ ...formState, formType: "signedIn" }))
      } catch (error) {
        setloader(true)
        alert('Incorrect username or password')
        
      }

    }
    const forgetPassword = async () => {
        try {
            const { username } = formState
            await Auth.forgotPassword(username)
                .then(data => console.log(data))
                .catch(err => console.log(err));
                alert('Verification code has been send')
            updateFormState(() => ({ ...formState, formType: "confirmForgetPassword" }))
        } catch (error) {
           alert('Verification code has not been send')
        }


    }
    const resetPassword = async () => {
        try {
            const { username, code, newpassword } = formState
            await Auth.forgotPasswordSubmit(username, code, newpassword)
                .then(data => console.log(data))
                .catch(err => console.log(err));
                alert(' Reset password Successful')
            updateFormState(() => ({ ...formState, formType: "signIn" })) 
        } catch (error) {
            alert(' Reset password Unsuccessful')
        }
     

    }
    const signOut = () => {
        Auth.signOut()
    }


    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


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





    return (
        <>

            {
                formType === 'signUp' && (
                    <div>
                        {/* <input type='text' name='username' onChange={handleChange} placeholder='Username' />
                        <input type='password' name='password' onChange={handleChange} placeholder='password' />
                        <input type='text' name='email' onChange={handleChange} placeholder='email' />
                        <button onClick={signUp}>SignUp</button>
                        <button onClick={() => { updateFormState(() => ({ ...formState, formType: "signIn" })) }}>SignIn</button> */}
                        <Dialog
                            className=''
                            open={true}
                            onClose={false}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <div>

                                <div className='bg-login'>
                                    <div class=" p-md-5 mx-md-4 ">






                                        <div className='text-center text-format text-violet mb-5 px-2 '>
                                            Create New Account
                                        </div>

                                        <input id="username" type="text" name="username" class="form-control mb-3" placeholder="Email or  Username" required="required" data-error="username is required."
                                            onChange={handleChange}
                                        />

                                        <div className="d-flex justify-content-center">
                                            <input id="password" type={passwordType} name="password" class="form-control mb-3" placeholder=" Password" required="required" data-error="password is required."
                                                onChange={handleChange}
                                            />
                                            <div className="eye" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
                                                }
                                            </div>
                                        </div>


                                        <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                                            <div id='loginpage'>
                                                <button className='my-btn-2 bg-violet text-white' style={{ width: "100%" }} onClick={signUp}>SignUp</button>

                                            </div>
                                        </div>



                                        <div class="d-flex align-items-center justify-content-center pb-4">
                                            {/* <p class="mb-0 me-2 ">Don't have an account?</p> */}


                                        </div>

                                        <div class="col mt-100 text-center">

                                            <div className='text-decoration-none text-center forget-text'
                                                onClick={() => { updateFormState(() => ({ ...formState, formType: "signIn" })) }}
                                            >Already have an Account? Click here to Sign In</div>
                                        </div>



                                    </div>
                                </div>
                            </div>

                        </Dialog>
                    </div>

                )


            }
            {
                formType === 'confirmSignUp' && (
                    <Dialog
                        open={true}
                        onClose={false}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >

                        <div>

                            <div className='bg-login-confirm-signup'>
                                <div class=" p-md-5 mx-md-4 mt-50 d-flex align-items-center justify-content-center ">


                                    <div>
                                        <div className="d-flex justify-content-center ">
                                            <input id="password" type={passwordType} name="authCode" class="form-control mb-3" placeholder="Enter the Verification Code" required="required" data-error="verification code is required"
                                                onChange={handleChange}
                                            />
                                            <div className="eye" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
                                                }
                                            </div>
                                        </div>
                                        <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                                            <div id='loginpage'>
                                                <button className='my-btn-2 bg-violet text-white' style={{ width: "100%" }} onClick={confirmSignUp}>Confirm Sign Up</button>

                                            </div>
                                        </div>



                                        <div class="col mt-55 text-center">

                                            <div className='text-decoration-none text-center forget-text'
                                                onClick={() => { updateFormState(() => ({ ...formState, formType: "signIn" })) }}
                                            >Already have an Account? Click here to Sign In</div>
                                        </div>

                                    </div>






                                </div>
                            </div>
                        </div>
                    </Dialog>
                )


            }
            {
                formType === 'signIn' && (

                    <Dialog
                        open={true}
                        onClose={false}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >

                        <div className='bg-login'>
                            <div class=" p-md-5 mx-md-4 ">





                                <div className='text-center text-format text-violet mb-5 px-2 '>
                                    Login
                                </div>

                                <input id="username" type="text" name="username" class="form-control mb-3" placeholder=" Username" required="required" data-error="username is required."
                                    onChange={handleChange}
                                />

                                <div className="d-flex justify-content-center">
                                    <input id="password" type={passwordType} name="password" class="form-control mb-3" placeholder=" Password" required="required" data-error="password is required."
                                        onChange={handleChange}
                                    />
                                    <div className="eye" onClick={togglePassword}>
                                        {passwordType === "password" ?
                                            <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
                                        }
                                    </div>
                                </div>




                                <div class="col">

                                    <div className=' forget-text text-decoration-none'
                                        onClick={() => { updateFormState(() => ({ ...formState, formType: "forgetPassword" })) }}
                                    >Forgot password?
                                    </div>
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
                                        <button className='my-btn-2 bg-violet text-white' style={{ width: "100%" }} onClick={signIn}>
                                            <div className='loader' hidden={loader}>
                                                <div class="spinner-border text-success" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                            <div className='loader-text-wrap'>

                                                <div className='d-flex justify-content-center'>
                                                    Login
                                                </div>

                                            </div>


                                        </button>

                                    </div>
                                </div>



                                <div class="d-flex align-items-center justify-content-center pb-4">
                                    {/* <p class="mb-0 me-2 ">Don't have an account?</p> */}

                                </div>

                                <div class="col text-center">

                                    <div className='text-decoration-none forget-text'
                                        onClick={() => { updateFormState(() => ({ ...formState, formType: "signUp" })) }}
                                    >New User? Click here to SignUp</div>
                                </div>

                            </div>
                        </div>
                    </Dialog>
                )


            }
            {
                formType === 'signedIn' && (
                    <div>
                        <Employer1 signOut={signOut} />

                    </div>
                )


            }
            {
                formType === 'forgetPassword' && (
                    <Dialog
                        open={true}
                        onClose={false}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >

                        <div>

                            <div className='bg-login-confirm-signup'>
                                <div class=" p-md-5 mx-md-4 mt-50 d-flex align-items-center justify-content-center ">


                                    <div>
                                        <div className="d-flex justify-content-center ">
                                            <input id="username" type='text' name="username" class="form-control mb-3" placeholder="Enter Email " required="required" data-error="verification code is required"
                                                onChange={handleChange}
                                            />
                                            {/* <div className="eye" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
                                                }
                                            </div> */}
                                        </div>
                                        <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                                            <div id='loginpage'>
                                                <button className='my-btn-2 bg-violet text-white' style={{ width: "100%" }}
                                                    onClick={forgetPassword}
                                                >Send Code</button>

                                            </div>
                                        </div>



                                        <div class="col mt-55 text-center">

                                            <div className='text-decoration-none text-center forget-text'
                                                onClick={() => { updateFormState(() => ({ ...formState, formType: "signIn" })) }}
                                            >Already have an Account? Click here to Sign In</div>
                                        </div>

                                    </div>






                                </div>
                            </div>
                        </div>
                    </Dialog>
                )


            }
            {
                formType === 'confirmForgetPassword' && (
                    <Dialog
                        open={true}
                        onClose={false}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >

                        <div>

                            <div className='bg-login-confirm-signup'>
                                <div class=" p-md-5 mx-md-4 mt-50 d-flex align-items-center justify-content-center ">


                                    <div>
                                        <div className="">
                                            <input id="username" type='text' name="username" class="form-control mb-3" placeholder="Enter Email " required="required" data-error="Email is required"
                                                onChange={handleChange}
                                            />
                                            <div className='d-flex jusify-content-center'>
                                                <input id="password" type={passwordType} name="newpassword" class="form-control mb-3" placeholder="New Password " required="required" data-error="New Password is required"
                                                    onChange={handleChange}
                                                />
                                                <div className="eye" onClick={togglePassword}>
                                                    {passwordType === "password" ?
                                                        <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
                                                    }
                                                </div>
                                            </div>


                                            <input id="code" type='text' name="code" class="form-control mb-3" placeholder="verification code " required="required" data-error="verification code is required"
                                                onChange={handleChange}
                                            />

                                        </div>
                                        <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                                            <div id='loginpage'>
                                                <button className='my-btn-2 bg-violet text-white' style={{ width: "100%" }}
                                                    onClick={resetPassword}
                                                >Reset Password</button>

                                            </div>
                                        </div>



                                        <div class="col mt-55 text-center">

                                            <div className='text-decoration-none text-center forget-text'
                                                onClick={() => { updateFormState(() => ({ ...formState, formType: "signIn" })) }}
                                            >Already have an Account? Click here to Sign In</div>
                                        </div>

                                    </div>






                                </div>
                            </div>
                        </div>
                    </Dialog>
                )


            }

        </>

    )
}

export default AuthSignflow