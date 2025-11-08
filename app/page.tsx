'use client';

import GiftList from '@/components/GiftList';
import PhotoCarousel from '@/components/PhotoCarousel';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Two Columns */}
      <section className="h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Gift List */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/casal1.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 h-full">
            <GiftList />
          </div>
        </div>

        {/* Right Column - RSVP */}
        <div className="bg-gradient-to-br from-cream via-white to-beige flex flex-col items-center justify-center p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-lg"
          >
            {/* Decorative Element */}
            <div className="mb-8">
              <svg
                className="w-16 h-16 mx-auto text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-800 mb-4">
              Gustavo & Kimberly
            </h1>

            <p className="text-xl text-gray-600 mb-8 font-cormorant">
              Estamos felizes em compartilhar este momento especial com você
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                  Confirme sua Presença
                </h3>
                <p className="text-gray-600 mb-4">
                  Sua presença é muito importante para nós!
                </p>
                <Link href="/confirmar">
                  <button className="w-full py-4 bg-gradient-to-r from-gold to-darkGold text-white rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all">
                    Confirmar Presença
                  </button>
                </Link>
              </div>

              <div className="bg-beige rounded-lg p-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="block mb-2 text-base">Quando?</strong>
                  Sábado, 15 de Junho de 2025 às 17h
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mt-4">
                  <strong className="block mb-2 text-base">Onde?</strong>
                  Jardim das Flores<br />
                  Av. Primavera, 1500 - São Paulo/SP
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoCarousel />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="font-cormorant text-lg">
          Feito com amor para Gustavo & Kimberly 💍
        </p>
      </footer>
    </main>
  );
}
