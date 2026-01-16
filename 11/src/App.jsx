import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(res.data);
    };
    fetchData();
  }, []);


  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = data.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(data.length / postsPerPage);

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={() => setCurrentPage(currentPage - 1)} 
      disabled={currentPage === 1}>
        Pre
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={() => setCurrentPage(currentPage + 1)} 
      disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default App;