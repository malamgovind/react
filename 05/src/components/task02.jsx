import { useState } from "react";
function task02() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    alert("name is " + name + " email is " + email);
  };

  return (
    <form onSubmit={handlesubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  required/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )

}
export default task02;