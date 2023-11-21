import React from "react";
import DeleteUser from "./DeleteUser";
import fakeUserData from "./api";
import { useDispatch } from "react-redux";
import { addUser } from "./store/slices/UserSlices";
import DisplayUsers from "./DisplayUsers.jsx";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
    // console.log(payload);
  };

  return (
    <>
      <div className="content">
        <div className="admin-details d-flex justify-content-between">
          <h2 className="fw-bolder">List Of User Details</h2>
          <button
            className="btn btn-primary fw-bold m-2"
            onClick={() => addNewUser(fakeUserData())}
          >
            add new user
          </button>
        </div>
        <div>
          <DisplayUsers />
        </div>
        <DeleteUser />
      </div>
    </>
  );
};

export default UserDetails;
