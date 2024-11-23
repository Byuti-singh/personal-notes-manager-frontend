import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm/NoteForm';
import { updateNote } from '../services/noteService';

const EditNotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleUpdateNote = async (note) => {
        await updateNote(id, note);
        navigate('/');
    };

    return (
        <div>
            <h1>Edit Note</h1>
            <NoteForm onSubmit={handleUpdateNote} />
        </div>
    );
};

export default EditNotePage;
