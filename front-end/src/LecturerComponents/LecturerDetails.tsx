import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LecturerDetails = ({ lecturerId }) => {
  const [lecturer, setLecturer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLecturer = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/lecturers/${lecturerId}`);
        setLecturer(response.data);
      } catch (err) {
        setError('Failed to fetch lecturer data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLecturer();
  }, [lecturerId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!lecturer) {
    return <div>Lecturer not found</div>;
  }

  return (
    <div>
      <h2>{lecturer.name}</h2>
      <p>Email: {lecturer.email}</p>
      <p>Phone: {lecturer.phone}</p>
      <p>Type: {lecturer.type}</p>
      {lecturer.photo && <img src={`/photos/${lecturer.photo}`} alt={lecturer.name} />}
    </div>
  );
};

export default LecturerDetails;