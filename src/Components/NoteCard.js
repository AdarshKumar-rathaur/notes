import React, { useState } from 'react'

export default function NoteCard({ Title, Note, index, deleteNote, updateNote }) {
    const [title, setTitle] = useState(Title);
    const [note, setNote] = useState(Note);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingNote, setIsEditingNote] = useState(false);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleNoteChange = (e) => setNote(e.target.value);

    const handleTitleBlur = () => {
        if (title.trim() === '') {
            alert('Title cannot be empty');
        } else {
            updateNote(index, 'title', title);
        }
        setIsEditingTitle(false);
    };

    const handleNoteBlur = () => {
        if (note.trim() === '') {
            alert('Note cannot be empty');
        } else {
            updateNote(index, 'note', note);
        }
        setIsEditingNote(false);
    };

    // Aisa nhi kar skte kyonki state me sirf data de skte hai element nhi isliye flag banana para
    /*
        const handleBlur = (event) => {
            if (event.target.id.includes('title')) {
                if (inputValue.trim() === '') {
                    alert('This field cannot be empty.');
                } else {
                    setTitle(inputValue);
                    updateNote(index, 'title', inputValue);
                    setInputValue('');
                }
            } else if (event.target.id.includes('text')) {
                if (inputValue.trim() === '') {
                    alert('This field cannot be empty.');
                } else {
                    setNote(inputValue);
                    updateNote(index, 'note', inputValue);
                    setInputValue('');
                }
            }
        };
    
        const handleChange = (event) => {
            setInputValue(event.target.value);
        };
    
        const handleDoubleClick = (event) => {
            if (event.target.id.includes('title')) {
                if (inputValue.length === 0) {
                    setInputValue(title);
                    setTitle(<textarea className="textarea form-control" id="textarea" value={inputValue}
                        onChange={handleChange}
                        onBlur={handleBlur} />)
                }
            }
            else if (event.target.id.includes('text')) {
                if (inputValue.length === 0) {
                    setInputValue(note);
                    setNote(<textarea className="textarea form-control" id="textarea" value={inputValue}
                        onChange={handleChange}
                        onBlur={handleBlur} />)
                }
            }
        }
    */
    return (
        <div className="noteCard my-2 mx-2 card" style={{ width: '18rem' }}>
            <div className="card-body">
                {isEditingTitle ? (
                    <textarea
                        className="form-control mb-2"
                        value={title}
                        onChange={handleTitleChange}
                        onBlur={handleTitleBlur}
                        autoFocus
                    />
                ) : (
                    <h5
                        className="card-title"
                        onDoubleClick={() => setIsEditingTitle(true)}
                    >
                        {title}
                    </h5>
                )}

                {isEditingNote ? (
                    <textarea
                        className="form-control mb-2"
                        value={note}
                        onChange={handleNoteChange}
                        onBlur={handleNoteBlur}
                        autoFocus
                    />
                ) : (
                    <p
                        className="card-text"
                        onDoubleClick={() => setIsEditingNote(true)}
                    >
                        {note}
                    </p>
                )}

                <button onClick={() => deleteNote(index)} className="btn btn-danger mt-2">
                    Delete Note
                </button>
            </div>
        </div>
    );

}

