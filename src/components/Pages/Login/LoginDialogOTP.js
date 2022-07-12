import React from 'react'
import Dialog from '@mui/material/Dialog';
const LoginDialogOTP = () => {
  const [open, setOpen] = React.useState(false);
  console.log(open);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>

      {/* <div className='bg-login'>
          <div class=" p-md-5 mx-md-4 ">



            <form>


             <div className='text-center text-format text-violet mb-5'>
                Login
             </div>
     
            <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Username" required="required" data-error="Firstname is required." />
            <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Password" required="required" data-error="Firstname is required." />
            <div class="col">
     
      <a href="#!" className='text-decoration-none'>Forgot password?</a>
    </div>
              
    <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom p-2  border-radiuss">
               <div className="text-decoration-none shadow  btn-text-format  hover-overlay hover-zoom hover-shadow ripple bg-violet text-white border-radiuss px-2 ">Get OTP</div>
                </div>
             
            

              <div class="d-flex align-items-center justify-content-center pb-4">
                <p class="mb-0 me-2 ">Don't have an account?</p>
           
              </div>

            </form>

          </div>
        </div> */}
      <div>
        <button class="login-btn" onClick={() => setOpen(true)} >
          <div className="d-flex align-items-center  px-2 text-decoration-none  text-white ">
            Login
            <i class=" fa-solid fa-user" ></i>
          </div>
        </button>





        <Dialog
          className=''
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

<div className='bg-login'>
          <div class=" p-md-5 mx-md-4 ">



            <form>


             <div className='text-center text-format text-violet mb-5'>
                Login
             </div>
     
            <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Username" required="required" data-error="Firstname is required." />
            <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Password" required="required" data-error="Firstname is required." />
            <div class="col">
     
      <a href="#!" className='text-decoration-none'>Forgot password?</a>
    </div>
              
    <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom p-2  border-radiuss">
               <div className="text-decoration-none shadow  btn-text-format  hover-overlay hover-zoom hover-shadow ripple bg-violet text-white border-radiuss px-2 ">Get OTP</div>
                </div>
             
            

              <div class="d-flex align-items-center justify-content-center pb-4">
                <p class="mb-0 me-2 ">Don't have an account?</p>
           
              </div>

            </form>

          </div>
        </div> 
       


        </Dialog>
      </div>
    </>
  )
}

export default LoginDialogOTP