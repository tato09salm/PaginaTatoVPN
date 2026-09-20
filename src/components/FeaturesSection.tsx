import React from 'react';
import {
  Shield,
  Server,
  Monitor,
  Zap,
  Lock,
  Wifi,
  Download,
  Terminal,
  Cpu,
  ArrowRight,
  HardDrive
} from 'lucide-react';

interface FeaturesSectionProps {
  onOpenDownload: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenDownload }) => {
  return (
    <section id="caracteristicas" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-orange-500/20">
            <Shield className="w-3.5 h-3.5" />
            <span>Poder y Rendimiento Sin Concesiones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tres Potentes Herramientas en un Solo Software
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            TatoVPN combina un cliente VPN SSH de alta gama con funciones avanzadas de servidor local y acceso remoto para tus equipos.
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: VPN SSH / SSL */}
          <div className="bg-white dark:bg-[#0c1424] rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-orange-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                Túnel de Conexión
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                VPN SSH / SSL con TUN Wintun
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Navega de forma anónima y sin bloqueos. Conecta a cualquier VPS o servidor SSH a través de puertos seguros (443, 80 o 22). Gracias al adaptador de red TUN/Wintun, todo el tráfico de tu sistema queda blindado y encriptado.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Soporte Wintun de alto rendimiento (baja latencia)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Proxy local SOCKS5 (127.0.0.1:1080)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Cifrado robusto AES-256 sin filtraciones DNS</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Modo Cliente</span>
              <button
                onClick={onOpenDownload}
                className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:text-orange-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Descargar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Modo Servidor Local (Tato Host) */}
          <div
            id="modo-servidor"
            className="bg-white dark:bg-[#0c1424] rounded-2xl p-7 border-2 border-orange-500/40 shadow-xl shadow-orange-950/20 hover:border-orange-500 transition-all flex flex-col justify-between group relative"
          >
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
              Exclusivo Tato Host
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                Servidor Integrado
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                Modo Servidor Local (Tato Host)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Convierte tu computadora en un nodo central. Transfiere archivos de forma segura vía SFTP, comparte tu conexión a internet mediante HTTP Injector / Proxy o enlaza tus dispositivos dentro de tu red local o por internet público.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Transferencia SFTP ultra-rápida entre dispositivos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Compartir internet (HTTP Injector / Proxy Local)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Generador de credenciales y URL en 1 clic</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Túnel Inverso</span>
              <button
                onClick={onOpenDownload}
                className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:text-orange-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Descargar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 3: Control Remoto & Escritorio Remoto */}
          <div
            id="escritorio-remoto"
            className="bg-white dark:bg-[#0c1424] rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-orange-500/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                Control a Distancia
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                Escritorio Remoto en Tiempo Real
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Visualiza y toma el control de tus laptops u ordenadores de forma remota. Aprovecha la estabilidad del túnel SSH para operar escritorios a 60 FPS sin necesidad de IP pública ni configuraciones complejas de cortafuegos.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Control de pantalla completa con teclado y mouse</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Ajuste dinámico de calidad (70% - 95%) para fluidez</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Conexión remota por túnel inverso sin abrir puertos</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Control Multi-Dispositivo</span>
              <button
                onClick={onOpenDownload}
                className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:text-orange-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Descargar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Benefits Banner */}
        <div className="mt-14 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-3xl p-8 sm:p-10 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              ¿Listo para experimentar la libertad total en tu conexión?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-orange-100 font-medium">
              Descarga TatoVPN ahora de forma directa. Instalación rápida sin registros, anuncios molestos ni suscripciones ocultas.
            </p>
          </div>
          <button
            onClick={onOpenDownload}
            className="px-8 py-4 bg-slate-900 hover:bg-black text-white font-black text-sm rounded-2xl shadow-xl flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Download className="w-5 h-5 text-orange-400" />
            <span>Descarga Directa Gratuita</span>
          </button>
        </div>
      </div>
    </section>
  );
};
