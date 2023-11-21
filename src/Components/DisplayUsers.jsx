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
    <table className="table table-hover table-bordered mx-auto text-center ">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, id) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>

            <td>
              <button className="btn btn-danger" onClick={() => deleteUser(id)}>
                <MdDeleteForever />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayUsers;
