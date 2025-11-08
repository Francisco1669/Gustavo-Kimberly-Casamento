# Site de Casamento - Gustavo & Kimberly 💍

Site de casamento responsivo desenvolvido em Next.js com TailwindCSS, apresentando duas páginas principais: Home e Confirmação de Presença.

## 🎨 Funcionalidades

### Home Page (/)
- **Layout de duas colunas** (responsivo)
- **Coluna Esquerda**: Lista de Presentes
  - Foto de fundo do casal com overlay escuro
  - Cards de presentes com nome e valor
  - Modal para compra de presentes
  - Sistema de registro privado do comprador
- **Coluna Direita**: Confirmação de Presença
  - Informações do evento
  - Botão para página de confirmação

### Página de Confirmação (/confirmar)
- **Campo de busca inteligente** com auto-sugestão
- **Lista de familiares** relacionados automaticamente
- **Checkboxes** para marcar presença
- **Confirmação** com feedback visual

### Galeria de Fotos
- **Carrossel automático** com 6 fotos
- **Animações suaves** usando Framer Motion
- **Navegação manual** com setas e dots

## 🛠️ Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animações)
- **API Routes** (backend mockado)

## 🚀 Como Executar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### Build de Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home page
│   ├── confirmar/
│   │   └── page.tsx        # Página de confirmação
│   └── globals.css         # Estilos globais
├── components/
│   ├── Modal.tsx           # Modal de compra de presentes
│   ├── GiftList.tsx        # Lista de presentes
│   ├── PhotoCarousel.tsx   # Carrossel de fotos
│   └── ConfirmForm.tsx     # Formulário de confirmação
├── pages/api/
│   ├── convidados.ts       # API de convidados
│   └── presentes.ts        # API de presentes
├── data/
│   ├── convidados.json     # Lista de convidados
│   └── presentes.json      # Lista de presentes
└── public/
    └── images/             # Fotos do casal
```

## 🎨 Paleta de Cores

- **Cream**: `#FFF8F0`
- **Beige**: `#F5E6D3`
- **Gold**: `#D4AF37`
- **Dark Gold**: `#B8960F`
- **Rose**: `#E8D5C4`

## 📝 Fontes

- **Playfair Display** - Títulos
- **Cormorant Garamond** - Subtítulos
- **Inter** - Corpo do texto

## 🔧 Customização

### Alterar Informações do Evento
Edite `app/page.tsx` e `app/confirmar/page.tsx`

### Adicionar/Remover Presentes
Edite `data/presentes.json`

### Adicionar/Remover Convidados
Edite `data/convidados.json`

### Substituir Fotos
Substitua os arquivos em `public/images/` (casal1.jpg a casal6.jpg)

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎁 Lista de Presentes

A lista de presentes possui:
- Registro privado do comprador (não exposto publicamente)
- Sistema de marcação de presente já comprado
- Modal de confirmação elegante

## ✅ Sistema de Confirmação

- Busca inteligente por nome ou sobrenome
- Agrupamento automático de familiares
- Seleção múltipla com checkboxes
- Feedback visual de confirmação

## 📄 Licença

Projeto desenvolvido para fins educacionais e demonstrativos.

---

Feito com ❤️ para Gustavo & Kimberly
