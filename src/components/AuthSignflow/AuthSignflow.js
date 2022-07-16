import React,{useState,useEffect} from 'react'
import { Auth, Hub } from 'aws-amplify'
const AuthSignflow = () => {
    const initialState = {
        username: "", password: "", email: "", authCode: "", formType: "signUp"
    }
    const [formState, updateFormState] = useState(initialState)
    const handleChange = (e) => {
        e.persist();
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }
    const { formType } = formState

  const signUp=async()=>{
    const {username,password,email}=formState
    await Auth.signUp({username,password,attributes:{email}})
    updateFormState(() => ({ ...formState, formType:"confirmSignUp"}))
  }

  const confirmSignUp=async()=>{
    const {username,authCode}=formState
   await Auth.confirmSignUp(username,authCode)
    updateFormState(() => ({ ...formState, formType:"signIn"}))
  }
  const signIn=async()=>{
    const {username,password}=formState
   await Auth.signIn(username,password)
    updateFormState(() => ({ ...formState, formType:"signedIn"}))
  }











    return (
        <>
            <div>AuthSignflow</div>
            {
                formType === 'signUp' && (
                    <div>
                       <input type='text' name='username' onChange={handleChange} placeholder='Username'/>
                       <input type='password' name='password' onChange={handleChange} placeholder='password'/>
                       <input type='text' name='email' onChange={handleChange} placeholder='email'/>
                       <button onClick={signUp}>SignUp</button>
                     
                    </div>
                )


            }
            {
                formType === 'confirmSignUp' && (
                    <div>
                       <input type='text' name='authCode' onChange={handleChange} placeholder='Verification Code'/>
                       <button onClick={confirmSignUp}>Confirm SignUp</button>
                     
                    </div>
                )


            }
            {
                formType === 'signIn' && (
                    <div>
                       <input type='text' name='username' onChange={handleChange} placeholder='Username'/>
                       <input type='password' name='password' onChange={handleChange} placeholder='password'/>
                       <button onClick={signIn}>SignIn</button>
                     
                    </div>
                )


            }
            {
                formType === 'signedIn' && (
                    <div>
                      <h1>Welcome CZ</h1>
                     
                    </div>
                )


            }
       
        </>

    )
}

export default AuthSignflow