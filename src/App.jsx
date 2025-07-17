import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element />
      <Route path="/course/:id" element />
    </Routes>
  )
}

export default App
