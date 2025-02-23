import './App.css'
import Favorities from './pages/favorites';
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
function App() {
  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorities' element={<Favorities />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
