import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import NoteState from './context/notes/NoteState';
import ModeState from './context/mode/ModeState';
import AddNotes from './components/addnoets/AddNotes';


function App() {
  return (
    <>
      <ModeState>
        <NoteState>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={"heloworld"} />
              <Route path="home" element={<Home />} />
              <Route path="Add-notes" element={<AddNotes />} />
            </Routes>
          </BrowserRouter>
        </NoteState>
      </ModeState>
    </>
  );
}

export default App;
