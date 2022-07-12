import React from 'react'
import CheckBalance from '../Checkout/CheckBalance'
import './em5container.css'
const Em5container = () => {
    return (
        <>

            <div className='container-fluid' id='em2'>
                <div className='czx-wrapper' >
                    <div className=' simple-text d-flex justify-content-center'>
                        <h1>Simple Onboarding</h1>
                    </div>
                    <div className='d-flex justify-content-center'>

                        <div className="d-flex">
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>
                                </div>

                                <div className=''>
                                    <h3>Recharge your</h3>
                                    <h3> Wallet</h3>
                                </div>
                            </div>
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>

                                </div>

                                <div className=''>
                                    <h3>Upload your </h3>
                                    <h3> template</h3>
                                </div>
                            </div>
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>
                                </div>

                                <div className=''>
                                    <h3>Add Employee
                                    </h3>
                                    <h3>Data</h3>
                                </div>
                            </div>
                            <div className='wallet-wrap'>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-solid  fa-wallet  fa-4x"></i>
                                </div>

                                <div className=''>
                                    <h3>Review and
                                    </h3>
                                    <h3>Submit</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='container mt-whole-row'>
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="row mt-whole-row d-flex justify-content-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className='left-table '>
                                <div className="d-flex justify-content-center">
                                    <div className='create-cmp '>
                                        <h2>Create your Campaign</h2>
                                    </div>
                                </div>
                                <div className='mt-70'>
                                    <div className='input--box'>
                                        <h6>Campaign Name</h6>
                                        <input type="text" />
                                    </div>
                                    <div className='input--box'>
                                        <h6>Campaign Brand</h6>
                                        <input type="text" />
                                    </div>
                                    <div className='input--box'>
                                        <h6>No of Participant</h6>
                                        <input type="text" />
                                    </div>


                                </div>

                                <form action="">

                                    <div className="last-input-wrap">
                                        <div className="input-box">
                                            <input type="checkbox" id="" name="EB points" value="EB points" />
                                            <label for="EB points"><h4>EB points</h4> </label>
                                            <h6>
                                                with the EB points ,employees can </h6>
                                            <h6> purchase their favourite gift cards</h6>


                                            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">

                                                      <CheckBalance/>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-box">

                                            <input type="checkbox" id="" data-toggle="modal" data-target="#exampleModalLong" name="EB points" value="gift card" />
                                            <label for="EB points"><h4>Gift Cards</h4> </label>
                                            <h6>
                                                with the EB points ,employees can </h6>
                                            <h6> purchase their favourite gift cards</h6>

                                        </div>



                                    </div>



                                </form>


                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <div class="right-side">

                                <div>
                                    <div className='top-div'>
                                        <h2>Easy Way to create</h2>
                                        <h2>Campaign</h2>
                                    </div>
                                    <div className='lorem-wrap' >
                                        <div className='choto-box'></div>
                                        <div><h6>Lorem ipsum dolor sit amet. 33 interno.</h6></div>
                                    </div>
                                    <div className='lorem-wrap' >
                                        <div className='choto-box'></div>
                                        <div><h6>Lorem ipsum dolor sit amet. 33 interno.</h6></div>
                                    </div>
                                    <div className='lorem-wrap' >
                                        <div className='choto-box'></div>
                                        <div><h6>Lorem ipsum dolor sit amet. 33 interno.</h6></div>
                                    </div>
                                </div>




                                <div className='img-last'>
                                    <img className='' src="./images/employer2/running.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='prev-wrap'>
                <div className='lft'>
                    <div className='' >
                        <h1>Previous Campaign</h1>
                        <div className='text-wrp'>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</h6>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='c-y-t'>
                        <h2>View Previous Campaign</h2>
                    </div>
                </div>

            </div>



            <div className='c-y-t-wrap'>
                <div className='c-y-t'>
                    <h2>Choose your Template</h2>
                </div>
            </div>
            <div className='black-friday-wraper'>
                <div>
                    <div className='black-friday-card shadow'>
                        <img className='img-fluid' src="./images/employer2/black-friday.svg" alt="" />

                    </div>
                    <div className='text-center'>
                        <h2>Black Friday</h2>
                    </div>
                </div>
                <div>
                    <div className='black-friday-card shadow'>
                        <img className='img-fluid' src="./images/employer2/black-friday.svg" alt="" />

                    </div>
                    <div className='text-center'>
                        <h2>Black Friday</h2>
                    </div>
                </div>
                <div>
                    <div className='black-friday-card shadow'>
                        <img className='img-fluid' src="./images/employer2/black-friday.svg" alt="" />

                    </div>
                    <div className='text-center'>
                        <h2>Black Friday</h2>
                    </div>
                </div>
                <div>
                    <div className='black-friday-card shadow'>
                        <img className='img-fluid' src="./images/employer2/black-friday.svg" alt="" />

                    </div>
                    <div className='text-center'>
                        <h2>Black Friday</h2>
                    </div>
                </div>

            </div>

            <div className='mt-128'>
                <div className='line-container d-flex'>
                    <div className='bg-orange left-line' ></div>
                    <div className='bg-light-gray' ></div>
                </div>
            </div>


            <div className="a-t-wrap">
                <div className='a-t'>
                    <h2> Add Template</h2>
                </div>
            </div>



        </>
    )
}

export default Em5container