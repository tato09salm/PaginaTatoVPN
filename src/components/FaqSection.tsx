import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
  {
    question: '¿Qué es TatoVPN y qué ventajas ofrece frente a una VPN tradicional?',
    answer:
      'TatoVPN es una suite de conectividad avanzada para Windows diseñada tanto para clientes como para servidores. Utiliza túneles SSH/SSL de alta velocidad combinados con el controlador Wintun para abarcar todo el tráfico de tu PC, permitiéndote evadir restricciones y censura de red. Además, incorpora un Modo Servidor Local (Tato Host) y control de Escritorio Remoto sin necesidad de abrir puertos.',
  },
  {
    question: '¿Cómo funciona el enlace de descarga directa?',
    answer:
      'Al pulsar el botón de descarga directa, el instalador se obtiene de forma inmediata a través del enlace oficial alojado en Google Drive. Si tu navegador bloquea descargas automáticas o requiere confirmación, dispones de botones alternativos para descarga directa y acceso al visor de Drive.',
  },
  {
    question: '¿Necesito abrir puertos en mi router para usar el Modo Servidor o el Escritorio Remoto?',
    answer:
      'No. TatoVPN implementa tecnología de túnel inverso (Reverse Tunneling), lo que permite que otras computadoras o dispositivos móviles se conecten a tu servidor Tato Host o manejen tu laptop de manera remota a través de internet, sin requerir una IP pública fija ni configurar redirección de puertos en tu módem.',
  },
  {
    question: '¿Qué requisitos del sistema necesita TatoVPN?',
    answer:
      'TatoVPN es compatible con Windows 10 y Windows 11 en versiones de 64 bits. Para la redirección completa del tráfico a nivel de sistema, requiere permisos de administrador para instalar o inicializar el adaptador virtual TUN/Wintun.',
  },
  {
    question: '¿Puedo transferir archivos y compartir internet con otros dispositivos?',
    answer:
      'Sí. El Modo Servidor Local (Tato Host) incluye soporte nativo para SFTP (transferencia rápida y segura de archivos) y la función de Compartir Internet como HTTP Injector o Proxy local para celulares y otras laptops en tu red.',
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
            <span>Respuestas Rápidas</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Todo lo que necesitas saber para instalar, conectar y usar TatoVPN en tu computadora.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#0c1424] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
