import jobs from "../data/jobs";

export function getJobs() {
  return jobs;
}

export function getJobById(jobId) {
  return jobs.find((job) => job.id === jobId);
}