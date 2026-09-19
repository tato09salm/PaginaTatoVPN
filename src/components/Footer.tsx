import React from 'react';
import { Download, ExternalLink, ShieldCheck, Mail, Heart } from 'lucide-react';
import { TatoLogo } from './TatoLogo';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  const driveUrl = 'https://drive.google.com/file/d/1rogQga8ObbFe4rXSR9qDIe-s0p4xRFrw/view';

  return (
    <footer className="bg-[#05080f] text-slate-400 border-t border-slate-800/80 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          {/* Brand & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <TatoLogo size="md" showText={true} />
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              Potente cliente y servidor VPN SSH/SSL con proxy SOCKS5, modo Tato Host y control remoto de escritorio para Windows.
            </p>
          </div>

          {/* Quick links & Download */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a href="#caracteristicas" className="hover:text-orange-400 transition-colors">
              Características
            </a>
            <span className="text-slate-700">•</span>
            <a href="#demo-3d" className="hover:text-orange-400 transition-colors">
              Visor 3D
            </a>
            <span className="text-slate-700">•</span>
            <a href="#modo-servidor" className="hover:text-orange-400 transition-colors">
              Modo Servidor
            </a>
            <span className="text-slate-700">•</span>
            <a href="#escritorio-remoto" className="hover:text-orange-400 transition-colors">
              Escritorio Remoto
            </a>
            <span className="text-slate-700">•</span>
            <a href="#faq" className="hover:text-orange-400 transition-colors">
              Preguntas Frecuentes
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors"
            >
              <span>Carpeta Google Drive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Download Button */}
          <button
            onClick={onOpenDownload}
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center gap-2 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Descarga Directa</span>
          </button>
        </div>

        {/* Contact info bar */}
        <div className="py-6 border-b border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-slate-400 text-center sm:text-left">
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-orange-400" />
              <span>Contáctanos mediante:</span>
              <a
                href="mailto:thutato09.2003@gmail.com"
                className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2"
              >
                thutato09.2003@gmail.com
              </a>
            </div>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-400 italic">para contratos y maltratos.</span>
          </div>

          <div className="flex items-center gap-1.5 text-orange-400 font-medium">
            <span>gracias por apoyar TatoVPN</span>
            <Heart className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} TatoVPN. Todos los derechos reservados. Conecta • Protege • Navega Libre.
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Descarga oficial verificada y libre de malware</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
