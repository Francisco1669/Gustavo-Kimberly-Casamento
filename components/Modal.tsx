'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  presenteNome: string;
  presenteValor: number;
  presenteId: number;
  onConfirm: (id: number, nome: string) => void;
}

export default function Modal({
  isOpen,
  onClose,
  presenteNome,
  presenteValor,
  presenteId,
  onConfirm,
}: ModalProps) {
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm(presenteId, nome);
    setLoading(false);
    setNome('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
              <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
                Confirmar Presente
              </h3>
              <p className="text-gray-600 mb-6">
                Você está presenteando o casal com:
              </p>

              <div className="bg-beige rounded-lg p-4 mb-6">
                <p className="font-semibold text-lg text-gray-800">{presenteNome}</p>
                <p className="text-gold text-xl font-bold">
                  {presenteValor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Seu nome (opcional)
                </label>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Seu nome será mantido em sigilo, apenas para registro.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-darkGold text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50"
                >
                  {loading ? 'Confirmando...' : 'Confirmar Compra'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
