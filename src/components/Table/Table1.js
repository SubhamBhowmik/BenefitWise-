import React from 'react'
import './Table1.css'
const Table1 = () => {
    return (
        <>
            <section id='table1'>
                <div className="container">
                    <div className='let-text'>
                        <h2>Lets see previous Campaign </h2>
                    </div>
                    <div className='table-header' style={{ background: " rgba(253, 150, 68, 0.97)" }}>
                        <div >Name</div>
                        <div>Email Id</div>
                        <div>Employee Id</div>
                        <div>Mobile No</div>
                        <div>Amount Receive</div>
                        <div>Status</div>
                    </div>


                    
                    <div className='data-row'>
                        <div>cz subham</div>
                        <div>czsubham@gmail</div>
                        <div>300</div>
                        <div>08079985854</div>
                        <div>800</div>
                        <div className='cursor-pointer hover-shadow cursor-text remove-btn '>
                            <span class="pe-auto"></span></div>
                    </div>

                    {/* {
                        Data.map((rowdata) => (
                            <>
                                <div className='data-row'>
                                    <div>{rowdata.fullName}</div>
                                    <div>{rowdata.email}</div>
                                    <div>{rowdata.employeeId}</div>
                                    <div>{rowdata.mobile}</div>
                                    <div>{rowdata.amount}</div>
                                    <div className='cursor-pointer hover-shadow cursor-text remove-btn ' >
                                        <span class="pe-auto"> Remove</span></div>
                                </div>
                            </>
                        )

                        )
                    } */}





                </div>



            </section>
        </>
    )
}

export default Table1