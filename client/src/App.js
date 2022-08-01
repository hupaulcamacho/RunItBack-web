import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// components
import GGSTCharacters from "./Components/ggstCharacters/ggstCharacters";

import UsersList from "./Components/usersList/UsersList";
import UserDetails from "./Components/userDetails/UserDetails";
import NewUserForm from './Components/newUserForm/newUserForm';
import Signup from './Components/SignUp/Signup';

import EventsList from "./Components/eventsList/EventsList";
import EventDetails from "./Components/eventDetails/eventDetails";

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
          <Route path='/users/:id' element={<UserDetails />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/users/new' element={<NewUserForm />} />
          <Route path='/events' element={<EventsList />} />
          <Route path='/events/:id' element={<EventDetails />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
