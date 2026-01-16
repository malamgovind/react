import { useState } from 'react'
import Hooks from './components/hooks.jsx'
import Task01 from './components/task01.jsx'
import Task02 from './components/task02.jsx'
import Task03 from './components/task03.jsx'
import "./App.css"
function App() {
  return (
<>
<div class="container">
  <div class="one">
   <Hooks />
</div>
<div class="two">
    <Task01 />
</div>
<div class="three">
  <Task02 />
</div>
<div class="four"> 
  <Task03 />
</div>
</div>
</>
  )
}

export default App;