import React from 'react';
import { Download, Sun, Moon, Shield, Sparkles } from 'lucide-react';
import { TatoLogo } from './TatoLogo';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenDownload,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-[#070c14]/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <TatoLogo size="md" showText={true} />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a
            href="#caracteristicas"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Características
          </a>
          <a
            href="#demo-3d"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Vista 3D</span>
          </a>
          <a
            href="#modo-servidor"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Modo Servidor
          </a>
          <a
            href="#escritorio-remoto"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Escritorio Remoto
          </a>
          <a
            href="#faq"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Preguntas Frecuentes
          </a>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Dark/Light mode toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all border border-slate-200 dark:border-slate-700"
            title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-label="Alternar tema"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Direct Download Button (High conversion) */}
          <button
            onClick={onOpenDownload}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs sm:text-sm shadow-md shadow-orange-600/30 hover:shadow-orange-600/50 flex items-center gap-2 transition-all active:scale-95 group"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="hidden sm:inline">Descargar Gratis</span>
            <span className="sm:hidden">Descargar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
