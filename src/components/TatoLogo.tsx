import React from 'react';

interface TatoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const TatoLogo: React.FC<TatoLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-28 h-28',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Real TatoLogo image asset from public/images/ */}
      <div className={`relative ${sizeClasses} shrink-0 select-none overflow-hidden rounded-xl`}>
        <img
          src={`${import.meta.env.BASE_URL}images/TatoLogoNegro.png`}
          alt="TatoVPN Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight">
            <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Tato
            </span>
            <span className="text-xl sm:text-2xl font-black text-orange-500">
              VPN
            </span>
          </div>
          <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest -mt-1">
            Conecta • Protege • Navega
          </span>
        </div>
      )}
    </div>
  );
};
