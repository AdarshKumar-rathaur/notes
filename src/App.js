import React, { useState } from 'react';
import { Routes, Route } from "react-router";
import NavbarNotes from './Components/NavbarNotes';
import About from './Components/About';
import Home from './Components/Home';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [notesObj, setNotesObj] = useState(getLocalStorage('notes'));
  const [titleObj, setTitleObj] = useState(getLocalStorage('title'));

  function getLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  // Search
  const filteredNotes = notesObj.map((note, index) =>
    ({ note, title: titleObj[index], index })).filter(({ note, title }) =>
      note.toLowerCase().includes(searchTerm) || title.toLowerCase().includes(searchTerm));

  return (
    <div>
      <NavbarNotes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route index element={<Home filteredNotes={filteredNotes} notesObj={notesObj} titleObj={titleObj} setNotesObj={setNotesObj} setTitleObj={setTitleObj} getLocalStorage={getLocalStorage} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
