import React, { useState } from 'react'
import './table2.css'
import data from "./mock-data.json";
const Table2 = () => {
    const [Data, setData] = useState(data)
    console.log(data);
    const remove = (rowdataId) => {
        const newrowdata = [...Data];
        const index = Data.findIndex((curr) => curr.id === rowdataId);
        newrowdata.splice(index, 1);
        setData(newrowdata)

    }
    return (
        <>
            <section id='table2'>
                <div className="container  ">
                    <div className='let-text'>
                        <h2>Lets see previous Campaign </h2>
                    </div>

                    <div className='d-flex justify-content-center px-2'>
                        <div className='table-header' style={{ background: "  rgba(128, 0, 128, 0.81)" }}>
                            <div >Name</div>
                            <div>Email Id</div>
                            <div>Employee Id</div>
                            <div>Mobile No</div>
                            <div>Amount Receive</div>
                            <div>Status</div>
                        </div>
                    </div>



                    {


                        Data.map((rowdata) => (
                            <>
                                <div className='d-flex justify-content-center'>
                                    <div className='data-row'>
                                        <div>{rowdata.fullName}</div>
                                        <div>{rowdata.email}</div>
                                        <div>{rowdata.employeeId}</div>
                                        <div>{rowdata.mobile}</div>
                                        <div>{rowdata.amount}</div>
                                        <div className='cursor-pointer hover-shadow cursor-text remove-btn ' onClick={() => remove(rowdata.id)}>
                                            <span class="pe-auto"> Remove</span></div>
                                    </div>
                                </div>

                            </>
                        )

                        )
                    }





                </div>



            </section>

        </>
    )
}

export default Table2