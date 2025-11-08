import type { NextApiRequest, NextApiResponse } from 'next';
import presentesData from '@/data/presentes.json';

interface Presente {
  id: number;
  nome: string;
  valor: number;
  comprado: boolean;
  compradoPor: string | null;
}

let presentes: Presente[] = [...presentesData];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Retorna presentes sem expor quem comprou
    const presentesPublicos = presentes.map(({ compradoPor, ...resto }) => resto);
    return res.status(200).json(presentesPublicos);
  }

  if (req.method === 'POST') {
    const { presenteId, nomeComprador } = req.body;

    if (!presenteId) {
      return res.status(400).json({ error: 'ID do presente é obrigatório' });
    }

    const presente = presentes.find((p) => p.id === presenteId);

    if (!presente) {
      return res.status(404).json({ error: 'Presente não encontrado' });
    }

    if (presente.comprado) {
      return res.status(400).json({ error: 'Presente já foi comprado' });
    }

    presentes = presentes.map((p) =>
      p.id === presenteId
        ? { ...p, comprado: true, compradoPor: nomeComprador || 'Anônimo' }
        : p
    );

    return res.status(200).json({
      message: 'Presente comprado com sucesso!',
      presente: {
        id: presente.id,
        nome: presente.nome,
        valor: presente.valor,
      },
    });
  }

  if (req.method === 'PUT') {
    // Rota administrativa para ver quem comprou (não será exposta publicamente)
    return res.status(200).json(presentes);
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
