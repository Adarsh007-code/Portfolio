import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { User, X, Maximize2, Shield } from 'lucide-react';

interface ProfileImageProps {
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PROFILE_IMAGE_URL = 'https://ik.imagekit.io/xyfvouezrn/profile.png.png';

export const ProfileImage: React.FC<ProfileImageProps> = ({
  alt = 'Adarsh Raj',
  className = '',
  size = 'lg',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const openModal = (e: React.MouseEvent) => {
    if (!hasError) {
      e.stopPropagation();
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        id="profile-avatar-trigger"
        onClick={openModal}
        title={!hasError ? 'Click to view full photo' : undefined}
        className={`w-full h-full rounded-full overflow-hidden bg-[#0c0c0c] flex items-center justify-center relative select-none ${
          !hasError ? 'cursor-pointer group' : ''
        } ${className}`}
      >
        {!hasError ? (
          <>
            <img
              src={PROFILE_IMAGE_URL}
              alt={alt}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover object-[center_20%] transform transition-transform duration-500 group-hover:scale-108"
            />
            {/* Subtle hover overlay with expand icon for desktop */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-2 rounded-full bg-[#050505]/90 border border-[#00FF41]/70 shadow-[0_0_15px_rgba(0,255,65,0.4)] text-[#00FF41] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#0d120e] text-[#00FF41] select-none p-2 text-center">
            <User className={size === 'sm' ? 'w-5 h-5 text-[#00FF41]/70' : 'w-10 h-10 text-[#00FF41]/70 mb-1'} />
            {size !== 'sm' && (
              <span className="text-[11px] font-mono tracking-wider text-[#00FF41]/80 font-medium">
                Profile Photo
              </span>
            )}
          </div>
        )}
      </div>

      {/* Full Image Lightbox Popup */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 select-none">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#0a0f0b] border border-[#00FF41]/40 rounded-2xl shadow-[0_0_50px_rgba(0,255,65,0.25)] overflow-hidden flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Top Cyber Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#080d09] border-b border-[#00FF41]/20">
                    <div className="flex items-center gap-2 text-[#00FF41] font-mono text-xs tracking-wider">
                      <Shield className="w-3.5 h-3.5 text-[#00FF41]" />
                      <span className="font-semibold text-white/90">{alt}</span>
                      <span className="text-white/40">//</span>
                      <span className="text-[#00FF41]/80 text-[10px]">FULL_IMAGE</span>
                    </div>

                    <button
                      id="close-profile-modal-button"
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 rounded-lg text-white/70 hover:text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors border border-transparent hover:border-[#00FF41]/30 focus:outline-none"
                      title="Close (Esc)"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Full Photo Image Content */}
                  <div className="relative p-3 sm:p-4 bg-[#050806] flex items-center justify-center">
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl max-h-[75vh] flex items-center justify-center bg-black">
                      <img
                        src={PROFILE_IMAGE_URL}
                        alt={alt}
                        className="w-auto h-auto max-h-[70vh] max-w-full object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Footer status */}
                  <div className="px-4 py-2.5 bg-[#080d09] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span className="flex items-center gap-1.5 text-[#00FF41]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
                      ORIGINAL_ASSET
                    </span>
                    <span className="text-white/40">Press ESC or click outside to close</span>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
