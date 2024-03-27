import React, { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import ApiService from './services/ApiService';
import WebSocketService from './services/WebSocketService';
import './styles/App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from the backend when the component mounts
    async function fetchJobs() {
      try {
        const jobsData = await ApiService.fetchJobs();
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }
    fetchJobs();

    // Connect to WebSocket server
    const ws = WebSocketService.connectWebSocket((message) => {
      // Update job status based on WebSocket message
      setJobs((prevJobs) => {
        const updatedJobs = prevJobs.map((job) =>
          job.id === message.id ? { ...job, status: message.status } : job
        );
        return updatedJobs;
      });
    });

    // Cleanup WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const handleSubmitJob = async (jobData) => {
    try {
      // Submit job to the backend
      await ApiService.submitJob(jobData);

      setJobs((prevJobs) => [...prevJobs, jobData]);
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <div className="App">
      <h1>Job Scheduler</h1>
      <JobForm onSubmit={handleSubmitJob} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
