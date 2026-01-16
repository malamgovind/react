import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );


        const data = res.data.map(u => ({
          ...u,
          status: u.id % 2 === 0 ? "Active" : "Inactive"
        }));

        setUsers(data);
        setFilteredUsers(data);


      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) &&
      (city ? u.address.city === city : true) &&
      (status ? u.status === status : true)
    );

    setFilteredUsers(filtered);
  }, [search, city, status, users]);
  const cities = [...new Set(users.map(u => u.address.city))];

  return (
    <div>
      <input type="text" placeholder="Search by name" value={search}
        onChange={e => setSearch(e.target.value)}/>

      <select value={city} onChange={e => setCity(e.target.value)}>
        <option value="">All Cities</option>
        {cities.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.address.city}</td>
              <td className={u.status === "Active" ? "active" : "inactive"}>
  {u.status}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
