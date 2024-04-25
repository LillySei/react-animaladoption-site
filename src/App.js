import AnimalInformation from './components/AnimalInformation';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import Login from './components/Login';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUsername] = useState("")

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
    <Navbar loggedIn={loggedIn} userName={userName} setLoggedIn={setLoggedIn} setUsername={userName}></Navbar>
    <Routes>
    <Route path="/" element={<Shop />}/>
    <Route path="/animal-information" element={<AnimalInformation username={userName} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
    < Route path='/login' element={<Login userName={userName} setUsername={setUsername} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>

    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
