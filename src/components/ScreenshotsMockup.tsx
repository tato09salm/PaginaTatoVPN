import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Unlock,
  Radio,
  Sliders,
  Settings,
  FileText,
  Monitor,
  CheckCircle2,
  HardDrive,
  Copy,
  Check,
  Maximize2,
  Power,
  ChevronDown,
  RefreshCw,
  FolderSync,
  Network
} from 'lucide-react';
import { TatoLogo } from './TatoLogo';

export type ScreenId = 'inicio' | 'ssh' | 'servidor' | 'remoto' | 'conectado';

interface ScreenshotMockupProps {
  screenId: ScreenId;
  interactive?: boolean;
  onScreenChange?: (screen: ScreenId) => void;
  className?: string;
}

export const ScreenshotMockup: React.FC<ScreenshotMockupProps> = ({
  screenId,
  interactive = true,
  onScreenChange,
  className = '',
}) => {
  const [isConnected, setIsConnected] = useState(screenId === 'conectado');
  const [isServerRunning, setIsServerRunning] = useState(false);
  const [serverMode, setServerMode] = useState<'sftp' | 'proxy' | 'rdp'>('rdp');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`w-full h-full bg-[#090e17] text-slate-200 rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col select-none font-sans text-xs sm:text-sm ${className}`}
    >
      {/* Windows App Window Header */}
      <div className="h-8 bg-[#0b1220] border-b border-slate-800/80 px-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <TatoLogo size="sm" />
          <span className="text-[11px] font-semibold text-slate-300">TatoVPN</span>
          <span className="text-[9px] px-1.5 py-0.2 bg-orange-500/20 text-orange-400 rounded font-mono">
            v2.4 Pro
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <button className="w-2.5 h-2.5 rounded-full bg-slate-600/50 hover:bg-slate-500" />
          <button className="w-2.5 h-2.5 rounded-full bg-slate-600/50 hover:bg-slate-500" />
          <button className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-500" />
        </div>
      </div>

      {/* Main App Body */}
      <div className="flex flex-1 overflow-hidden min-h-[360px] sm:min-h-[420px]">
        {/* Left Sidebar (Faithful to TatoVPN App) */}
        <div className="w-40 sm:w-48 bg-[#070c14] border-r border-slate-800/70 p-2 flex flex-col justify-between shrink-0">
          <div>
            {/* Mascot in Sidebar */}
            <div className="p-2 mb-2 flex items-center gap-2 bg-[#0e1626]/60 rounded-lg border border-slate-800/50">
              <TatoLogo size="sm" />
              <div>
                <div className="text-[11px] font-bold text-white leading-none">TatoVPN</div>
                <div className="text-[8px] text-orange-400 font-mono tracking-tighter">
                  TUNNEL & HOST
                </div>
              </div>
            </div>

            {/* Nav Menu */}
            <div className="space-y-1">
              <button
                onClick={() => onScreenChange?.('inicio')}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-all ${
                  screenId === 'inicio' || screenId === 'conectado'
                    ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span className="text-[11px]">Inicio</span>
              </button>

              <button
                onClick={() => onScreenChange?.('ssh')}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-all ${
                  screenId === 'ssh'
                    ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span className="text-[11px]">Configuración SSH</span>
              </button>

              <button
                onClick={() => onScreenChange?.('servidor')}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-all ${
                  screenId === 'servidor'
                    ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <HardDrive className="w-3.5 h-3.5" />
                <span className="text-[11px]">Modo Servidor</span>
              </button>

              <button
                onClick={() => onScreenChange?.('remoto')}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-all ${
                  screenId === 'remoto'
                    ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="text-[11px]">Escritorio Remoto</span>
              </button>

              <div className="pt-2 border-t border-slate-800/40 text-[10px] text-slate-500 px-2 space-y-1">
                <div className="flex items-center gap-1.5 hover:text-slate-300 cursor-pointer">
                  <FolderSync className="w-3 h-3" /> Mis configuraciones
                </div>
                <div className="flex items-center gap-1.5 hover:text-slate-300 cursor-pointer">
                  <Network className="w-3 h-3" /> Registro de conexión
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Connection Status Box */}
          <div className="p-2 bg-[#0c1322] rounded-lg border border-slate-800/70">
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isConnected || screenId === 'conectado'
                    ? 'bg-emerald-400 animate-pulse'
                    : 'bg-slate-500'
                }`}
              />
              <span className="text-[10px] font-bold text-slate-300">
                {isConnected || screenId === 'conectado' ? 'Conectado' : 'Desconectado'}
              </span>
            </div>
            <div className="text-[9px] text-slate-400 truncate mt-0.5 font-mono">
              {isConnected || screenId === 'conectado'
                ? 'Túnel SSH activo (TUN)'
                : 'No hay conexión activa'}
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 bg-[#0b101c] p-3 sm:p-4 overflow-y-auto flex flex-col justify-between">
          {/* Top Quick Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60">
            <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-orange-500" />
              {screenId === 'inicio' && 'Panel Principal'}
              {screenId === 'conectado' && 'Conexión Activa'}
              {screenId === 'ssh' && 'Configuración de Cuenta SSH & Wintun'}
              {screenId === 'servidor' && 'Modo Servidor Local (Tato Host)'}
              {screenId === 'remoto' && 'Escritorio Remoto en Tiempo Real'}
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <FileText className="w-3.5 h-3.5 hover:text-orange-400 cursor-pointer" />
              <Settings className="w-3.5 h-3.5 hover:text-orange-400 cursor-pointer" />
            </div>
          </div>

          {/* SCREEN 1 & 5: INICIO / CONECTADO */}
          {(screenId === 'inicio' || screenId === 'conectado') && (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-4">
              {/* Circular Lock Indicator */}
              <div className="relative mb-6">
                <div
                  className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                    isConnected || screenId === 'conectado'
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.35)]'
                      : 'border-orange-500 bg-orange-500/10 shadow-[0_0_50px_rgba(249,115,22,0.3)]'
                  }`}
                >
                  {isConnected || screenId === 'conectado' ? (
                    <Lock className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400 transition-all" />
                  ) : (
                    <Unlock className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 transition-all" />
                  )}
                </div>
              </div>

              {/* Action Button */}
              {isConnected || screenId === 'conectado' ? (
                <button
                  onClick={() => {
                    if (interactive) setIsConnected(false);
                  }}
                  className="px-8 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all active:scale-95"
                >
                  <Power className="w-4 h-4" />
                  <span>Desconectar</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (interactive) setIsConnected(true);
                  }}
                  className="px-8 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all active:scale-95"
                >
                  <Radio className="w-4 h-4" />
                  <span>Conectar</span>
                </button>
              )}

              {/* Protocol selector dropdown badge */}
              <div className="mt-4 px-3 py-1.5 bg-[#121c2e] border border-slate-700/80 rounded-md text-[11px] text-slate-300 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-semibold">SSH • Direct (TUN Wintun)</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>

              {/* Live metrics when connected */}
              {(isConnected || screenId === 'conectado') && (
                <div className="mt-4 grid grid-cols-3 gap-2 w-full max-w-xs text-[10px] bg-[#0c1424] p-2 rounded-lg border border-slate-800">
                  <div>
                    <div className="text-slate-500">Bajada</div>
                    <div className="font-mono font-bold text-emerald-400">42.8 MB/s</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Subida</div>
                    <div className="font-mono font-bold text-cyan-400">18.2 MB/s</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Ping</div>
                    <div className="font-mono font-bold text-orange-400">19 ms</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SCREEN 2: CONFIGURACIÓN SSH */}
          {screenId === 'ssh' && (
            <div className="flex-1 space-y-3 text-[11px]">
              {/* Box 1: VPS / SSH */}
              <div className="bg-[#0e1628] p-3 rounded-lg border border-slate-800">
                <div className="text-orange-400 font-bold mb-2 flex items-center justify-between">
                  <span>DATOS DE LA VPS O CUENTA SSH</span>
                  <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                    Puerto SSL: 443
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="sm:col-span-2">
                    <label className="text-slate-400 block text-[10px] mb-1">Host SSH</label>
                    <input
                      readOnly
                      value="fr1.sshweb.site (o tu IP VPS)"
                      className="w-full bg-[#080d16] border border-slate-700 rounded px-2 py-1 text-slate-200 font-mono text-[10px]"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[10px] mb-1">Puerto</label>
                    <input
                      readOnly
                      value="443"
                      className="w-full bg-[#080d16] border border-slate-700 rounded px-2 py-1 text-orange-400 font-mono text-[10px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <label className="text-slate-400 block text-[10px] mb-1">Usuario</label>
                    <input
                      readOnly
                      value="tatovpn-user"
                      className="w-full bg-[#080d16] border border-slate-700 rounded px-2 py-1 text-slate-200 font-mono text-[10px]"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[10px] mb-1">Contraseña</label>
                    <input
                      readOnly
                      type="password"
                      value="password123"
                      className="w-full bg-[#080d16] border border-slate-700 rounded px-2 py-1 text-slate-200 font-mono text-[10px]"
                    />
                  </div>
                </div>
              </div>

              {/* Box 2: Local SOCKS5 & TUN */}
              <div className="bg-[#0e1628] p-3 rounded-lg border border-slate-800">
                <div className="text-orange-400 font-bold mb-2">
                  CONFIGURACIÓN LOCAL (SOCKS5 / VPN)
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="accent-orange-500 rounded w-3.5 h-3.5"
                  />
                  <span className="text-slate-200 font-medium text-[10px]">
                    Activar VPN a nivel de sistema (TUN/Wintun - Redirigir TODO el tráfico)
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400 text-[10px]">IP de escucha: 127.0.0.1</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px]">Puerto Local: 1080</span>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-semibold text-[10px]">
                  Guardar config
                </button>
                <button
                  onClick={() => onScreenChange?.('conectado')}
                  className="px-4 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold text-[10px] shadow-md shadow-orange-600/30"
                >
                  ► Guardar y Conectar
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 3: MODO SERVIDOR */}
          {screenId === 'servidor' && (
            <div className="flex-1 space-y-3 text-[11px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Control Box */}
                <div className="bg-[#0e1628] p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-200">Estado del Host</span>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                        isServerRunning
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {isServerRunning ? '● EN LÍNEA' : '● DETENIDO'}
                    </span>
                  </div>

                  <button
                    onClick={() => setIsServerRunning(!isServerRunning)}
                    className={`w-full py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2 mb-3 shadow-md transition-all ${
                      isServerRunning
                        ? 'bg-red-600 hover:bg-red-500 text-white'
                        : 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/30'
                    }`}
                  >
                    <Power className="w-3.5 h-3.5" />
                    <span>{isServerRunning ? 'Detener Servidor' : '► Encender Servidor'}</span>
                  </button>

                  <div className="space-y-1.5 text-[10px]">
                    <div className="text-orange-400 font-bold">Modo de Operación:</div>
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                      <input
                        type="radio"
                        name="smode"
                        checked={serverMode === 'sftp'}
                        onChange={() => setServerMode('sftp')}
                        className="accent-orange-500"
                      />
                      <span>Conexión Remota (Archivos / SFTP)</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                      <input
                        type="radio"
                        name="smode"
                        checked={serverMode === 'proxy'}
                        onChange={() => setServerMode('proxy')}
                        className="accent-orange-500"
                      />
                      <span>Compartir Internet (HTTP Injector / Proxy)</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                      <input
                        type="radio"
                        name="smode"
                        checked={serverMode === 'rdp'}
                        onChange={() => setServerMode('rdp')}
                        className="accent-orange-500"
                      />
                      <span className="font-semibold text-orange-300">
                        Escritorio Remoto (Ver y controlar laptop)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Device Credentials Box */}
                <div className="bg-[#0e1628] p-3 rounded-lg border border-slate-800 space-y-2">
                  <div className="text-orange-400 font-bold text-[10px]">
                    DATOS PARA TUS DISPOSITIVOS
                  </div>

                  <div>
                    <label className="text-slate-400 text-[9px] block">IP Local (Wi-Fi/LAN)</label>
                    <div className="flex items-center gap-1">
                      <input
                        readOnly
                        value="10.50.59.223:8080"
                        className="flex-1 bg-[#080d16] border border-slate-700 rounded px-2 py-0.5 font-mono text-[10px]"
                      />
                      <button
                        onClick={() => handleCopy('10.50.59.223:8080')}
                        className="p-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-[9px] block">Túnel Inverso (Internet Público)</label>
                    <div className="flex items-center gap-1">
                      <input
                        readOnly
                        value={
                          isServerRunning
                            ? 'tato-host-789.pinggy.link:443'
                            : '(Enciende el servidor para generar)'
                        }
                        className="flex-1 bg-[#080d16] border border-slate-700 rounded px-2 py-0.5 font-mono text-[10px] text-orange-400"
                      />
                      <button
                        onClick={() => handleCopy('tato-host-789.pinggy.link:443')}
                        className="p-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => handleCopy('tatovpn://connect?host=10.50.59.223')}
                      className="w-full py-1 bg-slate-800 hover:bg-slate-700 text-orange-400 font-bold rounded text-[10px] flex items-center justify-center gap-1 border border-orange-500/20"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copiar Credencial TatoVPN</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 4: ESCRITORIO REMOTO */}
          {screenId === 'remoto' && (
            <div className="flex-1 flex flex-col space-y-2">
              <div className="bg-[#0e1628] px-2.5 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-slate-300 font-mono">
                    Conectado a túnel pinggy-rdp:39313 (1920x1080)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>9.0 FPS</span>
                  <span className="text-emerald-400 font-bold">Calidad: 90%</span>
                  <Maximize2 className="w-3 h-3 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Simulated Remote Screen */}
              <div className="flex-1 bg-[#020617] rounded-lg border border-slate-800 p-2 relative overflow-hidden flex flex-col justify-between">
                {/* Desktop icons grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {[
                    { label: 'Word', color: 'bg-blue-600' },
                    { label: 'Postman', color: 'bg-orange-600' },
                    { label: 'VS Code', color: 'bg-sky-600' },
                    { label: 'Docker', color: 'bg-blue-500' },
                    { label: 'Python', color: 'bg-amber-500' },
                    { label: 'Tato Host', color: 'bg-orange-500' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-1.5 rounded hover:bg-white/10 cursor-pointer text-center"
                    >
                      <div
                        className={`w-7 h-7 rounded-md ${item.color} flex items-center justify-center text-white font-bold text-[9px] shadow-sm`}
                      >
                        {item.label[0]}
                      </div>
                      <span className="text-[8px] text-slate-300 mt-1 truncate max-w-[50px]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Floating remote control badge */}
                <div className="self-center bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-orange-500/40 text-[9px] text-orange-400 flex items-center gap-1.5 shadow-lg">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Control Remoto Activo • Cifrado SSH / AES-256</span>
                </div>

                {/* Simulated Windows Taskbar */}
                <div className="h-6 bg-[#090e17] rounded border border-slate-800/80 px-2 flex items-center justify-between text-[9px] text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-blue-500 rounded-sm" />
                    <span className="text-[8px] text-slate-500">Buscar...</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[8px]">
                    <span>23:38</span>
                    <span>18/09/2026</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer note */}
          <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="text-orange-500 font-bold">TatoVPN Engine:</span> Túnel SSH, Proxy SOCKS5 y Servidor RDP
            </span>
            <span className="font-mono text-[9px] text-slate-400">TUN/Wintun 64-bit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
