import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
