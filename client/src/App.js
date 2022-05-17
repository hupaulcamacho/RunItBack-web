import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// components
import GGSTCharacters from "./Components/ggstCharacters/ggstCharacters";

import UsersList from "./Components/usersList/UsersList";
import UserDetails from "./Components/userDetails/UserDetails";
import NavBar from './Components/navbar/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path='/characters' element={<GGSTCharacters />}/> */}
          <Route path='/users/:id' element={<UserDetails />}/>
          <Route path='/users' element={<UsersList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
