import React, { useState } from 'react'

function Table01() {
  const users = [
    { id: 1, title: 'Malam', body: 'Govind', phone: '6351782424' },
    { id: 2, title: 'Bhut', body: 'Siddh', phone: '9923410936' },
    { id: 3, title: 'Baraiya', body: 'Parth', phone: '8511331398' },
  ]

  const [search, setSearch] = useState("")

  const filteredUsers = users.filter(
    user => user.title.toLowerCase().includes(search.toLowerCase()) || user.phone.includes(search)
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Title or Phone"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table01
