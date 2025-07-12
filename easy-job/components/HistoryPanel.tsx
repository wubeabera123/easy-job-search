import { useState, useEffect } from 'react';
import { History } from 'lucide-react';

interface SearchHistory {
  keyword: string;
  area: string;
  timestamp: string;
}

interface HistoryPanelProps {
  onSelect: (keyword: string, area: string) => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ onSelect }) => {
  const [history, setHistory] = useState<SearchHistory[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    setHistory(storedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.setItem('searchHistory', '[]');
    setHistory([]);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
          <History size={20} /> Search History
        </h2>
        <button
          onClick={clearHistory}
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          Clear
        </button>
      </div>
      {history.length === 0 ? (
        <p className="text-gray-500">No search history yet.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li
              key={index}
              onClick={() => onSelect(item.keyword, item.area)}
              className="p-2 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-200"
            >
              <p className="text-blue-700">{item.keyword} in {item.area}</p>
              <p className="text-sm text-gray-500">{new Date(item.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryPanel;