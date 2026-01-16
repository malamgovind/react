import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUsers(res.data);
        setFilteredUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      <div style={{ margin: "20px 0" }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search posts by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "6px", width: "250px" }}
        />

        {loading ? <p>Loading...</p> : null}

        <ul style={{ marginTop: "10px" }}>
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
