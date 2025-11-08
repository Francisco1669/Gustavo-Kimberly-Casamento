import type { NextApiRequest, NextApiResponse } from 'next';
import convidadosData from '@/data/convidados.json';

interface Convidado {
  id: number;
  nome: string;
  sobrenome: string;
  confirmado: boolean;
  familia: string;
}

let convidados: Convidado[] = [...convidadosData];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { search } = req.query;

    if (search && typeof search === 'string') {
      const searchLower = search.toLowerCase();
      const filtered = convidados.filter(
        (c) =>
          c.nome.toLowerCase().includes(searchLower) ||
          c.sobrenome.toLowerCase().includes(searchLower)
      );
      return res.status(200).json(filtered);
    }

    return res.status(200).json(convidados);
  }

  if (req.method === 'POST') {
    const { ids } = req.body;

    if (!Array.isArray(ids)) {
      return res.status(400).json({ error: 'IDs devem ser um array' });
    }

    convidados = convidados.map((convidado) => {
      if (ids.includes(convidado.id)) {
        return { ...convidado, confirmado: true };
      }
      return convidado;
    });

    return res.status(200).json({
      message: 'Presenças confirmadas com sucesso!',
      confirmados: convidados.filter(c => ids.includes(c.id))
    });
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
