import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from './store/slices/UserSlices';

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  const deleteUser = (id) => {
    // Show confirmation dialog
    const shouldDelete = window.confirm('Are you sure you want to delete this user?');

    // If the user confirms, delete the user
    if (shouldDelete) {
      dispatch(removeUser(id));
    }
  };

  return (
    <ul className="list-group d-flex justify-content-between">
      {data.map((user, id) => (
        <li className="list-group-item list-item d-flex justify-content-between align-items-center" key={id}>
          {user}
          <button className="btn btn-danger" onClick={() => deleteUser(id)}>
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayUsers;
