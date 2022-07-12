import React, { useState, Fragment } from 'react'
import { nanoid } from "nanoid";
import './table.css'
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
const Table = () => {
  // const [contacts, setContacts] = useState(data);

  // const [addFormData, setAddFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   employeeId: "",
  //   mobile: "",
  //   amount: ""
  // });

  // const [editFormData, setEditFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   employeeId: "",
  //   mobile: "",
  //   amount: ""
  // });

  // const [editContactId, setEditContactId] = useState(null);

  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;
  //   console.log(fieldName);
  //   console.log(fieldValue );
  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  

  // };

  // const handleEditFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;
    
  //   const newFormData = { ...editFormData };
  //   newFormData[fieldName] = fieldValue;
  //   setEditFormData(newFormData);
   
  // };

  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();

  //   const newContact = {
  //     id: nanoid(),
  //     fullName: addFormData.fullName,
  //     email: addFormData.email,
  //     employeeId: addFormData.employeeId,
  //     mobile: addFormData.mobile,
  //     amount: addFormData.amount
  //   };

  //   const newContacts = [...contacts, newContact];
  //   setContacts(newContacts);
  //   console.log(newContact);

  //   alert('Data added')

  // };

  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault();

  //   const editedContact = {
  //     id: editContactId,
  //     fullName: editFormData.fullName,
  //     email: editFormData.email,
  //     employeeId: editFormData.employeeId,
  //     mobile: editFormData.mobile,
  //     amount: editFormData.amount
  //   };

  //   const newContacts = [...contacts];

  //   const index = contacts.findIndex((contact) => contact.id === editContactId);

  //   newContacts[index] = editedContact;

  //   setContacts(newContacts);
   
  //   alert('Data edited')
  // };

  // const handleEditClick = (event, contact) => {
  //   event.preventDefault();
  //   setEditContactId(contact.id);

  //   const formValues = {
  //     fullName: contact.fullName,
  //     email: contact.email,
  //     employeeId: contact.employeeId,
  //     mobile: contact.mobile,
  //     amount: contact.amount
  //   };

  //   setEditFormData(formValues);
   
  // };

  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // };

  // const handleDeleteClick = (contactId) => {
  //   const newContacts = [...contacts];

  //   const index = contacts.findIndex((contact) => contact.id === contactId);

  //   newContacts.splice(index, 1);

  //   setContacts(newContacts);
  // };
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      employeeId: addFormData.employeeId,
      mobile: addFormData.mobile,
      amount: addFormData.amount
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    alert('Data Added')
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      employeeId: editFormData.employeeId,
      mobile: editFormData.mobile,
      amount: editFormData.amount
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
          email: contact.email,
          employeeId: contact.employeeId,
          mobile: contact.mobile,
          amount: contact.amount
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <>
      <section id='table1'>
        <div className="container">

          <div className="d-flex justify-content-center">
            {/* <!-- Button trigger modal --> */}
            <div className=''>
              <div className='add-em' data-toggle="modal" data-target="#exampleModal">
                <h2>Add Employees</h2>
              </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Employee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleAddFormSubmit}>
                      <input
                        type="text"
                        name="fullName"
                        required="required"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                      />
                      <input
                        type="email"
                        name="email"
                        required="required"
                        placeholder="Enter an email..."
                        onChange={handleAddFormChange}
                      />
                      <input
                        type="text"
                        name="employeeId"
                        required="required"
                        placeholder="Enter employee Id..."
                        onChange={handleAddFormChange}
                      />
                      <input
                        type="text"
                        name="mobile"
                        required="required"
                        placeholder="Enter mobile..."
                        onChange={handleAddFormChange}
                      />
                      <input
                        type="text"
                        name="amount"
                        required="required"
                        placeholder="Enter amount..."
                        onChange={handleAddFormChange}
                      />


                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className='btn btn-primary' >Add</button>
                      </div>
                    </form>

                  </div>

                </div>
              </div>
            </div>
          </div>







          <div className="d-flex justify-content-center">
            <form onSubmit={handleEditFormSubmit}>
             
                <div  className='table-header' style={{ background: " rgba(253, 150, 68, 0.97)" }}>
                  
                    <div>Name</div>
                    <div>Email Id</div>
                    <div>Employee Id</div>
                    <div>Mobile No</div>
                    <div> Amount 
                      Receive</div>
                    <div>Action</div>

               
                </div>
                <tbody>
                  {contacts.map((contact) => (
                    <Fragment>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
                          contact={contact}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
             
            </form>


          </div>
          <div className='submit-cmp-wrap'>
            <div className='submit-cmp'>
              <h2>Submit Campaign</h2>
            </div>

          </div>

        </div>
      </section>

    </>
  )
}

export default Table