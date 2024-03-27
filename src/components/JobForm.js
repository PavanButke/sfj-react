import React, { useState } from 'react';

function JobForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the onSubmit function passed from the parent component
    onSubmit(formData);
    // Clear the form after submission
    setFormData({ name: '', duration: '' });
  };

  return (
    <div className="job-form">
      <h2>Submit a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Job Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (HH:MM:SS):</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
}

export default JobForm;
