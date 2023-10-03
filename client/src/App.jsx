import { Route, Routes, useLocation } from "react-router-dom"
import { Detail, Form, Home, Landing } from "./views"
import NavBar from "./components/NavBar/navBar"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
};

export default App