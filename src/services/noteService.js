import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getNotes = async (filters) => {
    const response = await axios.get(`${API_URL}/notes`, { params: filters });
    return response.data;
};

export const addNote = async (note) => {
    const response = await axios.post(`${API_URL}/notes`, note);
    return response.data;
};

export const updateNote = async (id, updatedNote) => {
    const response = await axios.put(`${API_URL}/notes/${id}`, updatedNote);
    return response.data;
};

export const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/notes/${id}`);
};
