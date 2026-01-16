import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  const [count, setCount] = useState(0);

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
          placeholder="Search user by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "6px", width: "250px" }}
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul style={{ marginTop: "10px" }}>
          {filteredData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
