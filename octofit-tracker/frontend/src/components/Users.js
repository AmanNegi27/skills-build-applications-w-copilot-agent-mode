import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Users data:', data);
        if (Array.isArray(data)) {
          setUsers(data);
        } else if (data.results) {
          setUsers(data.results);
        } else {
          setUsers([]);
        }
      })
      .catch(err => {
        console.log('Error fetching Users:', err);
        setUsers([]);
      });
  }, []);
  return (
    <div className="card p-4">
      <h2 className="heading">Users</h2>
      <table className="table table-striped">
        <thead className="table-secondary">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.username || JSON.stringify(user)}</td>
              <td>{user.email || 'N/A'}</td>
              <td>{user.role || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
