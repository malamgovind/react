import React, { useState } from "react";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";

function Task02() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        Toggle
      </button>
      {isLogin ? <About /> : <Home />}

    </div>
  );
}
export default Task02;
