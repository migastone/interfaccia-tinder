import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, PanInfo } from 'framer-motion';
import { Profile, SwipeDirection } from '../types';
import ProfileCard from './ProfileCard';
import { Heart, X, Zap } from 'lucide-react';

interface SwipeDeckProps {
  profiles: Profile[];
}

const SwipeDeck: React.FC<SwipeDeckProps> = ({ profiles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<SwipeDirection>(null);

  // Current profiles to show (Top one and the one behind)
  const visibleProfiles = profiles.slice(currentIndex, currentIndex + 2);
  const activeProfile = visibleProfiles[0];
  const remainingCount = Math.max(0, profiles.length - currentIndex);

  const x = useMotionValue(0);
  const y = useMotionValue(0); // Kept for vertical drag feel, but no logic attached
  
  // Dynamic transforms based on drag
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  
  // Opacity for overlays
  const likeOpacity = useTransform(x, [50, 150], [0, 1]);
  const nopeOpacity = useTransform(x, [-50, -150], [0, 1]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    const { offset } = info;

    if (offset.x > threshold) {
        // Swipe Right
        setExitDirection('right');
        setCurrentIndex((prev) => prev + 1);
    } else if (offset.x < -threshold) {
        // Swipe Left
        setExitDirection('left');
        setCurrentIndex((prev) => prev + 1);
    }
  };

  // If no more profiles
  if (!activeProfile) {
    return (
      <div className="w-full h-[420px] flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl shadow-sm mx-4">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <Zap className="text-primary" size={32} />
        </div>
        <h3 className="text-xl font-bold text-text-dark">Tutto fatto!</h3>
        <p className="text-gray-500 mt-2">Hai visto tutti i profili suggeriti per oggi.</p>
        <button 
            onClick={() => setCurrentIndex(0)}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-colors"
        >
            Rivedi Profili
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
        <div className="relative w-full h-[420px] flex items-center justify-center perspective-1000">
            <AnimatePresence>
                {visibleProfiles.map((profile, index) => {
                    const isTop = index === 0;
                    
                    if (!isTop) {
                        // Back card style
                        return (
                            <motion.div
                                key={profile.id}
                                className="absolute w-[80%] h-full top-0"
                                initial={{ scale: 0.95, y: 15, opacity: 0.5 }}
                                animate={{ scale: 0.95, y: 15, opacity: 1 }}
                                style={{ zIndex: 0 }}
                            >
                                <ProfileCard profile={profile} isFront={false} />
                            </motion.div>
                        );
                    }

                    // Front card
                    return (
                        <motion.div
                            key={profile.id}
                            className="absolute w-[80%] h-full top-0 cursor-grab active:cursor-grabbing"
                            style={{ x, y, rotate, zIndex: 10 }}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.7} // Springy feel
                            onDragEnd={handleDragEnd}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }}
                            exit={{ 
                                x: exitDirection === 'left' ? -500 : exitDirection === 'right' ? 500 : 0,
                                opacity: 0, 
                                transition: { duration: 0.2 } 
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <ProfileCard profile={profile} />

                            {/* Overlays */}
                            <motion.div style={{ opacity: likeOpacity }} className="absolute inset-0 bg-green-500/20 rounded-3xl z-30 pointer-events-none flex items-center justify-center border-4 border-green-500/50">
                                <div className="bg-white/90 rounded-full p-4 shadow-xl">
                                    <Heart className="text-green-600 fill-green-600" size={48} />
                                </div>
                            </motion.div>
                            <motion.div style={{ opacity: nopeOpacity }} className="absolute inset-0 bg-red-500/20 rounded-3xl z-30 pointer-events-none flex items-center justify-center border-4 border-red-500/50">
                                <div className="bg-white/90 rounded-full p-4 shadow-xl">
                                    <X className="text-red-600" size={48} strokeWidth={4} />
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                }).reverse()}
            </AnimatePresence>
        </div>

        {/* Remaining Profiles Indicator */}
        <div className="mt-4 text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded-full">
            {remainingCount} Profiles Remaining
        </div>
    </div>
  );
};

export default SwipeDeck;