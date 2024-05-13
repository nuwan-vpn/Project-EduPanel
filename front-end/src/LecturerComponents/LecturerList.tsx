import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LecturerList = () => {
  const [lecturers, setLecturers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/lecturers');
        setLecturers(response.data);
      } catch (err) {
        setError('Failed to fetch lecturers');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLecturers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Lecturers</h2>
      <ul>
        {lecturers.map((lecturer) => (
          <li key={lecturer.id}>
            <h3>{lecturer.name}</h3>
            <p>Email: {lecturer.email}</p>
            <p>Phone: {lecturer.phone}</p>
            <p>Type: {lecturer.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LecturerList;