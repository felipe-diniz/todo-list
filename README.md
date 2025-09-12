# 📝 Todo List App

> Um aplicativo de lista de tarefas moderno e completo construído com as mais recentes tecnologias web.

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-316192?style=for-the-badge&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-compose-2496ED?style=for-the-badge&logo=docker)

</div>

## 🚀 Sobre o Projeto

Este é um **Todo List** moderno e robusto, desenvolvido como demonstração de habilidades em desenvolvimento full-stack. O projeto implementa as melhores práticas de desenvolvimento, incluindo arquitetura limpa, validação robusta, e uma interface de usuário intuitiva.

### ✨ Destaques

- 🎯 **Full-Stack TypeScript** - Type safety do banco ao frontend
- 🏗️ **Arquitetura Limpa** - Custom hooks, componentes reutilizáveis
- ✅ **Validação Robusta** - Schemas Zod para validação completa
- 🎨 **Design Moderno** - Interface responsiva com Tailwind CSS
- 🐳 **Docker Ready** - Configuração completa com Docker Compose
- 🔄 **RESTful API** - Endpoints bem estruturados e documentados

## 🛠️ Tecnologias Utilizadas

### 🚀 Core Stack

| Tecnologia       | Versão | Descrição                                  |
| ---------------- | ------ | ------------------------------------------ |
| **Next.js**      | 15.x   | Framework React de produção com App Router |
| **TypeScript**   | 5.x    | Superset tipado do JavaScript              |
| **React**        | 19.x   | Biblioteca para interfaces de usuário      |
| **Tailwind CSS** | 4.x    | Framework CSS utilitário                   |

### 🗄️ Backend & Database

| Tecnologia     | Descrição                                      |
| -------------- | ---------------------------------------------- |
| **Prisma**     | ORM moderno para TypeScript com type safety    |
| **PostgreSQL** | Banco de dados relacional robusto              |
| **Zod**        | Validação de schemas TypeScript-first          |
| **Docker**     | Containerização do ambiente de desenvolvimento |

### 🎨 UI/UX

| Biblioteca       | Descrição                               |
| ---------------- | --------------------------------------- |
| **shadcn/ui**    | Componentes UI modernos e acessíveis    |
| **Lucide React** | Ícones SVG consistentes e elegantes     |
| **Sonner**       | Notificações toast com animações suaves |

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18+
- **Docker** e **Docker Compose**
- **pnpm** (recomendado) ou npm/yarn

## 🚀 Instalação e Configuração

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/felipe-diniz/todo-list.git
cd todo-list
```

### 2️⃣ Instale as dependências

```bash
pnpm install
# ou
npm install
```

### 3️⃣ Configure o banco de dados com Docker

```bash
# Inicie o PostgreSQL com Docker Compose
docker-compose up -d

# Verifique se o container está rodando
docker ps
```

### 4️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database Connection
DATABASE_URL="postgresql://postgres:password@localhost:5432/todolist?schema=public"

# Next.js Configuration
NEXTAUTH_SECRET="your-super-secret-key-here"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 5️⃣ Configure o banco de dados

```bash
# Gera o cliente Prisma
pnpm prisma generate

# Executa as migrações do banco
pnpm prisma migrate dev --name init

# (Opcional) Visualize o banco com Prisma Studio
pnpm prisma studio
```

### 6️⃣ Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

🎉 **Pronto!** O aplicativo estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
📦 todo-list/
├── 📂 prisma/                  # Configuração do banco de dados
│   ├── 📄 schema.prisma        # Schema do banco
│   └── 📂 migrations/          # Migrações do banco
├── 📂 src/
│   ├── 📂 app/                 # App Router (Next.js 15)
│   │   ├── 📂 api/            # API Routes
│   │   │   └── 📂 tasks/      # Endpoints das tarefas
│   │   ├── 📄 globals.css     # Estilos globais
│   │   ├── 📄 layout.tsx      # Layout principal
│   │   └── 📄 page.tsx        # Página inicial
│   ├── 📂 components/         # Componentes React
│   │   ├── 📂 ui/            # Componentes base (shadcn/ui)
│   │   ├── 📄 filtersTags.tsx # Filtros de tarefas
│   │   ├── 📄 modal.tsx       # Modal genérico
│   │   ├── 📄 alertModal.tsx  # Modal de confirmação
│   │   └── 📄 taskItem.tsx    # Item de tarefa
│   ├── 📂 hooks/             # Custom hooks
│   │   └── 📄 useTasks.ts    # Hook de gerenciamento
│   ├── 📂 lib/               # Utilitários
│   │   └── 📄 utils.ts       # Funções auxiliares
│   ├── 📂 types/             # Definições de tipos
│   │   └── 📄 schemas.ts     # Schemas Zod
│   └── 📂 utils/             # Utilitários específicos
│       └── 📄 prisma.ts      # Cliente Prisma
├── 📄 docker-compose.yml      # Configuração Docker
├── 📄 tailwind.config.ts      # Configuração Tailwind
└── 📄 package.json           # Dependências do projeto
```

## ✨ Funcionalidades

### 🎯 Funcionalidades Principais

- ✅ **Criar tarefas** - Adicione novas tarefas com validação
- 📋 **Listar tarefas** - Visualize todas as tarefas organizadas
- ✏️ **Editar tarefas** - Modifique tarefas existentes inline
- ☑️ **Marcar como concluída** - Toggle rápido de status
- 🗑️ **Excluir tarefas** - Remova tarefas individuais ou em lote
- 🔍 **Filtrar tarefas** - Filtre por: Todas, Pendentes, Concluídas
- 📊 **Estatísticas** - Contadores de tarefas por status

### 🎨 Interface e UX

- 🌙 **Design moderno** - Interface limpa e intuitiva
- 📱 **Responsivo** - Funciona perfeitamente em mobile e desktop
- 🎭 **Animações suaves** - Transições e feedback visual
- 🔔 **Notificações** - Toast messages para feedback
- ⚡ **Performance** - Carregamento rápido e otimizado

## 🏗️ Arquitetura e Padrões

### 🎯 Padrões Implementados

1. **🔧 Custom Hooks** - Lógica encapsulada e reutilizável
2. **🧩 Component Composition** - Componentes modulares
3. **🛡️ Type Safety** - TypeScript em 100% do código
4. **✅ Schema Validation** - Validação consistente com Zod
5. **🌐 RESTful API** - Endpoints bem estruturados
6. **🗄️ ORM Pattern** - Acesso type-safe ao banco

### 🔧 Custom Hook: `useTasks`

O coração da aplicação - um hook personalizado que gerencia todo o estado e lógica das tarefas:

```typescript
const {
  // Estados
  taskList,
  loading,
  selectedFilter,
  task,
  editTaskValue,

  // Funções
  fetchTasks,
  handleCreateTask,
  handleEditTask,
  handleDeleteTask,
  handleDeleteAllDoneTask,

  // Refs e setters
  inputRef,
  setTask,
  setEditTaskValue,
  setSelectedFilter,
} = useTasks();
```

**🎯 Benefícios:**

- 📦 **Encapsulamento** - Toda lógica em um lugar
- ♻️ **Reutilização** - Pode ser usado em múltiplos componentes
- 🧪 **Testabilidade** - Fácil de testar isoladamente
- 🔄 **Separação de responsabilidades** - UI separada da lógica

### 📝 Validação com Zod

Schemas TypeScript-first para validação robusta em toda a aplicação:

```typescript
// Schema para tarefas existentes
export const TaskSchema: z.ZodType<Tasks> = z
  .object({
    id: z.string(),
    task: z.string().min(4, "Nome da tarefa muito curta"),
    done: z.boolean(),
  })
  .strict();

// Schema para criação de tarefas
export const CreateTaskSchema: z.ZodType<Omit<Tasks, "id">> = z
  .object({
    task: z
      .string()
      .min(4, "Nome da tarefa muito curta")
      .max(255, "Tarefa muito longa"),
    done: z.boolean().default(false),
  })
  .strict();

// Schema para deleção (suporta único ID ou array)
export const DeleteTaskSchema = z.object({
  id: z.union([z.string(), z.array(z.string())]),
});
```

**🛡️ Vantagens:**

- Validação no frontend **E** backend
- Mensagens de erro personalizadas
- Type safety automático
- Suporte a validações complexas

### 🌐 API Design

Endpoints RESTful com tratamento completo de erros e validação:

```typescript
// GET /api/tasks - Lista todas as tarefas
// POST /api/tasks - Cria nova tarefa
// PUT /api/tasks - Atualiza tarefa existente
// DELETE /api/tasks - Remove tarefa(s)
```

**📋 Exemplo de resposta da API:**

```json
// Sucesso
{
  "id": "clr1234567890",
  "task": "Estudar TypeScript",
  "done": false
}

// Erro de validação
{
  "error": "Nome da tarefa muito curta"
}
```

## 🗄️ Banco de Dados

### 📊 Schema

```sql
-- Tabela principal de tarefas
CREATE TABLE "Tasks" (
    "id"    TEXT NOT NULL,
    "task"  TEXT NOT NULL,
    "done"  BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- Índices para performance
CREATE INDEX "Tasks_done_idx" ON "Tasks"("done");
CREATE INDEX "Tasks_task_idx" ON "Tasks"("task");
```

### 🐳 Docker Compose

```yaml
version: "3.8"

services:
  postgres:
    image: postgres:15-alpine
    container_name: todo-postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: todolist
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 30s
      timeout: 10s
      retries: 3

volumes:
  postgres_data:
    driver: local
```

## 📜 Scripts Disponíveis

### 🚀 Desenvolvimento

```bash
pnpm dev              # Servidor de desenvolvimento
pnpm build            # Build de produção
pnpm start            # Servidor de produção
pnpm lint             # Linting com ESLint
pnpm type-check       # Verificação de tipos
```

### 🗄️ Banco de Dados

```bash
pnpm db:generate      # Gera cliente Prisma
pnpm db:migrate       # Executa migrações
pnpm db:studio        # Abre Prisma Studio
pnpm db:reset         # Reset completo (desenvolvimento)
pnpm db:seed          # Popula dados de exemplo
```

### 🐳 Docker

```bash
docker-compose up -d           # Inicia serviços
docker-compose down            # Para serviços
docker-compose logs postgres   # Logs do PostgreSQL
docker-compose exec postgres psql -U postgres -d todolist  # Acesso direto ao banco
```

## 🚀 Deploy

### 🌐 Vercel (Recomendado)

1. **Conecte o repositório** à sua conta Vercel
2. **Configure as variáveis de ambiente:**
   ```
   DATABASE_URL="sua-url-do-banco-producao"
   NEXTAUTH_SECRET="seu-secret-producao"
   ```
3. **Deploy automático** a cada push para main

### 🐳 Docker Production

```dockerfile
# Multi-stage build para otimização
FROM node:18-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testes

```bash
# Testes unitários
pnpm test

# Testes de integração
pnpm test:integration

# Coverage
pnpm test:coverage

# E2E com Playwright
pnpm test:e2e
```

## 🔧 Configuração Adicional

### 📝 ESLint

```javascript
// eslint.config.mjs
export default [
  {
    rules: {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
];
```

### 🎨 Tailwind CSS

```javascript
// tailwind.config.ts
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // ... outras configurações
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

## 🤝 Contribuição

Contribuições são muito bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/MinhaNovaFeature
   ```
3. **Commit** suas mudanças:
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade X'
   ```
4. **Push** para a branch:
   ```bash
   git push origin feature/MinhaNovaFeature
   ```
5. **Abra um Pull Request**

### 📋 Guidelines

- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use conventional commits

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

<div align="center">

**Felipe Diniz**

[![GitHub](https://img.shields.io/badge/GitHub-felipe--diniz-181717?style=for-the-badge&logo=github)](https://github.com/felipe-diniz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Felipe%20Diniz-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/felipe-diniz)
[![Portfolio](https://img.shields.io/badge/Portfolio-felipe--diniz.dev-FF6B35?style=for-the-badge&logo=vercel)](https://felipe-diniz.dev)

</div>

---

<div align="center">

### 🌟 Se este projeto te ajudou, considere dar uma estrela!

**🚀 Feito com ❤️ e muito ☕ por Felipe Diniz**

![Visitors](https://api.visitorbadge.io/api/visitors?path=felipe-diniz%2Ftodo-list&label=Visitors&countColor=%23263759)

</div>
