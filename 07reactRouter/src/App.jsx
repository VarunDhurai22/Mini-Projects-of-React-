import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/Header'
import Home from './assets/components/Home/Home'
import Footer from './assets/components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  );
}

export default App
