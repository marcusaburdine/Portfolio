
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation"
import About from "./pages/About/About"
import Home from "./pages/Homepage/Homepage"

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
