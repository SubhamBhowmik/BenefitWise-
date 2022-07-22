import React, { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import Dialoglogin from '../Pages/Login/Dialoglogin'
import { useHistory, Redirect } from 'react-router-dom'
import { Dialog } from 'material-ui-core'
import Employer1 from '../Pages/Employer/Employer1'

const AuthSignflow = () => {
    const initialState = {
        username: "", password: "", email: "", authCode: "", code: "", newpassword: "", formType: "signIn"
    }
    const [user, updateUser] = useState(null)
    const [loader, setloader] = useState(true)
    const [loader1, setloader1] = useState(true)
    const [show, setshow] = useState(true)
    const [show1, setshow1] = useState(true)
    const [show2, setshow2] = useState(true)
    const [show3, setshow3] = useState(true)





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
                    updateFormState(() => ({ ...formState, formType: "signIn" }))
                    break;

            }
        });
    }

    useEffect(() => {
        console.log(formState);
        setshow(true)
        setshow1(true)
        setshow2(true)
        setshow3(true)
        setstate(false)
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
        try {
            setshow(false)
            setshow1(false)
            setTimeout(setloader(false), 2000)

            const { username, password } = formState

            if (username && password) {
                await Auth.signUp({ username, password }).then(
                    (data) => {
                        console.log(data);
                        alert('Verification code has been sent to your Email')
                        setTimeout(setloader(true), 2000)
                        updateFormState(() => ({ ...formState, formType: "confirmSignUp" }))
                        setshow(true)
                        setshow1(true)
                    }
                ).catch(
                    (error) => {
                        setTimeout(setloader(true), 2000)
                        console.log(error.message);
                        alert(error.message)
                      
                    }
                )





            } else {
                setshow(false)
                setshow1(false)
                setTimeout(setloader(true), 1000)

                alert('Invalid')

            }

        } catch (error) {
            setshow(false)
            setshow1(false)
            console.log(error.message);
            console.log(error.code);


            setloader1(true)
            switch (error.code) {
                case "UsernameExistsException":
                    alert('Email already Exist,Please Sign In')
                    updateFormState(() => ({ ...formState, formType: "signIn" }))
                    setshow(true)
                    setshow1(true)
                    break;
                case "InvalidPasswordException":
                    alert(error.message)
                    setshow(true)
                    setshow1(true)
                    break;
                default:
                    break;
            }

        }
    }
    const confirmSignUp = async () => {
        try {
        
            const { username, authCode } = formState
            await Auth.confirmSignUp(username, authCode)
            alert("Sign Up Successful")
            updateFormState(() => ({ ...formState, formType: "signedIn" }))

        } catch (error) {
        
            console.log(error.code);
            switch (error.code) {
                case "CodeMismatchException":
                    alert("Invalid Verification Code")
                    break;

                default:
                    break;
            }
        }
    }
    const signIn = async () => {


        setshow2(false)
        setshow3(false)


        const { username, password } = formState
        setTimeout(setloader(false), 2000)
        await Auth.signIn(username, password).then(data => {

            alert('Sign In Successful')
            setTimeout(setloader(true), 1000)
            updateFormState(() => ({ ...formState, formType: "signedIn" }))
            setshow2(true)
            setshow3(true)

        }
        ).catch(error => {
            console.log(error);
            alert(error.message)
            setloader(true)
        }
        )



    }
    const forgetPassword = async () => {
        setshow(false)
        const { username } = formState
        setTimeout(setloader(false), 2000)
        await Auth.forgotPassword(username)
            .then(data => {

                updateFormState(() => ({ ...formState, formType: "confirmForgetPassword" }))

                alert('Verification code has been send')
                setTimeout(setloader(true), 2000)
                setshow(true)

            }

            )
            .catch(error => {
                console.log(error);
                alert(error.message)
                setTimeout(setloader(true), 2000)
                return;

            }
            )









    }
    const resetPassword = async () => {
        try {
            setshow(false)
            const { username, code, newpassword } = formState
            await Auth.forgotPasswordSubmit(username, code, newpassword)
                .then(data => {
                    console.log(data)
                    setshow(true)
                    alert(' Reset password Successful')

                    updateFormState(() => ({ ...formState, formType: "signIn" }))
                }

                )
                .catch(err => {
                    console.log(err)
                    alert(err.message)
                    updateFormState(() => ({ ...formState, formType: "confirmForgetPassword" }))
                });


        } catch (error) {
            alert(' Reset password Unsuccessful')
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

    const toggleColor = () => {
        console.log('toggle-color', bg1);
        if (bg1 === "white") {
            setbg1("black")

        }

    }

    const history = useHistory()
    const [bg1, setbg1] = useState('white')
    const [bg2, setbg2] = useState('black')
    const [state, setstate] = useState(false)
    const [state1, setstate1] = useState(false)





    const colorChange = () => {

        setstate(!state);


    }

    const redirectSignin = () => {
        updateFormState(() => ({ ...formState, formType: "signIn" }))
        setshow(true)
        setshow1(true)
    }

    const redirectSignup = () => {
        updateFormState(() => ({ ...formState, formType: "signUp" }))
        setshow(true)
        setshow2(true)
        setstate(false)
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

                                <div className='bg-login' id='login'>
                                    <div class=" p-md-5 mx-md-4 ">






                                        <div className='text-center  login-text text-violet mb-50 '>
                                            Create New Account
                                        </div>



                                        <div className='mb-20'>
                                            <input id="username" type="text" name="username" class="form-control " placeholder="Email or  Username" required="required" data-error="username is required."
                                                onChange={handleChange}
                                                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                                            />
                                            <span hidden={show}>*Enter a  valid Email  </span>
                                        </div>
                                        <div className="d-flex justify-content-left">
                                            <div className='mb-20'>
                                                <input id="password" type={passwordType} name="password" class="form-control " placeholder=" Password" required="required" data-error="password is required."
                                                    onChange={handleChange}
                                                    pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                                                />
                                                <span hidden={show1}>* Minimum length should be 8 and includes at least 1 Uppercase,1 Lowercase,1 Number,1 Special character</span>
                                            </div>

                                            <div className="eye" onClick={togglePassword}>
                                                {passwordType === "password" ?
                                                    <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
                                                }
                                            </div>
                                        </div>
                                        <div id='loginpage'>
                                            <div className='sw' id='ss'>
                                                <label class="switch "  >
                                                    <input type="checkbox" />
                                                    <span class="slider">
                                                        <div className='switch-text '>

                                                            {
                                                                state ?

                                                                    <div className='switch-text  '>
                                                                        <h2 className='text-dark  switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
                                                                        <h2 className='text-white  switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
                                                                    </div>
                                                                    :
                                                                    <div className='switch-text'>
                                                                        <h2 className='text-white  switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
                                                                        <h2 className='text-dark switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
                                                                    </div>


                                                            }
                                                        </div>


                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                                            <div id='loginpage'>
                                                <button className='my-btn-2 bg-violet text-white' style={{ width: "100%" }} onClick={signUp} >
                                                    <div className='loader' hidden={loader}>
                                                        <div class="spinner-border text-white" role="status">
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                    </div>
                                                    <div className='loader-text-wrap'>

                                                        <div className='d-flex justify-content-center'>
                                                            Sign Up
                                                        </div>

                                                    </div>


                                                </button>

                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center pb-4">
                                            {/* <p class="mb-0 me-2 ">Don't have an account?</p> */}


                                        </div>

                                        <div class="col mt-100 text-center">

                                            <div className='text-decoration-none text-center forget-text-1'
                                                onClick={redirectSignin}
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
                                                onClick={redirectSignin}
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

                        <div className='bg-login' id='login'>
                            <div class=" p-md-5 mx-md-4 ">





                                <div className='text-center login-text mb-50 text-violet '>
                                    Login
                                </div>

                                <div className='mb-20'>
                                    <input id="username" type="email" name="username" class="form-control " placeholder=" Username" required="required" data-error="username is required."
                                        onChange={handleChange}
                                    />
                                    <span hidden={show2}>*Enter a  valid Email  </span>
                                </div>


                                <div className="d-flex justify-content-center">
                                    <div className='mb-20'>
                                        <input id="password" type={passwordType} name="password" class="form-control " placeholder=" Password" required="required" data-error="password is required."
                                            onChange={handleChange}
                                            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                                        />
                                        <span hidden={show2}>* Minimum length should be 8 and includes at least 1 Uppercase,1 Lowercase,1 Number,1 Special character</span>
                                    </div>

                                    <div className="eye" onClick={togglePassword}>
                                        {passwordType === "password" ?
                                            <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>
                                        }
                                    </div>
                                </div>

                                <div class="col">

                                    <div className=' forget-text-1 text-decoration-none'
                                        onClick={() => { updateFormState(() => ({ ...formState, formType: "forgetPassword" })) }}
                                    >Forgot password?
                                    </div>
                                </div>
                                <div id='loginpage'>
                                    <div className='sw' id='ss'>
                                        <label class="switch " >
                                            <input type="checkbox" />
                                            <span class="slider">
                                                <div className='switch-text '>

                                                    {
                                                        state ?

                                                            <div className='switch-text '>
                                                                <h2 className='text-dark  switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
                                                                <h2 className='text-white  switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
                                                            </div>
                                                            :
                                                            <div className='switch-text'>
                                                                <h2 className='text-white  switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
                                                                <h2 className='text-dark switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
                                                            </div>


                                                    }
                                                </div>


                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                                    <div id='loginpage'>
                                        <button className='my-btn-2 bg-violet text-white' style={{ width: "100%" }} onClick={signIn} >
                                            <div className='loader' hidden={loader}>
                                                <div class="spinner-border text-white" role="status">
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

                                <div class="col text-center mt-80">

                                    <div className='text-decoration-none forget-text-1'
                                        onClick={redirectSignup}
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
                        <Employer1 />

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

                            <div className='bg-login-confirm-signup' id='login'>
                                <div class=" p-md-5 mx-md-4 mt-50 d-flex align-items-center justify-content-center ">

                                    <div>

                                        <div className="d-flex justify-content-center ">
                                            <div className='mb-20'>
                                                <input id="username" type='email' name="username" class="form-control " placeholder="Enter Email " required="required" data-error="verification code is required"
                                                    onChange={handleChange}
                                                />
                                                <span hidden={show} >*Enter a  valid Email  </span>
                                            </div>


                                        </div>
                                        <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                                            <div id='loginpage'>
                                                <button className='my-btn-2  bg-violet text-white' style={{ width: "100%" }}
                                                    onClick={forgetPassword}
                                                >Send Code</button>

                                            </div>
                                        </div>



                                        <div class="col mt-55 text-center">

                                            <div className='text-decoration-none text-center forget-text-1'
                                                onClick={redirectSignin}
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

                            <div className='bg-login-confirm-signup' id='login'>
                                <div class=" p-md-5 mx-md-4 mt-50 d-flex align-items-center justify-content-center ">


                                    <div>
                                        <div className="">
                                            <div className='mb-20'>
                                                <input id="username" type='email' name="username" class="form-control " placeholder="Enter Email " required="required" data-error="verification code is required"
                                                    onChange={handleChange}
                                                />
                                                <span hidden={show}>*Enter a  valid Email  </span>
                                            </div>
                                            <div className='d-flex jusify-content-center'>
                                                <div className='mb-20'>
                                                    <input id="password" type={passwordType} name="newpassword" class="form-control " placeholder=" New Password" required="required" data-error="password is required."
                                                        onChange={handleChange}
                                                        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                                                    />
                                                    <span hidden={show} >* Minimum length should be 8 and includes at least 1 Uppercase,1 Lowercase,1 Number,1 Special character</span>
                                                </div>
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

                                            <div className='text-decoration-none text-center forget-text-1'
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