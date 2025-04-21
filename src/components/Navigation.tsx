import React from 'react';
import { Moon, Sun, Heart } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-pink-500" />
          <span className="font-serif text-lg">Jardín de Memorias</span>
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;