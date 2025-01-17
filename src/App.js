import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
    <h1>hellow</h1>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
