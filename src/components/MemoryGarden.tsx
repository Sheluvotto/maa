import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Trees as Tree, Star } from 'lucide-react';
import { Memory, Season, GardenState } from '../types';

interface MemoryGardenProps {
  isDarkMode: boolean;
}

const MemoryGarden: React.FC<MemoryGardenProps> = ({ isDarkMode }) => {
  const [gardenState, setGardenState] = useState<GardenState>({
    season: 'spring',
    memories: [
      {
        id: 'photo1',
        type: 'star',
        title: 'Mi Madre Hermosa',
        content: 'Aquí está ella, radiante como siempre, iluminando nuestras vidas con su presencia...',
        image: 'https://i.postimg.cc/G2DHB08v/upscalemedia-transformed-6.jpg',
        author: 'Otto',
        createdAt: new Date(),
      },
      {
        id: 'flower1',
        type: 'flower',
        title: 'Su Sonrisa Eterna',
        content: 'Mamá, tu sonrisa era como un rayo de sol que iluminaba hasta el día más oscuro. Cada vez que cierro mis ojos, puedo verla claramente, dándome fuerzas para seguir adelante.',
        author: 'Otto',
        createdAt: new Date(),
      },
      {
        id: 'tree1',
        type: 'tree',
        title: 'Sus Enseñanzas',
        content: 'Me enseñaste que el amor verdadero es incondicional. Cada lección, cada consejo, cada momento juntos formó la persona que soy hoy. Tu sabiduría sigue guiando mis pasos.',
        author: 'Otto',
        createdAt: new Date(),
      },
      {
        id: 'star1',
        type: 'star',
        title: 'Nuestros Momentos Especiales',
        content: 'Recuerdo con tanto cariño nuestras conversaciones en la cocina, tus abrazos reconfortantes, tu risa contagiosa. Cada momento contigo era un regalo precioso.',
        author: 'Otto',
        createdAt: new Date(),
      },
      {
        id: 'flower2',
        type: 'flower',
        title: 'Su Fortaleza',
        content: 'Tu fortaleza era inspiradora, mamá. Enfrentaste cada desafío con gracia y determinación. Me enseñaste que no hay obstáculo demasiado grande cuando tienes fe y amor en tu corazón.',
        author: 'Otto',
        createdAt: new Date(),
      },
      {
        id: 'tree2',
        type: 'tree',
        title: 'El Legado de su Amor',
        content: 'Tu amor, mamá, es como un árbol fuerte y eterno que sigue creciendo en nuestros corazones. Sus raíces son profundas y sus frutos son los valores que nos inculcaste.',
        author: 'Otto',
        createdAt: new Date(),
      },
      {
        id: 'star2',
        type: 'star',
        title: 'Mi Ángel Guardián',
        content: 'Ahora eres mi estrella más brillante en el cielo, mi ángel guardián. Siento tu presencia en cada momento importante de mi vida, guiándome y protegiéndome como siempre lo hiciste.',
        author: 'Otto',
        createdAt: new Date(),
      },
      {
        id: 'star3',
        type: 'star',
        title: 'Lo Mejor de Mi Vida',
        content: 'Fuiste y siempre serás lo mejor que la vida me pudo dar. Cada día que pasa te extraño más, y aunque tal vez no pude demostrarte todo el amor que sentía, quiero que sepas que eres y serás siempre el amor más grande de mi vida. Me haces más falta que nunca, mamá.',
        author: 'Otto',
        createdAt: new Date(),
      }
    ],
    isWatering: false,
  });

  useEffect(() => {
    const createBackground = () => {
      const container = document.querySelector('.background-container');
      if (!container) return;

      container.innerHTML = '';

      if (isDarkMode) {
        // Create starry night
        for (let i = 0; i < 150; i++) {
          const star = document.createElement('div');
          star.className = 'star animate-twinkle';
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 3}s`;
          container.appendChild(star);
        }

        // Add shooting stars
        for (let i = 0; i < 3; i++) {
          const shootingStar = document.createElement('div');
          shootingStar.className = 'shooting-star animate-shooting-star';
          shootingStar.style.left = `${Math.random() * 100}%`;
          shootingStar.style.top = `${Math.random() * 50}%`;
          shootingStar.style.animationDelay = `${Math.random() * 5}s`;
          container.appendChild(shootingStar);
        }

        // Add nebulas
        for (let i = 0; i < 5; i++) {
          const nebula = document.createElement('div');
          nebula.className = 'nebula animate-nebula';
          nebula.style.left = `${Math.random() * 100}%`;
          nebula.style.top = `${Math.random() * 100}%`;
          nebula.style.animationDelay = `${Math.random() * 8}s`;
          container.appendChild(nebula);
        }
      } else {
        // Create sunny day
        const sun = document.createElement('div');
        sun.className = 'sun animate-sun-rays';
        sun.style.top = '10%';
        sun.style.right = '10%';
        container.appendChild(sun);

        // Add clouds
        for (let i = 0; i < 6; i++) {
          const cloud = document.createElement('div');
          cloud.className = 'cloud animate-cloud';
          cloud.style.top = `${Math.random() * 40 + 5}%`;
          cloud.style.animationDelay = `${Math.random() * 30}s`;
          container.appendChild(cloud);
        }

        // Add birds
        for (let i = 0; i < 4; i++) {
          const bird = document.createElement('div');
          bird.className = 'bird animate-bird';
          bird.innerHTML = '🕊️';
          bird.style.top = `${Math.random() * 30 + 10}%`;
          bird.style.animationDelay = `${Math.random() * 10}s`;
          container.appendChild(bird);
        }
      }
    };

    createBackground();
    window.addEventListener('resize', createBackground);
    return () => window.removeEventListener('resize', createBackground);
  }, [isDarkMode]);

  return (
    <div className={`relative min-h-[90vh] rounded-xl overflow-hidden shadow-xl ${isDarkMode ? 'starry-night' : 'sunny-day'}`}>
      <div className="background-container absolute inset-0 overflow-hidden"></div>
      
      <div className="relative z-10 text-center py-8 px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-500 shadow-2xl"
        >
          <img
            src="https://i.postimg.cc/8PSr6Cbc/upscalemedia-transformed-5.jpg"
            alt="Flor María Martínez Rodríguez"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-3xl md:text-4xl font-serif mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          Flor María Martínez Rodríguez
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`italic text-lg md:text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          "Una vida llena de amor y luz"
        </motion.p>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-8">
        {gardenState.memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className={`glass-effect rounded-lg p-6 flex flex-col items-center space-y-4 ${
              isDarkMode 
                ? 'bg-white/10 text-white' 
                : 'bg-white/60 text-gray-800'
            }`}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {memory.type === 'flower' && (
                <Flower2 className={`w-12 h-12 ${isDarkMode ? 'text-pink-400' : 'text-pink-500'}`} />
              )}
              {memory.type === 'tree' && (
                <Tree className={`w-12 h-12 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              )}
              {memory.type === 'star' && (
                <Star className={`w-12 h-12 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'} animate-pulse`} />
              )}
            </motion.div>
            <h3 className="text-xl font-serif">
              {memory.title}
            </h3>
            {memory.image && (
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={memory.image}
                alt={memory.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            )}
            <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {memory.content}
            </p>
            {memory.author && (
              <p className={`text-sm italic ${isDarkMode ? 'text-pink-400' : 'text-pink-500'}`}>
                Con amor, {memory.author}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGarden;