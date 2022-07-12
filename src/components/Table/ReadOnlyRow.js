import React from "react";
import './Table1.css'
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="data-row">
      <div>{contact.fullName}</div>
      <div>{contact.email}</div>
      <div>{contact.employeeId}</div>
      <div>{contact.mobile}</div>
      <div>{contact.amount}</div>
      <div>
        <div className="btn-wrap">
          <button
            className="edit-btn"
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </button>
          <button    className="edit-btn" type="button" onClick={() => handleDeleteClick(contact.id)}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReadOnlyRow;