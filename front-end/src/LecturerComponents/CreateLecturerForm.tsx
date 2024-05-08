import React, { useState } from 'react';
import axios from 'axios';

const CreateLecturerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'full-time',
    photo: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      await axios.post('/lecturers', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', type: 'full-time', photo: null });
    } catch (err) {
      setError('Failed to create lecturer');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {success && <p>Lecturer created successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="full-time">Full-time</option>
          <option value="visiting">Visiting</option>
        </select>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Lecturer'}
        </button>
      </form>
    </div>
  );
};

export default CreateLecturerForm;