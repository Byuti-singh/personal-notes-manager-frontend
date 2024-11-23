import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, onEdit, onDelete }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <div className="note-card" key={note._id}>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    <small>Category: {note.category}</small>
                    <div className="actions">
                        <button onClick={() => onEdit(note)}>Edit</button>
                        <button onClick={() => onDelete(note._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
