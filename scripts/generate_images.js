import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. TatoLogoNegro.svg
const tatoLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" style="background:#000000;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <rect width="800" height="800" fill="#000000"/>
  
  <!-- Outer Shield Glow / Outline -->
  <path d="M400 60 L620 150 C620 380 530 540 400 610 C270 540 180 380 180 150 Z" 
        fill="#080c14" stroke="#ff6a00" stroke-width="14" stroke-linejoin="round"/>
  <path d="M400 84 L596 164 C596 368 516 512 400 576 C284 512 204 368 204 164 Z" 
        fill="#0a0f1d" stroke="#ffffff" stroke-width="4" opacity="0.3"/>

  <!-- Orange Cat Character -->
  <!-- Ears -->
  <polygon points="310,180 350,270 270,240" fill="#ea580c"/>
  <polygon points="315,195 345,265 280,242" fill="#fed7aa"/>
  <polygon points="490,180 450,270 530,240" fill="#ea580c"/>
  <polygon points="485,195 455,265 520,242" fill="#fed7aa"/>

  <!-- Head Base -->
  <ellipse cx="400" cy="285" rx="100" ry="90" fill="#f97316"/>
  <!-- Body / Chest -->
  <path d="M330 350 C330 310 360 295 400 295 C440 295 470 310 470 350 C470 420 445 470 400 480 C355 470 330 420 330 350 Z" fill="#ea580c"/>
  <ellipse cx="400" cy="330" rx="42" ry="32" fill="#fef08a" opacity="0.95"/>
  <path d="M380 360 Q400 375 420 360 Q425 430 400 460 Q375 430 380 360 Z" fill="#fef08a" opacity="0.85"/>

  <!-- Whiskers -->
  <line x1="280" y1="295" x2="350" y2="305" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
  <line x1="275" y1="315" x2="350" y2="315" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
  <line x1="520" y1="295" x2="450" y2="305" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
  <line x1="525" y1="315" x2="450" y2="315" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>

  <!-- Sunglasses -->
  <rect x="382" y="258" width="36" height="10" rx="5" fill="#111827"/>
  <circle cx="355" cy="265" r="35" fill="#0f172a" stroke="#334155" stroke-width="6"/>
  <circle cx="355" cy="265" r="28" fill="#020617"/>
  <path d="M340 250 Q360 245 365 260" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
  <circle cx="445" cy="265" r="35" fill="#0f172a" stroke="#334155" stroke-width="6"/>
  <circle cx="445" cy="265" r="28" fill="#020617"/>
  <path d="M430 250 Q450 245 455 260" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" opacity="0.7"/>

  <!-- Collar & T Medal -->
  <rect x="360" y="360" width="80" height="14" rx="7" fill="#1e293b"/>
  <circle cx="400" cy="390" r="20" fill="#f59e0b" stroke="#b45309" stroke-width="4"/>
  <text x="400" y="399" text-anchor="middle" fill="#000000" font-size="24" font-weight="900">T</text>

  <!-- Padlock with Orange Orbit -->
  <g transform="translate(460, 360)">
    <path d="M -30 90 C 20 125 120 110 140 40" stroke="#f97316" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 25 35 V 15 C 25 3 36 -8 50 -8 C 64 -8 75 3 75 15 V 35" stroke="#ffffff" stroke-width="12" fill="none" stroke-linecap="round"/>
    <rect x="10" y="35" width="80" height="70" rx="14" fill="#ffffff"/>
    <circle cx="50" cy="62" r="8" fill="#0f172a"/>
    <rect x="46" y="65" width="8" height="16" fill="#0f172a"/>
  </g>

  <!-- Typography: TatoVPN -->
  <text x="350" y="695" text-anchor="end" fill="#ffffff" font-size="64" font-weight="900" letter-spacing="-1">Tato</text>
  <text x="355" y="695" text-anchor="start" fill="#f97316" font-size="64" font-weight="900" letter-spacing="1">VPN</text>

  <!-- Subtitle -->
  <text x="400" y="730" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700" letter-spacing="4">CONECTA  •  PROTEGE  •  NAVEGA LIBRE</text>

  <!-- 4 Feature Icons Row -->
  <g transform="translate(160, 755)" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">
    <!-- Tunnel SSH -->
    <g transform="translate(50, 0)">
      <path d="M0 -15 L12 -10 L12 2 C12 10 0 16 0 16 C0 16 -12 10 -12 2 L-12 -10 Z" fill="none" stroke="#f97316" stroke-width="2"/>
      <circle cx="0" cy="-2" r="2.5" fill="#ffffff"/>
      <text y="24">TÚNEL SSH</text>
    </g>
    <!-- Proxy SOCKS5 -->
    <g transform="translate(170, 0)">
      <circle cx="0" cy="0" r="12" fill="none" stroke="#f97316" stroke-width="2"/>
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#f97316" stroke-width="1.5"/>
      <line x1="0" y1="-12" x2="0" y2="12" stroke="#f97316" stroke-width="1.5"/>
      <text y="24">PROXY SOCKS5</text>
    </g>
    <!-- Seguro -->
    <g transform="translate(290, 0)">
      <path d="M0 -15 L12 -10 L12 2 C12 10 0 16 0 16 C0 16 -12 10 -12 2 L-12 -10 Z" fill="none" stroke="#f97316" stroke-width="2"/>
      <polyline points="-5,0 -1,4 5,-4" fill="none" stroke="#22c55e" stroke-width="2.5"/>
      <text y="24">SEGURO</text>
    </g>
    <!-- Rápido -->
    <g transform="translate(410, 0)">
      <circle cx="0" cy="0" r="12" fill="none" stroke="#f97316" stroke-width="2"/>
      <polyline points="0,-1 4,-5" stroke="#f97316" stroke-width="2" stroke-linecap="round"/>
      <text y="24">RÁPIDO</text>
    </g>
  </g>
</svg>`;

// Helper for shared TatoVPN window layout
function buildWindowBase(activeTab, titleRight = '') {
  return `
  <!-- Window Header -->
  <rect width="1000" height="34" fill="#0b1220"/>
  <line x1="0" y1="34" x2="1000" y2="34" stroke="#1e293b" stroke-width="1"/>
  <text x="14" y="22" fill="#94a3b8" font-size="13" font-weight="600">TatoVPN</text>
  <text x="920" y="21" fill="#64748b" font-size="14 font-weight="600">—  ▢  ✕</text>

  <!-- Left Sidebar -->
  <rect x="0" y="34" width="240" height="666" fill="#070c14"/>
  <line x1="240" y1="34" x2="240" y2="700" stroke="#1e293b" stroke-width="1"/>

  <!-- Sidebar Brand Logo -->
  <g transform="translate(20, 50)">
    <rect width="200" height="70" rx="10" fill="#0c1424" stroke="#1e293b"/>
    <circle cx="45" cy="35" r="22" fill="#ff6a00"/>
    <text x="78" y="36" fill="#ffffff" font-size="16" font-weight="900">Tato<tspan fill="#ff6a00">VPN</tspan></text>
    <text x="78" y="49" fill="#94a3b8" font-size="9" font-weight="700">CONECTA • PROTEGE</text>
  </g>

  <!-- Sidebar Menu Items -->
  <g transform="translate(16, 136)" font-size="13" font-weight="600">
    <!-- Dashboard -->
    <g transform="translate(0, 0)">
      <text x="36" y="22" fill="#94a3b8">📊 Dashboard</text>
    </g>
    <!-- Inicio -->
    <g transform="translate(0, 36)">
      ${activeTab === 'inicio' ? '<rect width="208" height="36" rx="8" fill="#f97316"/>' : ''}
      <text x="36" y="23" fill="${activeTab === 'inicio' ? '#ffffff' : '#94a3b8'}">🏠 Inicio</text>
    </g>
    <!-- Configuración SSH -->
    <g transform="translate(0, 78)">
      ${activeTab === 'ssh' ? '<rect width="208" height="36" rx="8" fill="#f97316"/>' : ''}
      <text x="36" y="23" fill="${activeTab === 'ssh' ? '#ffffff' : '#94a3b8'}">🔑 Configuración SSH</text>
    </g>
    <!-- Mis configuraciones -->
    <g transform="translate(0, 120)">
      <text x="36" y="23" fill="#94a3b8">💾 Mis configuraciones</text>
    </g>
    <!-- Filtrado de Contenido -->
    <g transform="translate(0, 156)">
      <text x="36" y="23" fill="#94a3b8">🛡️ Filtrado de Contenido</text>
    </g>
    <!-- Registro de conexión -->
    <g transform="translate(0, 192)">
      <text x="36" y="23" fill="#94a3b8">📶 Registro de conexión</text>
    </g>
    <!-- Modo Servidor -->
    <g transform="translate(0, 228)">
      ${activeTab === 'servidor' ? '<rect width="208" height="36" rx="8" fill="#f97316"/>' : ''}
      <text x="36" y="23" fill="${activeTab === 'servidor' ? '#ffffff' : '#94a3b8'}">🖥️ Modo Servidor</text>
    </g>
    <!-- Conexión Remota -->
    <g transform="translate(0, 270)">
      <text x="36" y="23" fill="#94a3b8">📁 Conexión Remota</text>
    </g>
    <!-- Escritorio Remoto -->
    <g transform="translate(0, 306)">
      ${activeTab === 'remoto' ? '<rect width="208" height="36" rx="8" fill="#f97316"/>' : ''}
      <text x="36" y="23" fill="${activeTab === 'remoto' ? '#ffffff' : '#94a3b8'}">💻 Escritorio Remoto</text>
    </g>
    <!-- Acerca de -->
    <g transform="translate(0, 348)">
      <text x="36" y="23" fill="#94a3b8">ℹ️ Acerca de</text>
    </g>
  </g>

  <!-- Sidebar Bottom Widget -->
  <g transform="translate(16, 610)">
    <rect width="208" height="74" rx="10" fill="#0b1220" stroke="#1e293b"/>
    <circle cx="20" cy="24" r="5" fill="${activeTab === 'conectado' ? '#22c55e' : '#64748b'}"/>
    <text x="34" y="28" fill="#cbd5e1" font-size="12" font-weight="700">Estado actual</text>
    <text x="20" y="48" fill="${activeTab === 'conectado' ? '#22c55e' : '#f8fafc'}" font-size="13" font-weight="800">${activeTab === 'conectado' ? 'Conectado' : 'Desconectado'}</text>
    <text x="20" y="62" fill="#94a3b8" font-size="10">${activeTab === 'conectado' ? 'Túnel VPN activo' : 'No hay conexión activa'}</text>
  </g>
  `;
}

// 2. screenshot_inicio.svg
const screenshotInicioSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700" style="background:#070b14;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <rect width="1000" height="700" fill="#080e1b"/>
  ${buildWindowBase('inicio')}

  <!-- Main Area: Inicio Desconectado -->
  <!-- Big Orange Lock Circle -->
  <g transform="translate(620, 250)">
    <circle cx="0" cy="0" r="88" fill="#0f172a" stroke="#f97316" stroke-width="8" filter="drop-shadow(0 0 25px rgba(249,115,22,0.45))"/>
    <!-- Unlocked Padlock -->
    <path d="M 0 -22 V -40 C 0 -54 12 -65 26 -65 C 40 -65 52 -54 52 -40 V -28" stroke="#f97316" stroke-width="8" fill="none" stroke-linecap="round"/>
    <rect x="-24" y="-22" width="48" height="42" rx="8" fill="#f97316"/>
    <circle cx="0" cy="-4" r="4" fill="#080e1b"/>
    <rect x="-2.5" y="-2" width="5" height="10" fill="#080e1b"/>
  </g>

  <!-- Connect Button -->
  <g transform="translate(620, 390)">
    <rect x="-85" y="0" width="170" height="44" rx="8" fill="#16a34a" filter="drop-shadow(0 4px 12px rgba(22,163,74,0.4))"/>
    <text x="0" y="28" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">►  Conectar</text>
  </g>

  <!-- Dropdown Selector -->
  <g transform="translate(620, 460)">
    <rect x="-105" y="0" width="210" height="38" rx="6" fill="#121b2d" stroke="#334155"/>
    <text x="-75" y="24" fill="#f8fafc" font-size="13" font-weight="700">🛡️  SSH • Direct</text>
    <text x="80" y="24" fill="#94a3b8" font-size="12">▼</text>
  </g>

  <!-- Top Right Icons -->
  <text x="910" y="68" fill="#94a3b8" font-size="18">📄   ⚙️</text>
</svg>`;

// 3. screenshot_ssh.svg
const screenshotSshSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700" style="background:#070b14;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <rect width="1000" height="700" fill="#080e1b"/>
  ${buildWindowBase('ssh')}

  <!-- SSH Config Screen Content -->
  <g transform="translate(270, 60)">
    <text x="0" y="25" fill="#f8fafc" font-size="20" font-weight="800">🔑 Configuración de Cuenta SSH</text>
    <text x="0" y="46" fill="#94a3b8" font-size="12">Ingresa los datos de tu servidor VPS / SSH y configura los parámetros de conexión</text>

    <!-- Card 1: Datos de la VPS -->
    <g transform="translate(0, 70)">
      <rect width="690" height="170" rx="10" fill="#0d1527" stroke="#1e293b"/>
      <text x="20" y="30" fill="#f97316" font-size="13" font-weight="800">DATOS DE LA VPS O CUENTA SSH</text>
      
      <!-- Host & Port -->
      <text x="20" y="62" fill="#94a3b8" font-size="11">Host SSH</text>
      <rect x="20" y="70" width="500" height="34" rx="6" fill="#080e1b" stroke="#334155"/>
      <text x="32" y="92" fill="#cbd5e1" font-size="12" font-family="monospace">fr1.sshweb.site o 192.168.1.1</text>

      <text x="540" y="62" fill="#94a3b8" font-size="11">Puerto (443)</text>
      <rect x="540" y="70" width="130" height="34" rx="6" fill="#080e1b" stroke="#334155"/>
      <text x="552" y="92" fill="#f97316" font-size="12" font-weight="700" font-family="monospace">443</text>

      <!-- Username & Password -->
      <text x="20" y="126" fill="#94a3b8" font-size="11">Nombre de Usuario</text>
      <rect x="20" y="134" width="315" height="34" rx="6" fill="#080e1b" stroke="#334155"/>
      <text x="32" y="156" fill="#cbd5e1" font-size="12" font-family="monospace">sshocean-usuario</text>

      <text x="355" y="126" fill="#94a3b8" font-size="11">Contraseña</text>
      <rect x="355" y="134" width="315" height="34" rx="6" fill="#080e1b" stroke="#334155"/>
      <text x="367" y="156" fill="#cbd5e1" font-size="14">••••••••••••</text>
      <text x="645" y="156" fill="#64748b" font-size="14">👁</text>
    </g>

    <!-- Card 2: Configuración Local SOCKS5 / VPN -->
    <g transform="translate(0, 260)">
      <rect width="690" height="120" rx="10" fill="#0d1527" stroke="#1e293b"/>
      <text x="20" y="30" fill="#f97316" font-size="13" font-weight="800">CONFIGURACIÓN LOCAL (SOCKS5 / VPN)</text>

      <text x="20" y="58" fill="#94a3b8" font-size="11">IP de escucha</text>
      <rect x="20" y="66" width="315" height="34" rx="6" fill="#080e1b" stroke="#334155"/>
      <text x="32" y="88" fill="#f8fafc" font-size="12" font-family="monospace">127.0.0.1</text>

      <text x="355" y="58" fill="#94a3b8" font-size="11">Puerto Local</text>
      <rect x="355" y="66" width="315" height="34" rx="6" fill="#080e1b" stroke="#334155"/>
      <text x="367" y="88" fill="#f8fafc" font-size="12" font-family="monospace">1080</text>
    </g>

    <!-- Checkbox TUN / Wintun -->
    <g transform="translate(20, 395)">
      <rect width="18" height="18" rx="4" fill="#0284c7"/>
      <polyline points="4,9 8,13 15,5" fill="none" stroke="#ffffff" stroke-width="2.5"/>
      <text x="28" y="14" fill="#38bdf8" font-size="12" font-weight="700">🛡️ Activar VPN a nivel de sistema (TUN/Wintun - Redirigir TODO el tráfico de la PC)</text>
    </g>

    <!-- Card 3: Configuración Avanzada -->
    <g transform="translate(0, 430)">
      <rect width="690" height="80" rx="10" fill="#0d1527" stroke="#1e293b"/>
      <text x="20" y="28" fill="#f97316" font-size="13" font-weight="800">⚙️ CONFIGURACIÓN AVANZADA</text>
      <rect x="20" y="40" width="90" height="30" rx="4" fill="#080e1b" stroke="#334155"/>
      <text x="32" y="60" fill="#f8fafc" font-size="12" font-family="monospace">22</text>
      <text x="125" y="60" fill="#94a3b8" font-size="11">Puerto interno del servicio SSH en el servidor (por defecto 22).</text>
    </g>

    <!-- Action Buttons -->
    <g transform="translate(360, 535)">
      <rect x="0" y="0" width="150" height="42" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="75" y="26" fill="#cbd5e1" font-size="13" font-weight="700" text-anchor="middle">💾 Guardar config</text>

      <rect x="165" y="0" width="165" height="42" rx="8" fill="#ea580c" filter="drop-shadow(0 4px 10px rgba(234,88,12,0.4))"/>
      <text x="247" y="26" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle">► Guardar y Conectar</text>
    </g>
  </g>
</svg>`;

// 4. screenshot_servidor.svg
const screenshotServidorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700" style="background:#070b14;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <rect width="1000" height="700" fill="#080e1b"/>
  ${buildWindowBase('servidor')}

  <g transform="translate(270, 60)">
    <text x="0" y="25" fill="#f8fafc" font-size="20" font-weight="800">🖥️ Modo Servidor Local (Tato Host)</text>
    <text x="0" y="46" fill="#94a3b8" font-size="12">Servidor para transferir archivos vía Conexión Remota (SFTP), compartir internet o escritorio remoto.</text>

    <!-- Left Box: Controles del Servidor -->
    <g transform="translate(0, 70)">
      <rect width="335" height="460" rx="10" fill="#0d1527" stroke="#1e293b"/>
      
      <circle cx="25" cy="30" r="5" fill="#ef4444"/>
      <text x="38" y="34" fill="#ef4444" font-size="13" font-weight="800">SERVIDOR DETENIDO</text>
      <text x="20" y="58" fill="#94a3b8" font-size="11">El servidor está apagado. Presiona encender para activarlo.</text>

      <!-- Big Orange Button: Encender Servidor -->
      <rect x="20" y="80" width="295" height="42" rx="8" fill="#ea580c" filter="drop-shadow(0 4px 12px rgba(234,88,12,0.35))"/>
      <text x="167" y="106" fill="#ffffff" font-size="14" font-weight="800" text-anchor="middle">►  Encender Servidor</text>

      <!-- Modo de Operacion -->
      <text x="20" y="154" fill="#f97316" font-size="12" font-weight="800">🎯 Modo de Operación / Propósito:</text>
      
      <g transform="translate(20, 172)">
        <circle cx="8" cy="8" r="6" stroke="#94a3b8" fill="none"/>
        <text x="24" y="12" fill="#cbd5e1" font-size="11">📁 Conexión Remota (Archivos / SFTP)</text>
      </g>
      <g transform="translate(20, 202)">
        <circle cx="8" cy="8" r="6" stroke="#94a3b8" fill="none"/>
        <text x="24" y="12" fill="#cbd5e1" font-size="11">📶 Compartir Internet (HTTP Injector / Proxy)</text>
      </g>
      <g transform="translate(20, 232)">
        <circle cx="8" cy="8" r="6" fill="#0284c7" stroke="#0284c7"/>
        <circle cx="8" cy="8" r="2.5" fill="#ffffff"/>
        <text x="24" y="12" fill="#38bdf8" font-size="11" font-weight="700">💻 Escritorio Remoto (Ver y controlar laptop)</text>
      </g>

      <!-- Modo de Red / Alcance -->
      <text x="20" y="280" fill="#f97316" font-size="12" font-weight="800">🌐 Modo de Red / Alcance:</text>
      <g transform="translate(20, 300)">
        <circle cx="8" cy="8" r="6" stroke="#94a3b8" fill="none"/>
        <text x="24" y="12" fill="#cbd5e1" font-size="11" font-weight="700">Red Local (Wi-Fi / LAN / Hotspot)</text>
        <text x="24" y="26" fill="#64748b" font-size="9">Para laptops o celulares en la misma red Wi-Fi.</text>
      </g>
      <g transform="translate(20, 350)">
        <circle cx="8" cy="8" r="6" fill="#0284c7" stroke="#0284c7"/>
        <circle cx="8" cy="8" r="2.5" fill="#ffffff"/>
        <text x="24" y="12" fill="#38bdf8" font-size="11" font-weight="700">Acceso Remoto (Túnel Inverso / Internet)</text>
        <text x="24" y="26" fill="#94a3b8" font-size="9">Permite conectar desde cualquier red sin abrir puertos.</text>
      </g>
    </g>

    <!-- Right Box: Datos para tus Dispositivos -->
    <g transform="translate(355, 70)">
      <rect width="335" height="460" rx="10" fill="#0d1527" stroke="#1e293b"/>
      <text x="20" y="30" fill="#f97316" font-size="13" font-weight="800">📱 Datos para tus Dispositivos</text>

      <text x="20" y="60" fill="#94a3b8" font-size="11">IP Local de tu PC (Wi-Fi / Hotspot):</text>
      <rect x="20" y="68" width="235" height="32" rx="4" fill="#080e1b" stroke="#334155"/>
      <text x="30" y="89" fill="#38bdf8" font-size="12" font-family="monospace">10.50.59.223</text>
      <rect x="260" y="68" width="55" height="32" rx="4" fill="#1e293b"/>
      <text x="287" y="89" fill="#cbd5e1" font-size="11" text-anchor="middle">Copiar</text>

      <text x="20" y="125" fill="#94a3b8" font-size="11">Host Público / Túnel Remoto:</text>
      <rect x="20" y="133" width="235" height="32" rx="4" fill="#080e1b" stroke="#334155"/>
      <text x="30" y="154" fill="#38bdf8" font-size="11" font-family="monospace">Se activará al encender servidor</text>
      <rect x="260" y="133" width="55" height="32" rx="4" fill="#1e293b"/>
      <text x="287" y="154" fill="#cbd5e1" font-size="11" text-anchor="middle">Copiar</text>

      <text x="20" y="190" fill="#94a3b8" font-size="11">Credencial Formato TatoVPN / SSH:</text>
      <rect x="20" y="198" width="295" height="32" rx="4" fill="#080e1b" stroke="#334155"/>
      <text x="30" y="219" fill="#eab308" font-size="10" font-family="monospace">(Enciende el servidor para obtener el enlace)</text>

      <rect x="20" y="245" width="295" height="34" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="167" y="267" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">📋 Copiar Configuración Completa</text>

      <!-- Live Log -->
      <text x="20" y="315" fill="#94a3b8" font-size="12" font-weight="700">📜 Registro en Vivo del Servidor:</text>
      <rect x="20" y="325" width="295" height="110" rx="6" fill="#040711" stroke="#1e293b"/>
      <text x="30" y="350" fill="#94a3b8" font-size="10" font-family="monospace">[00:23:42] ℹ️ Módulo Modo Servidor listo</text>
      <text x="30" y="370" fill="#64748b" font-size="10" font-family="monospace">con soporte para SFTP, HTTP Injector</text>
      <text x="30" y="390" fill="#64748b" font-size="10" font-family="monospace">y Escritorio Remoto SSH.</text>
    </g>
  </g>
</svg>`;

// 5. screenshot_escritorio_remoto.svg (with green circle on Calidad 90%!)
const screenshotEscritorioSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700" style="background:#070b14;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <rect width="1000" height="700" fill="#080e1b"/>
  ${buildWindowBase('remoto')}

  <!-- Remote Desktop Content -->
  <g transform="translate(250, 40)">
    <!-- Subheader bar -->
    <rect width="730" height="40" rx="6" fill="#0c1322" stroke="#1e293b"/>
    <circle cx="18" cy="20" r="4" fill="#22c55e"/>
    <text x="30" y="24" fill="#38bdf8" font-size="12" font-family="monospace">Conectado a xihrv-179-6-26-4.run.pinggy-free.link:39313 (1920x1080)</text>
    
    <text x="505" y="24" fill="#94a3b8" font-size="11">9.0 FPS</text>
    <text x="560" y="24" fill="#e2e8f0" font-size="11">Cal.: [======] 90%</text>
    <text x="640" y="24" fill="#cbd5e1" font-size="11">⤢ Pantalla</text>

    <!-- Disconnect button top right -->
    <rect x="690" y="6" width="32" height="28" rx="4" fill="#dc2626"/>
    <text x="706" y="24" fill="#ffffff" font-size="12" text-anchor="middle">✕</text>

    <!-- Green Circle Annotation (Exactly from user upload!) -->
    <ellipse cx="590" cy="22" rx="45" ry="16" fill="none" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,2"/>
    <path d="M 580 90 L 590 42" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
    <polygon points="590,38 584,48 596,48" fill="#22c55e"/>

    <!-- Simulated Windows Remote Stream Background -->
    <g transform="translate(0, 48)">
      <rect width="730" height="580" rx="8" fill="#000000" stroke="#1e293b"/>

      <!-- Desktop Icons -->
      <g transform="translate(20, 20)" font-size="9" fill="#ffffff" text-anchor="middle">
        <!-- Col 1 -->
        <g transform="translate(20, 20)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#0284c7"/>
          <text y="24">Word</text>
        </g>
        <g transform="translate(20, 85)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#16a34a"/>
          <text y="24">Excel</text>
        </g>
        <g transform="translate(20, 150)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#ea580c"/>
          <text y="24">Postman</text>
        </g>
        <g transform="translate(20, 215)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#2563eb"/>
          <text y="24">VS Code</text>
        </g>
        <g transform="translate(20, 280)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#eab308"/>
          <text y="24">Python</text>
        </g>
        <g transform="translate(20, 345)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#0284c7"/>
          <text y="24">Docker</text>
        </g>

        <!-- Col 2 -->
        <g transform="translate(90, 20)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#9333ea"/>
          <text y="24">DevIn</text>
        </g>
        <g transform="translate(90, 85)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#dc2626"/>
          <text y="24">Angular</text>
        </g>
        <g transform="translate(90, 150)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#059669"/>
          <text y="24">SpringBoot</text>
        </g>
        <g transform="translate(90, 215)">
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#0284c7"/>
          <text y="24">SQL Server</text>
        </g>
      </g>

      <!-- Center Floating Badge -->
      <g transform="translate(365, 260)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="rgba(15,23,42,0.9)" stroke="#f97316"/>
        <text x="0" y="5" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">💻 Control Remoto SSH en Vivo (1080p)</text>
      </g>

      <!-- Windows Taskbar -->
      <g transform="translate(0, 540)">
        <rect width="730" height="40" fill="#0f172a" stroke="#1e293b"/>
        <rect x="330" y="8" width="80" height="24" rx="4" fill="#1e293b"/>
        <text x="350" y="24" fill="#94a3b8" font-size="10">🔍 Buscar</text>
        <text x="660" y="25" fill="#cbd5e1" font-size="11" font-family="monospace">23:38</text>
      </g>
    </g>
  </g>
</svg>`;

// 6. screenshot_conectado.svg
const screenshotConectadoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700" style="background:#070b14;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <rect width="1000" height="700" fill="#080e1b"/>
  ${buildWindowBase('conectado')}

  <!-- Main Area: Conectado (Green Glowing Lock) -->
  <g transform="translate(620, 250)">
    <circle cx="0" cy="0" r="88" fill="#0f172a" stroke="#22c55e" stroke-width="8" filter="drop-shadow(0 0 35px rgba(34,197,94,0.5))"/>
    <!-- Closed Padlock -->
    <path d="M -18 -15 V -34 C -18 -45 -10 -54 0 -54 C 10 -54 18 -45 18 -34 V -15" stroke="#22c55e" stroke-width="8" fill="none" stroke-linecap="round"/>
    <rect x="-24" y="-15" width="48" height="42" rx="8" fill="#22c55e"/>
    <circle cx="0" cy="2" r="4" fill="#080e1b"/>
    <rect x="-2.5" y="4" width="5" height="10" fill="#080e1b"/>
  </g>

  <!-- Disconnect Button -->
  <g transform="translate(620, 390)">
    <rect x="-85" y="0" width="170" height="44" rx="8" fill="#b91c1c" filter="drop-shadow(0 4px 12px rgba(185,28,28,0.4))"/>
    <text x="0" y="28" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">■  Desconectar</text>
  </g>

  <!-- Dropdown Selector -->
  <g transform="translate(620, 460)">
    <rect x="-105" y="0" width="210" height="38" rx="6" fill="#121b2d" stroke="#334155"/>
    <text x="-75" y="24" fill="#f8fafc" font-size="13" font-weight="700">🛡️  SSH • Direct</text>
    <text x="80" y="24" fill="#94a3b8" font-size="12">▼</text>
  </g>

  <!-- Top Right Icons -->
  <text x="910" y="68" fill="#94a3b8" font-size="18">📄   ⚙️</text>
</svg>`;

// Write all images
fs.writeFileSync(path.join(outDir, 'TatoLogoNegro.svg'), tatoLogoSvg);
fs.writeFileSync(path.join(outDir, 'screenshot_inicio.svg'), screenshotInicioSvg);
fs.writeFileSync(path.join(outDir, 'screenshot_ssh.svg'), screenshotSshSvg);
fs.writeFileSync(path.join(outDir, 'screenshot_servidor.svg'), screenshotServidorSvg);
fs.writeFileSync(path.join(outDir, 'screenshot_escritorio_remoto.svg'), screenshotEscritorioSvg);
fs.writeFileSync(path.join(outDir, 'screenshot_conectado.svg'), screenshotConectadoSvg);

console.log('Successfully generated all 6 standalone image assets in public/images/');
