import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader2 } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  date_posted: string;
  url: string;
  source: string;
  description: string;
  requirements: string;
}

const JobDetails: React.FC = () => {
  const router = useRouter();
  const { jobId } = router.query;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (jobId) {
      fetch(`https://ardaa-backend.onrender.com/jobs/${jobId}`)
        .then((res) => res.json())
        .then((data) => {
          setJob(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [jobId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }

  if (!job) {
    return <div className="text-center text-gray-500">Job not found</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg animate-in fade-in duration-300">
      <h1 className="text-2xl font-bold text-blue-700">{job.title}</h1>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-sm text-gray-500">Posted: {job.date_posted}</p>
      <p className="text-sm text-blue-500">Source: {job.source}</p>
      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
      >
        Apply Now
      </a>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-blue-600">Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-blue-600">Requirements</h2>
        <p className="text-gray-700">{job.requirements}</p>
      </div>
    </div>
  );
};

export default JobDetails;