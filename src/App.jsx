import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="container">
      <Header valCount={count} />
    </div>
  )
}

export default App
