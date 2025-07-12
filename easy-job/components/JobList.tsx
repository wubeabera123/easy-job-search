import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  date_posted: string;
  url: string;
  source: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-500"
        >
          <Link href={`/jobs/${job.id}`}>
            <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-sm text-gray-500">Posted: {job.date_posted}</p>
            <p className="text-sm text-blue-500">Source: {job.source}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default JobList;