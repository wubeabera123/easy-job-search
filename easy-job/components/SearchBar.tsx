import { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (keyword: string, area: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [area, setArea] = useState('Ethiopia');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword, area);
      setKeyword('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 bg-white rounded-full shadow-lg p-2 border border-blue-200 animate-in fade-in duration-300"
      >
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search jobs (e.g., developer, accountant)"
          className="flex-1 px-4 py-2 text-gray-700 focus:outline-none rounded-l-full"
        />
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Area (e.g., Ethiopia)"
          className="w-32 px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;