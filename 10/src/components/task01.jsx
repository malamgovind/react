import { useState } from 'react'


function Task01() {
  const [isBlocked, setIsBlocked] = useState("false")

  return (
  <>
  <div>
    <h1>
      {isBlocked ? "unblocked" : "blocked"}
    </h1>
    <button onClick={() => setIsBlocked(!isBlocked)}>Toggle</button>
  </div>
  </>
  )
}

export default Task01
