'use client'
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';
import HistoryPanel from '../components/HistoryPanel';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  date_posted: string;
  url: string;
  source: string;
}

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (keyword: string, area: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://ardaa-backend.onrender.com/jobs?area=${encodeURIComponent(area)}&keyword=${encodeURIComponent(keyword)}&limit=20`);
      const data = await response.json();
      setJobs(data);
      const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
      history.unshift({ keyword, area, timestamp: new Date().toISOString() });
      localStorage.setItem('searchHistory', JSON.stringify(history.slice(0, 10)));
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <SearchBar onSearch={handleSearch} />
      <HistoryPanel onSelect={handleSearch} />
      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
        </div>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
};

export default Home;