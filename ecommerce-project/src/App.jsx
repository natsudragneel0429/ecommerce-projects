import './App.css'
import { HomePage } from './pages/Homepage'
import { Routes, Route } from 'react-router'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    
  )
}

export default App
