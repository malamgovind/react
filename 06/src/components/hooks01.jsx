import { useEffect, useState } from "react";

function Loaderstate() {
  const [msg, setMsg] = useState("Malam");

  useEffect(() => {
    setTimeout(() => {
      setMsg("Govind");
    }, 5000);

    return () => {
      clearInterval();
    };
  });
  return (
    <>
      <h1>Hello {msg}!</h1>
      <p>loader state</p>
    </>
  );
}

export default Loaderstate;
