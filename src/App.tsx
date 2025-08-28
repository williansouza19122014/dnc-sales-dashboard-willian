import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Leads, Login, Profile, Registration } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route  path="/cadastro" element={<Registration/>}/>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/Leads" element={<Leads/>}/>
        <Route  path="/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
  
}

export default App
