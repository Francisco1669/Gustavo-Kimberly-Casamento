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
    <div className="h-full overflow-y-auto p-8 lg:p-12">
      <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-8 text-center drop-shadow-lg">
        Lista de Presentes
      </h2>

      {mensagem && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-white text-gold font-semibold text-center py-3 px-6 rounded-lg mb-6 shadow-lg"
        >
          {mensagem}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {presentes.map((presente, index) => (
          <motion.div
            key={presente.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg ${
              presente.comprado ? 'opacity-60' : 'hover:shadow-2xl'
            } transition-all`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {presente.nome}
            </h3>
            <p className="text-2xl font-bold text-gold mb-4">
              {presente.valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <button
              onClick={() => handleComprarClick(presente)}
              disabled={presente.comprado}
              className={`w-full py-3 rounded-lg font-medium transition-all ${
                presente.comprado
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gold to-darkGold text-white hover:shadow-lg transform hover:scale-105'
              }`}
            >
              {presente.comprado ? '✓ Já Presenteado' : 'Comprar Presente'}
            </button>
          </motion.div>
        ))}
      </div>

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
