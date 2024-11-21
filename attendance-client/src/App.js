import React, { useEffect, useState } from 'react';
import { fetchRecords, createRecord, updateRecord, deleteRecord } from './api';

function App() {
    const [records, setRecords] = useState([]);
    const [form, setForm] = useState({ name: '', date: '', status: '' });

    useEffect(() => {
        fetchRecords().then((res) => setRecords(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createRecord(form).then(() => {
            fetchRecords().then((res) => setRecords(res.data));
        });
    };

    const handleDelete = (id) => {
        deleteRecord(id).then(() => {
            fetchRecords().then((res) => setRecords(res.data));
        });
    };

    return (
        <div>
            <h1>Attendance Records</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
                <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                    <option value="">Status</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
                <button type="submit">Add</button>
            </form>
            <ul>
                {records.map((record) => (
                    <li key={record.id}>
                        {record.name} - {record.date} - {record.status}
                        <button onClick={() => handleDelete(record.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
