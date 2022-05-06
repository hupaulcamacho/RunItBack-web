import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// components
import GGSTCharacters from "./Components/ggstCharacters/ggstCharacters";
import UsersList from "./Components/usersList/UsersList";
import NavBar from './Components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<GGSTCharacters />}/>
          <Route path='/users' element={<UsersList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
