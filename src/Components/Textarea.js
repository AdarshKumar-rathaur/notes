import React, { useState } from 'react'


export default function Textarea({ onAdd, time }) {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleAdd = () => {
        if (!title.trim() || !details.trim()) {
            alert("Both title and details are required.");
            return;
        }
        onAdd(title, details);
        setTitle('');
        setDetails('');
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="input-group mb-3">
                    <span className="input-group-text">Title</span>
                    <input className="form-control" id="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-floating">
                    <textarea className="form-control" id="addTxt" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)}
                        style={{ height: "100px" }}></textarea>
                    <label htmlFor="addTxt">Details</label>
                </div>
                <p className="card-text"><small className="text-body-secondary">{time.length ? `Last updated at ${months[time[1]]} ${time[2]}, ${time[0]} ${time[3]}:${String(time[4]).padStart(2, '0')}`: 'No updates yet'}</small></p>
                <button className="btn btn-primary" onClick={handleAdd}>Add Note</button>
            </div>
        </div>
    )
}
