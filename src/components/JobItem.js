// JobItem.js

import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <h3>{job.name}</h3>
      <p>Status: {job.status}</p>
      <p>Duration: {job.duration}</p>
    </div>
  );
};

export default JobItem;
