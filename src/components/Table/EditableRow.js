import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <div className="data-row">
      <div>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="email"
          required="required"
          placeholder="Enter mail..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required="required"
          placeholder="Enter Id..."
          name="employeeId"
          value={editFormData.employeeId}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="mobile"
          value={editFormData.mobile}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required="required"
          placeholder="Enter amount."
          name="amount"
          value={editFormData.amount}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <div className="btn-wrap">
          <button className="edit-btn" type="submit">Save</button>
          <button className="edit-btn " type="" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditableRow;