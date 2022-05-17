import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/ContactPage/Contact';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='appointment' element={<Appointment />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
