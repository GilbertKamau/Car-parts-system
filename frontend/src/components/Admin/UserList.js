import React, { useEffect, useState } from 'react';
import userService from '../../Services/userService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
