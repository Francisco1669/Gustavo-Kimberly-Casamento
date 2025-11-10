'use client';

import GiftList from '@/components/GiftList';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PresentesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-beige">
      {/* Animated Header */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-rose to-gold z-50">
        <motion.div
          className="h-full bg-white/30"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 px-4">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto mb-8">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium"
            >
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
            </motion.button>
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
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
            className="mb-6"
          >
            <svg
              className="w-20 h-20 mx-auto text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Nossa Lista de Presentes
          </h1>
          <p className="text-lg text-gray-600 font-cormorant max-w-2xl mx-auto">
            Escolha um presente especial para nós. Cada item foi selecionado com carinho
            para começar nossa nova jornada juntos.
          </p>
        </motion.div>

        {/* Gift List in Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-10">
            <GiftList />
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-beige to-rose rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <svg
              className="w-6 h-6 text-gold flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Informações Importantes</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Todos os presentes são registrados de forma privada e segura</li>
                <li>✓ Você pode adicionar seu nome ao presente (opcional)</li>
                <li>✓ Após a confirmação, o presente ficará marcado como presenteado</li>
                <li>✓ Sua contribuição nos ajudará a começar nossa vida juntos!</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
