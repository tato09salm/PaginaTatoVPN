import React, { useState, useEffect } from 'react';
import { Download, ShieldCheck } from 'lucide-react';
import { TatoLogo } from './TatoLogo';

interface FloatingDownloadBarProps {
  onOpenDownload: () => void;
}

export const FloatingDownloadBar: React.FC<FloatingDownloadBarProps> = ({
  onOpenDownload,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de descarga rápida"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl bg-slate-900/90 dark:bg-[#0b1220]/95 backdrop-blur-md border border-orange-500/40 rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300 text-white"
    >
      <div className="flex items-center gap-2.5 overflow-hidden">
        <TatoLogo size="sm" />
        <div className="truncate">
          <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
            <span>TatoVPN v2.4</span>
            <span className="text-[10px] text-orange-400 font-mono hidden sm:inline">
              (Windows 64-bit)
            </span>
          </div>
          <div className="text-[10px] text-slate-400 flex items-center gap-1 truncate">
            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">VPN SSH/SSL • Modo Servidor • Escritorio Remoto</span>
          </div>
        </div>
      </div>

      <button
        onClick={onOpenDownload}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-xs shadow-md shadow-orange-600/40 flex items-center gap-1.5 shrink-0 transition-all active:scale-95"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Descargar Ahora</span>
      </button>
    </aside>
  );
};
