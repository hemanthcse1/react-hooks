import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComponent from './MyComponent'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <MyComponent/> */}

     <Counter/>
    </div>
  )
}

export default App
