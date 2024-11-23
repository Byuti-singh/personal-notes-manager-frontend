import React, { useState, useEffect } from 'react';
import './NoteForm.css';

const NoteForm = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Others');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
            setCategory(initialData.category || 'Others');
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert('Title and Description are required!');
            return;
        }
        onSubmit({ title, description, category });
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label>Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default NoteForm;
