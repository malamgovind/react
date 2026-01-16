import React from "react";
import { useState } from "react";

function Task01() {
  const users = [
    {
      index: 1,
      name: "Malam Govind",
      profile: "Developer",
      number: "6351782424",
      email: "malamgovind@gmail.com",
      city: "Ahmedabad",
      age: 20,
      status: "Active",
    },
    {
      index: 2,
      name: "Bhut Siddh",
      profile: "Designer",
      number: "9123456780",
      email: "bhutsiddh@gmail.com",
      city: "Surat",
      age: 19,
      status: "Inactive",
    },
    {
      index: 3,
      name: "Neha Mehta",
      profile: "Tester",
      number: "9988776655",
      email: "neha@gmail.com",
      city: "Vadodara",
      age: 18,
      status: "Active",
    },
    {
      index: 4,
      name: "Priya Joshi",
      profile: "HR",
      number: "9012345678",
      email: "priya@gmail.com",
      city: "Rajkot",
      age: 28,
      status: "Active",
    },
    {
      index: 5,
      name: "Karan Verma",
      profile: "Manager",
      number: "9090909090",
      email: "karan@gmail.com",
      city: "Bhavnagar",
      age: 32,
      status: "Inactive",
    },
    {
      index: 6,
      name: "Sneha Desai",
      profile: "Developer",
      number: "9876501234",
      email: "sneha@gmail.com",
      city: "Junagadh",
      age: 22,
      status: "Active",
    },
    {
      index: 7,
      name: "Ravi Kumar",
      profile: "Support",
      number: "9345678901",
      email: "ravi@gmail.com",
      city: "Anand",
      age: 25,
      status: "Active",
    },
    {
      index: 8,
      name: "Pooja Singh",
      profile: "Marketing",
      number: "9567890123",
      email: "pooja@gmail.com",
      city: "Gandhinagar",
      age: 27,
      status: "Inactive",
    },
    {
      index: 9,
      name: "Vikas Patel",
      profile: "Sales",
      number: "9786543210",
      email: "vikas@gmail.com",
      city: "Mehsana",
      age: 32,
      status: "Active",
    },
    {
      index: 10,
      name: "Anjali Sarma",
      profile: "Content Writer",
      number: "9898989898",
      email: "anjali@gmail.com",
      city: "Nadiad",
      age: 32,
      status: "Active",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search name,email,city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    <table border="1">
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Profile</th>
          <th>Number</th>
          <th>Email</th>
          <th>City</th>
          <th>Age</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user.index}>
            <td>{user.index}</td>
            <td>{user.name}</td>
            <td>{user.profile}</td>
            <td>{user.number}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.age}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Task01;
