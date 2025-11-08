'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Convidado {
  id: number;
  nome: string;
  sobrenome: string;
  confirmado: boolean;
  familia: string;
}

export default function ConfirmForm() {
  const [busca, setBusca] = useState('');
  const [sugestoes, setSugestoes] = useState<Convidado[]>([]);
  const [convidadoSelecionado, setConvidadoSelecionado] = useState<Convidado | null>(null);
  const [familiares, setFamiliares] = useState<Convidado[]>([]);
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [mensagem, setMensagem] = useState('');
  const [showSugestoes, setShowSugestoes] = useState(false);

  useEffect(() => {
    if (busca.length >= 2) {
      fetchSugestoes(busca);
    } else {
      setSugestoes([]);
      setShowSugestoes(false);
    }
  }, [busca]);

  const fetchSugestoes = async (search: string) => {
    try {
      const response = await fetch(`/api/convidados?search=${search}`);
      const data = await response.json();
      setSugestoes(data);
      setShowSugestoes(true);
    } catch (error) {
      console.error('Erro ao buscar convidados:', error);
    }
  };

  const selecionarConvidado = async (convidado: Convidado) => {
    setConvidadoSelecionado(convidado);
    setBusca(convidado.nome);
    setShowSugestoes(false);

    // Buscar familiares (mesmo sobrenome)
    try {
      const response = await fetch('/api/convidados');
      const todos = await response.json();
      const familia = todos.filter(
        (c: Convidado) => c.familia === convidado.familia
      );
      setFamiliares(familia);
      setSelecionados([convidado.id]);
    } catch (error) {
      console.error('Erro ao buscar familiares:', error);
    }
  };

  const toggleSelecionado = (id: number) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const confirmarPresenca = async () => {
    if (selecionados.length === 0) {
      setMensagem('Selecione pelo menos um convidado');
      return;
    }

    try {
      const response = await fetch('/api/convidados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selecionados }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem('✅ Presença confirmada com sucesso!');
        setBusca('');
        setConvidadoSelecionado(null);
        setFamiliares([]);
        setSelecionados([]);

        setTimeout(() => setMensagem(''), 5000);
      } else {
        setMensagem('Erro ao confirmar presença');
      }
    } catch (error) {
      console.error('Erro:', error);
      setMensagem('Erro ao processar confirmação');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
      <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 mb-6 text-center">
        Confirme sua Presença
      </h2>

      <p className="text-gray-600 text-center mb-8">
        Estamos muito felizes em ter você conosco neste dia especial!
      </p>

      {mensagem && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${
            mensagem.includes('✅')
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          } p-4 rounded-lg mb-6 text-center font-semibold`}
        >
          {mensagem}
        </motion.div>
      )}

      {/* Campo de Busca */}
      <div className="relative mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Digite seu nome
        </label>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Ex: João Silva"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
        />

        {/* Dropdown de Sugestões */}
        {showSugestoes && sugestoes.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {sugestoes.map((convidado) => (
              <button
                key={convidado.id}
                onClick={() => selecionarConvidado(convidado)}
                className="w-full text-left px-4 py-3 hover:bg-beige transition-colors border-b border-gray-100 last:border-b-0"
              >
                <span className="font-medium">{convidado.nome}</span>
                {convidado.confirmado && (
                  <span className="ml-2 text-green-600 text-sm">✓ Confirmado</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lista de Familiares */}
      {familiares.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Selecione os convidados da família {convidadoSelecionado?.familia}:
          </h3>
          <div className="space-y-3">
            {familiares.map((familiar) => (
              <label
                key={familiar.id}
                className="flex items-center p-4 bg-beige rounded-lg cursor-pointer hover:bg-rose transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selecionados.includes(familiar.id)}
                  onChange={() => toggleSelecionado(familiar.id)}
                  className="w-5 h-5 text-gold focus:ring-gold border-gray-300 rounded"
                />
                <span className="ml-3 text-gray-800 font-medium">
                  {familiar.nome}
                </span>
                {familiar.confirmado && (
                  <span className="ml-auto text-green-600 text-sm">✓ Já confirmado</span>
                )}
              </label>
            ))}
          </div>

          <button
            onClick={confirmarPresenca}
            className="w-full mt-6 py-4 bg-gradient-to-r from-gold to-darkGold text-white rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Confirmar Presença
          </button>
        </motion.div>
      )}
    </div>
  );
}
