import React, { useState } from 'react'
import Textarea from './Textarea';
import NoteCard from './NoteCard';

export default function Home({ filteredNotes, notesObj, titleObj, setNotesObj, setTitleObj, getLocalStorage }) {
    const [time, setTime] = useState(getLocalStorage('time'));

    function updateNote(index, type, value) {
        if (type === 'title') {
            const newTitles = [...titleObj];
            newTitles[index] = value;
            setTitleObj(newTitles);
            localStorage.setItem("title", JSON.stringify(newTitles));
        } else {
            const newNotes = [...notesObj];
            newNotes[index] = value;
            setNotesObj(newNotes);
            localStorage.setItem("notes", JSON.stringify(newNotes));
        }
    }

    function addNote(title, note) {
        const newTitles = [...titleObj, title];
        const newNotes = [...notesObj, note];
        const myDate = new Date();
        const dateArray = [
            myDate.getFullYear(),
            myDate.getMonth(),
            myDate.getDate(),
            myDate.getHours(),
            myDate.getMinutes()
        ];
        setTitleObj(newTitles);
        setNotesObj(newNotes);
        setTime(dateArray);
        localStorage.setItem("title", JSON.stringify(newTitles));
        localStorage.setItem("notes", JSON.stringify(newNotes));
        localStorage.setItem("time", JSON.stringify(dateArray));
    }

    function deleteNote(index) {
        const updatedNotes = [...notesObj];
        const updatedTitle = [...titleObj];
        updatedNotes.splice(index, 1);
        updatedTitle.splice(index, 1);
        setNotesObj(updatedNotes);
        setTitleObj(updatedTitle);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        localStorage.setItem("title", JSON.stringify(updatedTitle));
    }

    return (
        <div className="container my-3">
            <h1>Welcome to Notes</h1>
            <Textarea onAdd={addNote} time={time} />
            <hr />
            <h1>Your Notes</h1>
            <hr />
            <div id="notes" className="row container-fluid">
                {filteredNotes.length === 0 ? (<p className='text-muted'>No notes found.</p>) : (filteredNotes.map(({ note, title, index }) => (
                    <NoteCard key={index} Title={title} Note={note} index={index} deleteNote={deleteNote} updateNote={updateNote} />
                )))}
            </div>
        </div>
    )
}
