/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveCube } from './components/InteractiveCube';
import { FeaturesSection } from './components/FeaturesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { FloatingDownloadBar } from './components/FloatingDownloadBar';

export default function App() {
  // Default to dark mode to match the native TatoVPN app design aesthetic
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('tatovpn-theme');
    if (saved) return saved === 'dark';
    return true; // default dark
  });

  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tatovpn-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode ? 'dark bg-[#070b14] text-slate-100' : 'bg-[#fcfdfd] text-slate-900'
      }`}
    >
      {/* Header */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenDownload={() => setIsDownloadOpen(true)} />

        {/* 3D Interactive CSS Cube Showcase */}
        <InteractiveCube onOpenDownload={() => setIsDownloadOpen(true)} />

        {/* 3 Core Pillars & Features */}
        <FeaturesSection onOpenDownload={() => setIsDownloadOpen(true)} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenDownload={() => setIsDownloadOpen(true)} />

      {/* Persistent Floating Download Action Bar on Scroll */}
      <FloatingDownloadBar onOpenDownload={() => setIsDownloadOpen(true)} />

      {/* Direct Download Modal & Installation Guide */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
}
