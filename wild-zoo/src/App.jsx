import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css';
import AnimalList from './components/navbar/animal-cards-home/AnimalList';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <AnimalList/>


    </div>
  )
}

export default App
