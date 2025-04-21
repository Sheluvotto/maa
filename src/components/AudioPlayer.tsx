import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3');
    audioRef.current.loop = true;
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex space-x-2">
      <button
        onClick={toggleMute}
        className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-gray-600" />
        ) : (
          <Volume2 className="w-6 h-6 text-gray-600" />
        )}
      </button>
      <button
        onClick={togglePlay}
        className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-pink-500" />
        ) : (
          <Play className="w-6 h-6 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;