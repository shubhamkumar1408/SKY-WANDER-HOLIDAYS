import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, MapPin, Users, Sparkles, X } from 'lucide-react';
import { LIVE_BOOKING_SAMPLE } from '../data/destinations';

export const LiveBookingTicker: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    if (closedManually) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % LIVE_BOOKING_SAMPLE.length);
        setVisible(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, [closedManually]);

  if (closedManually) return null;

  const current = LIVE_BOOKING_SAMPLE[currentIdx];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-xs sm:max-w-sm pointer-events-auto">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-start gap-3 relative overflow-hidden"
          >
            {/* Ambient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1698B4] via-[#FF7A00] to-[#1698B4]" />
            
            {/* Avatar / Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1698B4] to-[#0B2530] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              {current.name.charAt(0)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-1.5 text-xs text-[#1698B4] font-black mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping"></span>
                <span>Just Booked by {current.name}</span>
              </div>
              <p className="text-xs font-bold text-slate-800 line-clamp-1">
                {current.tour}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1 font-medium">
                <span className="flex items-center gap-0.5 text-slate-600">
                  <MapPin className="w-3 h-3 text-[#FF7A00]" />
                  {current.city}
                </span>
                <span>•</span>
                <span className="text-[#FF7A00] font-bold">{current.duration}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5">
                  <Users className="w-3 h-3 text-slate-400" />
                  {current.travelers} Guests
                </span>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setClosedManually(true)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
