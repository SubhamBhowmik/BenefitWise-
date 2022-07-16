import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { useHistory } from 'react-router-dom';
import Dialoglogin from './Dialoglogin';
import DialogOtp from './DialogOtp';
const LoginDialogpage = () => {

  const [state, setstate] = useState(true)
  const history = useHistory()
  const [open, setOpen] = React.useState(false);
  console.log(open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const handleOtpopen=()=>{
    setstate(false)
  }


  return (
    <>

      <div>
        <button class="login-btn"  onClick={()=>setOpen(true)}>
          <div className="d-flex align-items-center  px-2 text-decoration-none  text-white ">
            Login
            <i class=" fa-solid fa-user" style={{ marginLeft: ".3rem" }}></i>
          </div>
        </button>




 
        <Dialog
          className=''
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

         

           <Dialoglogin handleOtpopen={handleOtpopen}/>          
     
            
          




        </Dialog> 
      </div>
    </>
  )
}
export default LoginDialogpage