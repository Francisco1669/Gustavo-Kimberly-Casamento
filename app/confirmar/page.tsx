'use client';

import ConfirmForm from '@/components/ConfirmForm';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConfirmarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-rose py-12 px-4">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/">
          <button className="mb-6 flex items-center gap-2 text-gray-700 hover:text-gold transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar
          </button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <svg
              className="w-20 h-20 mx-auto text-gold"
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

          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Confirme sua Presença
          </h1>
          <p className="text-lg text-gray-600 font-cormorant max-w-2xl mx-auto">
            Será uma honra ter você conosco neste dia tão especial.
            Por favor, confirme sua presença para nos ajudar com os preparativos.
          </p>
        </motion.div>

        {/* Confirmation Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ConfirmForm />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6 text-center">
            Informações Importantes
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📅 Data e Horário</h4>
                <p className="text-gray-600">Sábado, 15 de Junho de 2025</p>
                <p className="text-gray-600">Cerimônia às 17h</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📍 Local</h4>
                <p className="text-gray-600">Jardim das Flores</p>
                <p className="text-gray-600">Av. Primavera, 1500</p>
                <p className="text-gray-600">São Paulo/SP</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">👔 Dress Code</h4>
                <p className="text-gray-600">Traje Passeio Completo</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🎁 Lista de Presentes</h4>
                <p className="text-gray-600">Disponível na página inicial</p>
                <Link href="/" className="text-gold hover:text-darkGold font-medium">
                  Ver lista de presentes →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
