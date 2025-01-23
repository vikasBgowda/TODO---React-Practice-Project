import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoIndex } from './TodoApp.jsx/TodoIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoIndex/>
    </>
  )
}

export default App
