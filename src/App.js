import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import NoteState from './context/notes/NoteState';
import ModeState from './context/mode/ModeState';
import AddNotes from './components/addnoets/AddNotes';
import AlertState from './context/alerts/AlertState';
import Alerts from './components/warnings/Alerts';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

function App() {
  return (
    <>
      <AlertState>
        <ModeState>
          <NoteState>
            <BrowserRouter >
              <Navbar />
              <Alerts/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/Add-notes" element={<AddNotes />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>
            </BrowserRouter>
          </NoteState>
        </ModeState>
      </AlertState>
    </>
  );
}

export default App;
