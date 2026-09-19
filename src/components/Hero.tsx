import React from 'react';
import {
  Download,
  ShieldCheck,
  Zap,
  Server,
  Monitor,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { TatoLogo } from './TatoLogo';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const directDriveUrl = 'https://drive.usercontent.google.com/download?id=13rq-wzHFiXNQuPqqcnL1JbuagGCqBl2z&export=download';

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Radiant orange glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-orange-500/20 via-orange-500/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Conversion Copy & CTA */}
          <div className="flex-1 text-center lg:text-left">
            {/* Version Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-bold mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>TatoVPN v2.4 para Windows • Lanzamiento Oficial</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Conecta, Protege y Navega con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                TatoVPN
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              La solución definitiva de conectividad segura: túneles <strong className="text-slate-900 dark:text-white font-semibold">VPN SSH/SSL</strong> de máxima velocidad, <strong className="text-slate-900 dark:text-white font-semibold">Modo Servidor</strong> para compartir internet o SFTP, y <strong className="text-slate-900 dark:text-white font-semibold">Control de Escritorio Remoto</strong> en tiempo real sin abrir puertos.
            </p>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                Túnel SSH Direct (Wintun)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <Server className="w-3.5 h-3.5 text-orange-500" />
                Modo Servidor (Tato Host)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <Monitor className="w-3.5 h-3.5 text-orange-500" />
                Escritorio Remoto 60 FPS
              </span>
            </div>

            {/* Conversion CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Primary Download Button */}
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-base rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] active:scale-[0.98] group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Descarga Directa Gratuita</span>
              </button>

              {/* Secondary 3D Demo Button */}
              <a
                href="#demo-3d"
                className="w-full sm:w-auto px-6 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-2xl border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>Ver Interfaz en 3D</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Direct Google Drive Link Note */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Alojado en Google Drive Oficial
              </span>
              <span>•</span>
              <span>Windows 10 / 11 (64-bit)</span>
              <span>•</span>
              <a
                href={directDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 font-semibold hover:underline inline-flex items-center gap-1"
              >
                Descargar enlace directo
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic / Mascot Showcase */}
          <div className="w-full max-w-md lg:max-w-lg flex items-center justify-center relative">
            {/* Pulsing ring background */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-orange-500/20 animate-pulse-ring pointer-events-none" />
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

            {/* Mascot Center Card */}
            <div className="relative bg-black p-5 sm:p-7 rounded-3xl border-2 border-orange-500/50 shadow-2xl shadow-orange-950/60 flex flex-col items-center text-center glow-orange group hover:border-orange-400 transition-all duration-300 w-full max-w-[420px]">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black flex items-center justify-center p-2">
                <img
                  src={`${import.meta.env.BASE_URL}images/TatoLogoNegro.png`}
                  alt="TatoVPN Logo Oficial"
                  className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(249,115,22,0.3)]"
                />
              </div>

              {/* Quick direct download trigger button */}
              <button
                onClick={onOpenDownload}
                className="mt-4 w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/40 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Obtener TatoVPN para Windows</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
