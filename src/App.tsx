import React, { useState, useEffect } from 'react';
import { Moon, Sun, Heart, Flower2, Trees as Tree, Music, Bird } from 'lucide-react';
import MemoryGarden from './components/MemoryGarden';
import Navigation from './components/Navigation';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-b from-sky-100 to-green-50'}`}>
      {showIntro ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white z-50">
          <div className="text-center space-y-6 animate-fade-in max-w-2xl px-4">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-pink-500">
              <img
                src="https://i.postimg.cc/8PSr6Cbc/upscalemedia-transformed-5.jpg"
                alt="Flor María Martínez Rodríguez"
                className="w-full h-full object-cover"
              />
            </div>
            <Heart className="w-16 h-16 mx-auto text-pink-500 animate-pulse" />
            <h1 className="text-4xl font-serif">En memoria de mi madre</h1>
            <h2 className="text-2xl font-serif text-pink-400">Flor María Martínez Rodríguez</h2>
            <p className="italic text-xl">"Su amor florece eternamente en este jardín virtual"</p>
            <p className="text-gray-400">Con amor infinito, tu hijo Otto</p>
          </div>
        </div>
      ) : (
        <>
          <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <main className="container mx-auto px-4 py-8">
            <MemoryGarden isDarkMode={isDarkMode} />
          </main>
          <AudioPlayer />
        </>
      )}
    </div>
  );
}

export default App;