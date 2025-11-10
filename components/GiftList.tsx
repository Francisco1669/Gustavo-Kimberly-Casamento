'use client';

import { useState, useEffect } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

interface Presente {
  id: number;
  nome: string;
  valor: number;
  comprado: boolean;
}

export default function GiftList() {
  const [presentes, setPresentes] = useState<Presente[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [presenteSelecionado, setPresenteSelecionado] = useState<Presente | null>(null);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetchPresentes();
  }, []);

  const fetchPresentes = async () => {
    try {
      const response = await fetch('/api/presentes');
      const data = await response.json();
      setPresentes(data);
    } catch (error) {
      console.error('Erro ao buscar presentes:', error);
    }
  };

  const handleComprarClick = (presente: Presente) => {
    setPresenteSelecionado(presente);
    setModalOpen(true);
  };

  const handleConfirmCompra = async (presenteId: number, nomeComprador: string) => {
    try {
      const response = await fetch('/api/presentes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ presenteId, nomeComprador }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem('Presente comprado com sucesso! Obrigado! 🎁');
        fetchPresentes();
        setTimeout(() => setMensagem(''), 3000);
      } else {
        setMensagem(data.error || 'Erro ao comprar presente');
      }
    } catch (error) {
      console.error('Erro:', error);
      setMensagem('Erro ao processar compra');
    }
  };

  return (
    <div className="w-full">
      {mensagem && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-gradient-to-r from-gold to-darkGold text-white font-semibold text-center py-3 px-6 rounded-lg mb-6 shadow-lg"
        >
          {mensagem}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {presentes.map((presente, index) => (
          <motion.div
            key={presente.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-gradient-to-br from-white to-cream rounded-xl p-6 shadow-lg border border-gold/10 ${
              presente.comprado ? 'opacity-60' : 'hover:shadow-2xl hover:scale-105'
            } transition-all`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="bg-gold/10 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
              {presente.comprado && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                  Presenteado
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
              {presente.nome}
            </h3>

            <p className="text-2xl font-bold text-gold mb-4">
              {presente.valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>

            <motion.button
              onClick={() => handleComprarClick(presente)}
              disabled={presente.comprado}
              whileHover={!presente.comprado ? { scale: 1.02 } : {}}
              whileTap={!presente.comprado ? { scale: 0.98 } : {}}
              className={`w-full py-3 rounded-lg font-medium transition-all ${
                presente.comprado
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gold to-darkGold text-white shadow-md hover:shadow-lg'
              }`}
            >
              {presente.comprado ? '✓ Já Presenteado' : '🎁 Presentear'}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {presentes.length === 0 && (
        <div className="text-center py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500"
          >
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            <p className="text-lg">Carregando presentes...</p>
          </motion.div>
        </div>
      )}

      {presenteSelecionado && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          presenteNome={presenteSelecionado.nome}
          presenteValor={presenteSelecionado.valor}
          presenteId={presenteSelecionado.id}
          onConfirm={handleConfirmCompra}
        />
      )}
    </div>
  );
}
