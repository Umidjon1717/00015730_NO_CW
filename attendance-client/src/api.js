import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

export const fetchRecords = () => API.get('/attendance');
export const createRecord = (data) => API.post('/attendance', data);
export const updateRecord = (id, data) => API.put(`/attendance/${id}`, data);
export const deleteRecord = (id) => API.delete(`/attendance/${id}`);
