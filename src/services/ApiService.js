const BASE_URL = 'http://localhost:8099'; // Update with your backend URL

async function fetchJobs() {
  const response = await fetch(`${BASE_URL}/jobs`);
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return response.json();
}

async function submitJob(jobData) {
  const response = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Ensure correct content type
    },
    body: JSON.stringify(jobData),
  });
  if (!response.ok) {
    throw new Error('Failed to submit job');
  }
}


const ApiService = {
  fetchJobs,
  submitJob,
};

export default ApiService;
