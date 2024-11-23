import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList/NoteList';
import NoteForm from '../components/NoteForm/NoteForm';
import SearchBar from '../components/SearchBar/SearchBar';
import { getNotes, addNote, updateNote, deleteNote } from '../services/noteService';
import './HomePage.css';

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [editingNote, setEditingNote] = useState(null);

    useEffect(() => {
        fetchNotes();
    }, [search, category]);

    const fetchNotes = async () => {
        const filters = { search, category };
        const data = await getNotes(filters);
        setNotes(data);
    };

    const handleAddOrUpdateNote = async (note) => {
        if (editingNote) {
            await updateNote(editingNote._id, note);
        } else {
            await addNote(note);
        }
        setEditingNote(null);
        fetchNotes();
    };

    const handleEditNote = (note) => {
        setEditingNote(note);
    };

    const handleDeleteNote = async (id) => {
        await deleteNote(id);
        fetchNotes();
    };

    return (
        <div className="home-page">
            <h1>Personal Notes Manager</h1>
            <SearchBar onSearch={setSearch} category={category} setCategory={setCategory} />
            <NoteForm
                onSubmit={handleAddOrUpdateNote}
                initialData={editingNote}
            />
            <NoteList
                notes={notes}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
            />
        </div>
    );
};

export default HomePage;
