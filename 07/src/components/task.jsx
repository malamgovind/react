import React, { useState } from 'react'

function Task() {
  const [role, setRole] = useState("All")

  const users = [
    { name: "Malam", role: "admin" },
    { name: "Bhut", role: "user" },
    { name: "Baraiya", role: "user" }
  ]

const filteredUsers = users.filter(user => {
  if (role === "All") {
    return true
  } else {
    return user.role === role
  }
})


  return (
    <div>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="All">All</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Task
