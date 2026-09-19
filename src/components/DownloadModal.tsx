import React, { useState, useEffect } from 'react';
import {
  Download,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  X,
  AlertCircle
} from 'lucide-react';
import { TatoLogo } from './TatoLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  // Direct download links
  const fileId = '13rq-wzHFiXNQuPqqcnL1JbuagGCqBl2z';
  const directDownloadUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download`;
  const directUcUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const driveViewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=drive_link`;

  // Trigger download automatically when modal opens
  useEffect(() => {
    if (isOpen) {
      setDownloadTriggered(true);
      // Initiate download in background
      const link = document.createElement('a');
      link.href = directDownloadUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setDownloadTriggered(false);
    }
  }, [isOpen, directDownloadUrl]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(directDownloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#0c1322] border border-orange-500/30 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative text-slate-900 dark:text-white">
        {/* Glow Header */}
        <div className="h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" />

        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <TatoLogo size="md" />
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Descargando <span className="text-orange-500">TatoVPN</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Versión oficial para Windows (64 bits) • SSH, SOCKS5 & Servidor Remoto
              </p>
            </div>
          </div>

          {/* Status banner */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3.5 mb-5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
              <Download className="w-4 h-4 animate-bounce" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-orange-600 dark:text-orange-400">
                {downloadTriggered ? 'Descarga iniciada automáticamente' : 'Preparando descarga...'}
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                Si tu navegador no inició la descarga automáticamente, presiona el botón naranja a continuación:
              </p>
            </div>
          </div>

          {/* Download Action Buttons */}
          <div className="space-y-2.5 mb-6">
            {/* Direct Instant Download */}
            <a
              href={directDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2.5 text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-5 h-5" />
              <span>Descargar Directamente (Google Drive)</span>
            </a>

            {/* Alternate / Mirror Button */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={directUcUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-orange-500" />
                <span>Enlace Directo 2</span>
              </a>

              <a
                href={driveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-orange-500" />
                <span>Ver en Drive</span>
              </a>
            </div>

            {/* Copy direct link button */}
            <button
              onClick={handleCopyLink}
              className="w-full py-2 px-3 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-500 font-bold">¡Enlace copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar enlace de descarga directa</span>
                </>
              )}
            </button>
          </div>

          {/* Installation Steps */}
          <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 mb-4">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-orange-500" />
              <span>Instalación rápida en 3 pasos:</span>
            </h4>
            <ol className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Guarda el archivo descargado desde Google Drive en tu computadora.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Ejecuta <strong>TatoVPN</strong>. Si Windows SmartScreen lo solicita, pulsa <em>"Más información"</em> → <em>"Ejecutar de todas formas"</em>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  Ingresa tu cuenta SSH o activa el <strong>Modo Servidor</strong> para controlar tu laptop o compartir internet.
                </span>
              </li>
            </ol>
          </div>

          {/* Security Guarantee Badges */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Seguro y Libre de Virus</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
              <span>Windows 10 / 11 (64-bit)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
