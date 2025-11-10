'use client';

import { useState } from 'react';
import PhotoCarousel from '@/components/PhotoCarousel';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Animated Header */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-rose to-gold z-50">
        <motion.div
          className="h-full bg-white/30"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 1920;
          const randomY = Math.random() * 1080;
          const randomDelay = Math.random() * 5;
          const randomDuration = Math.random() * 10 + 10;
          const randomOffset = Math.random() * 100 - 50;

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold/20 rounded-full"
              initial={{
                x: randomX,
                y: randomY,
              }}
              animate={{
                y: [null, -100, 1200],
                x: [null, randomOffset],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          );
        })}
      </div>

      {/* Hero Section - Two Columns */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Left Column - Gift Info */}
        <div
          className="relative bg-cover bg-center min-h-screen lg:min-h-0"
          style={{
            backgroundImage: `url('/images/casal1.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-xl"
            >
              {/* Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="mb-8"
              >
                <svg
                  className="w-24 h-24 mx-auto text-gold drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
                Lista de Presentes
              </h2>

              <p className="text-lg lg:text-xl text-white/90 mb-4 font-cormorant leading-relaxed">
                Sua presença é o nosso maior presente, mas se desejar nos presentear,
                preparamos uma lista com carinho.
              </p>

              <p className="text-base text-white/80 mb-8">
                Gostaria de ver nossa lista de presentes e escolher algo especial para nós?
              </p>

              <div className="space-y-4">
                <Link href="/presentes">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 px-8 bg-gradient-to-r from-gold to-darkGold text-white rounded-lg font-semibold text-lg shadow-2xl hover:shadow-gold/50 transition-all"
                  >
                    ✨ Ver Lista de Presentes
                  </motion.button>
                </Link>

                <p className="text-sm text-white/60">
                  Todos os presentes são registrados de forma privada e segura
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="mt-12 flex justify-center gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-gold rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
                  className="w-3 h-3 bg-rose rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
                  className="w-3 h-3 bg-gold rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - RSVP */}
        <div className="bg-gradient-to-br from-cream via-white to-beige flex flex-col items-center justify-center p-8 lg:p-12 min-h-screen lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-lg"
          >
            {/* Decorative Element */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mb-8"
            >
              <svg
                className="w-20 h-20 mx-auto text-gold drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-800 mb-4">
              Gustavo & Kimberly
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 mb-8 font-cormorant"
            >
              Estamos felizes em compartilhar este momento especial com você
            </motion.p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                  Confirme sua Presença
                </h3>
                <p className="text-gray-600 mb-4">
                  Sua presença é muito importante para nós!
                </p>
                <Link href="/confirmar">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-gold to-darkGold text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    💌 Confirmar Presença
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-beige to-rose rounded-xl p-6 shadow-lg"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="block mb-2 text-base flex items-center gap-2">
                        <span>📅</span> Quando?
                      </strong>
                      Sábado, 15 de Junho de 2025 às 17h
                    </p>
                  </div>
                  <div className="border-t border-white/50 pt-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="block mb-2 text-base flex items-center gap-2">
                        <span>📍</span> Onde?
                      </strong>
                      Jardim das Flores<br />
                      Av. Primavera, 1500 - São Paulo/SP
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoCarousel />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <p className="font-cormorant text-lg relative z-10">
          Feito com amor para Gustavo & Kimberly 💍
        </p>
      </footer>
    </main>
  );
}
