import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Flower2, Trees as Tree, Star } from 'lucide-react';
import { Memory } from '../types';

interface AddMemoryModalProps {
  onClose: () => void;
  onAdd: (memory: Memory) => void;
  isDarkMode: boolean;
}

const AddMemoryModal: React.FC<AddMemoryModalProps> = ({ onClose, onAdd, isDarkMode }) => {
  const [formData, setFormData] = useState({
    type: 'flower',
    title: '',
    content: '',
    image: '',
    author: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: `memory-${Date.now()}`,
      ...formData,
      createdAt: new Date(),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className={`relative w-full max-w-lg rounded-xl p-6 ${
          isDarkMode ? 'bg-slate-800' : 'bg-white'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className={`text-2xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Plantar un nuevo recuerdo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className={`block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Tipo de recuerdo
            </label>
            <div className="flex space-x-4">
              {['flower', 'tree', 'star'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, type })}
                  className={`p-3 rounded-lg flex items-center space-x-2 ${
                    formData.type === type
                      ? isDarkMode
                        ? 'bg-pink-500 text-white'
                        : 'bg-pink-100 text-pink-700'
                      : isDarkMode
                      ? 'bg-slate-700 text-gray-300'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {type === 'flower' && <Flower2 className="w-5 h-5" />}
                  {type === 'tree' && <Tree className="w-5 h-5" />}
                  {type === 'star' && <Star className="w-5 h-5" />}
                  <span className="capitalize">{type}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className={`block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Título
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full p-2 rounded-lg ${
                isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-100'
              }`}
              required
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Mensaje
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className={`w-full p-2 rounded-lg ${
                isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-100'
              }`}
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              URL de imagen (opcional)
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className={`w-full p-2 rounded-lg ${
                isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-100'
              }`}
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Tu nombre
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className={`w-full p-2 rounded-lg ${
                isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-100'
              }`}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Plantar recuerdo
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddMemoryModal;