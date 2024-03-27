// JobList.js

import React from 'react';

function JobList({ jobs }) {
  return (
    <div className="job-list">
      <h2>Jobs List</h2>
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.name}</strong> - Duration: {job.duration}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobList;
