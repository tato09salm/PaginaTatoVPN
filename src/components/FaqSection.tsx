import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  Mail,
  Heart,
  WifiOff,
  Trash2,
  KeyRound,
  ShieldCheck,
  Info
} from 'lucide-react';
import { FaqItem } from '../types';

const NetworkFixBlock: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const commandList = [
    'route delete 0.0.0.0 mask 128.0.0.0',
    'netsh interface ipv4 set dnsservers name="Wi-Fi" source=dhcp',
    'netsh interface ipv6 set dnsservers name="Wi-Fi" source=dhcp',
    'netsh interface set interface name="TatoVPN" admin=disable',
    'ipconfig /flushdns',
    'ping 8.8.8.8',
    'netsh advfirewall firewall delete rule name="TatoVPN_Block_Outbound_UDP"',
    'route -f',
    'netsh interface set interface name="Wi-Fi" admin=disabled',
    'netsh interface set interface name="Wi-Fi" admin=enabled',
    'ipconfig /renew',
    'ping 8.8.8.8',
  ];

  const fullCommandString = commandList.join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCommandString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-3 space-y-3">
      <p className="text-slate-600 dark:text-slate-300">
        Si al cerrar o desconectar la aplicación tu computadora pierde la navegación, abre la terminal (<strong>Símbolo del sistema / CMD</strong> o <strong>PowerShell</strong>) en <strong>Modo Administrador</strong> y ejecuta cada uno de los siguientes comandos:
      </p>

      <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-md">
        <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/80 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
            <span>CMD / PowerShell (Administrador)</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-orange-600/20 hover:bg-orange-600/30 text-orange-400 border border-orange-500/30 font-medium transition-all text-xs"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copiar todos los comandos</span>
              </>
            )}
          </button>
        </div>

        <pre className="p-3.5 text-[11px] sm:text-xs text-emerald-400 font-mono overflow-x-auto leading-relaxed scrollbar-thin">
          {fullCommandString}
        </pre>
      </div>

      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <span>
          <strong>Nota:</strong> Si estás usando cable de red (Ethernet) en lugar de Wi-Fi, reemplaza <code className="px-1 py-0.5 rounded bg-amber-500/20 font-mono">"Wi-Fi"</code> por <code className="px-1 py-0.5 rounded bg-amber-500/20 font-mono">"Ethernet"</code> en los comandos correspondientes.
        </span>
      </div>
    </div>
  );
};

const SshWebsitesBlock: React.FC = () => {
  const sites = [
    { name: 'FastSSH', url: 'https://fastssh.com', desc: 'Servidores SSH y Websocket de alta velocidad en todo el mundo' },
    { name: 'SSHOcean', url: 'https://sshocean.com', desc: 'Cuentas SSH, SSL/TLS, V2Ray y túneles libres' },
    { name: 'JagoanSSH', url: 'https://jagoanssh.com', desc: 'Cuentas SSH y SSL gratuitas con servidores optimizados' },
    { name: 'SSHStore', url: 'https://sshstore.net', desc: 'Servidores gratuitos con soporte SSH directo y SSL' },
    { name: 'SkySSH', url: 'https://skyssh.com', desc: 'Plataforma con servidores globales de baja latencia' },
  ];

  return (
    <div className="mt-2 space-y-3">
      <p className="text-slate-600 dark:text-slate-300">
        Si no cuentas con un servidor VPS propio, puedes utilizar plataformas gratuitas reconocidas para crear tus credenciales de acceso SSH o SSL/TLS:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        {sites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group"
          >
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-orange-500 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-orange-500" />
                <span>{site.name}</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                {site.desc}
              </p>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-500 shrink-0 ml-2" />
          </a>
        ))}
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
        💡 <strong>Cómo usarlo:</strong> Entra a cualquiera de estas páginas, genera una cuenta gratuita seleccionando un servidor cercano, copia el <strong>Host / IP</strong>, <strong>Usuario</strong>, <strong>Contraseña</strong> y <strong>Puerto</strong> (ej. 22 para SSH o 443 para SSL), e ingrésalos en la pestaña SSH de TatoVPN.
      </p>
    </div>
  );
};

const FAQS: FaqItem[] = [
  {
    question: '¿Cómo desinstalar TatoVPN?',
    answer: (
      <div className="space-y-2">
        <p>
          Simplemente <strong>elimina la carpeta en la que instalaste TatoVPN</strong>, ¡así de simple!
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          TatoVPN es una aplicación portable: no deja servicios ocultos en segundo plano ni requiere programas de desinstalación adicionales.
        </p>
      </div>
    ),
  },
  {
    question: '¿Mi PC no reconoce internet luego de usar TatoVPN?',
    answer: <NetworkFixBlock />,
  },
  {
    question: '¿Cómo creo una configuración SSH si no tengo un VPS?',
    answer: <SshWebsitesBlock />,
  },
  {
    question: '¿Qué es TatoVPN y qué ventajas ofrece?',
    answer: (
      <p>
        TatoVPN es una suite de conectividad avanzada para Windows. Combina túneles SSH/SSL con el controlador de alta velocidad Wintun para enrutar tu tráfico de forma segura, eludir censura de red y permitir compartir internet o controlar tu equipo remotamente con Modo Servidor (Tato Host) sin abrir puertos.
      </p>
    ),
  },
  {
    question: '¿Qué requisitos del sistema necesita TatoVPN?',
    answer: (
      <p>
        TatoVPN es compatible con <strong>Windows 10 y Windows 11 (64-bit)</strong>. Para crear la interfaz TUN/Wintun y enrutar todo el tráfico de la PC requiere permisos de Administrador al momento de ejecutarse.
      </p>
    ),
  },
  {
    question: '¿Puedo transferir archivos y compartir internet con otros dispositivos?',
    answer: (
      <p>
        ¡Sí! El Modo Servidor (Tato Host) cuenta con servidor SFTP para transferir archivos entre tus dispositivos a máxima velocidad y permite compartir el túnel VPN a teléfonos y PCs conectadas a tu red local mediante proxy HTTP/SOCKS.
      </p>
    ),
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#080d18] transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Soporte & Guía</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Todo lo que necesitas saber para instalar, configurar, solucionar problemas y desinstalar TatoVPN.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#0c1424] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Banner requested by user */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-500/30 text-center relative overflow-hidden shadow-sm">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              ¿Tienes dudas o quieres colaborar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Contáctanos mediante:{' '}
              <a
                href="mailto:thutato09.2003@gmail.com"
                className="font-bold text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1"
              >
                thutato09.2003@gmail.com
              </a>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-2">
              "Para contratos y maltratos." 😉
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 mt-3 pt-3 border-t border-orange-500/20">
              <span>¡Gracias por apoyar TatoVPN</span>
              <Heart className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
