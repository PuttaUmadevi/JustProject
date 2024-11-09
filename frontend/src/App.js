
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Allstyles/styles.css';
import './components/HHeader';
import './components/FFooter';
import './pages/Home';
import './pages/Books';
// import './pages/Places';
import './pages/HauntedPage'
import './pages/Movies';
import './placesdata/HauntedHouse';
import './components/SignIn';
import './components/Register';
// import './Data/HauntedHouse'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HHeader from './components/HHeader';
import FFooter from './components/FFooter';
import Home from './pages/Home';
import Books from './pages/Books';
import Places from  './pages/HauntedPage';
import Movies from './pages/Movies';
import HauntedHouse from './placesdata/HauntedHouse';
import AddHaunt from './pages/AddHaunt';

import Register from './components/Register';
import SignIn from './components/SignIn';
import ContactUs from './pages/ContactUs';
// import HauntedHouse from './Data/HauntedHouse';

function App() {
  return (
    <>
      {/* <Router> */}
        <HHeader />
        <Router>
          
          <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Places" element={<Places />} />
          <Route path ="/Movies" element={<Movies />} />
          <Route path ='/signin' element={<SignIn />} />
          <Route path ='/Register' element={<Register/>}/>
          {/* <Route path="Places" element={<Places />} /> */}
          <Route path="/HauntedHouse" element={<HauntedHouse />} />
          <Route path ="/AddHaunt" element={<AddHaunt/>}/>
          <Route path="/ContactUs" element ={<ContactUs/>}/>

          </Routes>
        <FFooter />
      </Router>
  </>
  );
}
export default App;