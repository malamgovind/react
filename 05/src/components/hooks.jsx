import { useState } from "react";
function Hooks() {
  const [count, setCount] = useState(0);
  const [name, setGovind] = useState("");
  const data = ["Govind", "Siddh", "Parth", "divyesh", "om", "ajay", "ram", "shyam", "krishna", "arjun"];

  const namesclick = () => {
    const randomname = Math.floor(Math.random() * data.length);
    setGovind(data[randomname]);
  }

  const handleclick = () => {
    setCount(count + 1);
  };

  const handlesclick = () => {
    setCount(count - 1);
  };
  return (
    <>
    
      <div>
        {/* <button onClick={handleclick}>count is {count}</button> */}

        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        {/* <button onClick={handlesclick}>count is {count}</button> */}
        <button onClick={handlesclick}>-</button>
      </div>
        <h2>count is {count}</h2>
        <div>
        <button onClick={namesclick}>Random Name</button>
        <h3>{name}</h3>
        </div>
    </>
  );
}

export default Hooks;