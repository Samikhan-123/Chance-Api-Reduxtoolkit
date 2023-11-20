import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearAllUsers } from './store/slices/UserSlices';

const DeleteUser = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const deleteAllData = () => {
    const shouldDelete = window.confirm('Cleared data will not be restored. Are you sure you want to clear all data?');

    if (shouldDelete) {
      dispatch(clearAllUsers());
      setShowAlert(true);

      // Hide the alert after 3 seconds 
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div>
      <button className='btn btn-dark m-2 fw-bold' onClick={deleteAllData}>
        clear data
      </button>

      {showAlert && (
        <div className="alert alert-info m-2" role="alert">
          All data has been cleared!
        </div>
      )}
    </div>
  );
};

export default DeleteUser;
