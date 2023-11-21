import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from './store/slices/UserSlices';

const DisplayUsers = () => {
  const allUsers = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = allUsers.filter(
    (user) =>
      user.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteUser = (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this user?');
    if (shouldDelete) {
      dispatch(removeUser(id));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by First Name, or Email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control m-2 w-25"
      />

      <table className="table table-hover table-bordered mx-auto text-center table-condensed">
        <thead>
          <tr className="table-dark">
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, id) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{user.first}</td>
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
    </div>
  );
};

export default DisplayUsers;
