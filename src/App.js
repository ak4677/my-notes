import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import NoteState from './context/notes/NoteState';
import ModeState from './context/mode/ModeState';


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
            </Routes>
          </BrowserRouter>
        </NoteState>
      </ModeState>
    </>
  );
}

export default App;
