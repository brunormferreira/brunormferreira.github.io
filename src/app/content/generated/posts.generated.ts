// Auto-generated — do not edit manually.
// Run: pnpm run posts:generate

import { Post } from '../posts.models';

export const POSTS: ReadonlyArray<Post> = [
  {
    "slug": "2026-07-24-feature-posts",
    "locale": "pt-br",
    "title": "Feature de Posts no Portfolio",
    "description": "Criando uma area dedicada de posts com Angular 19, filtro por categoria/tag e fluxo Markdown-first.",
    "publishedAt": "2026-07-24",
    "category": "Angular",
    "tags": [
      "Angular",
      "Arquitetura",
      "Standalone",
      "DX",
      "Frontend"
    ],
    "content": "## Arquitetura Angular em escala\r\n\r\nQuando um projeto Angular comeca pequeno, e comum colocar tudo em poucos componentes.\r\nPara escalar com seguranca, vale adotar uma arquitetura em camadas:\r\n\r\n- **UI Layer**: componentes focados em exibicao e interacao\r\n- **Feature Layer**: paginas e fluxos por dominio\r\n- **Data Layer**: services para acesso a API e mapeamento de dados\r\n- **Shared Layer**: diretivas, pipes e utilitarios reutilizaveis\r\n\r\n### Decisoes praticas para manter qualidade\r\n\r\n- Preferir componentes standalone para reduzir acoplamento\r\n- Usar lazy loading por rota para melhorar tempo de carregamento\r\n- Centralizar contratos de dados com tipos fortes\r\n- Separar estado local (component) de estado compartilhado (service/store)\r\n\r\nCom essa base, o time ganha previsibilidade para crescer sem virar um monolito dificil de manter.",
    "readTime": "1 min read"
  },
  {
    "slug": "2026-07-24-feature-posts",
    "locale": "en-us",
    "title": "Posts Feature in the Portfolio",
    "description": "Building a dedicated posts area with Angular 19, category/tag filtering, and a Markdown-first workflow.",
    "publishedAt": "2026-07-24",
    "category": "Angular",
    "tags": [
      "Angular",
      "Architecture",
      "Standalone",
      "DX",
      "Frontend"
    ],
    "content": "## Angular architecture at scale\r\n\r\nWhen an Angular project starts small, it's common to pack everything into a few components.\r\nTo scale safely, adopting a layered architecture pays off:\r\n\r\n- **UI Layer**: components focused on rendering and interaction\r\n- **Feature Layer**: pages and flows organized by domain\r\n- **Data Layer**: services for API access and data mapping\r\n- **Shared Layer**: directives, pipes, and reusable utilities\r\n\r\n### Practical decisions to maintain quality\r\n\r\n- Prefer standalone components to reduce coupling\r\n- Use per-route lazy loading to improve load time\r\n- Centralize data contracts with strong types\r\n- Separate local state (component) from shared state (service/store)\r\n\r\nWith this foundation, the team gains predictability to grow without turning the codebase into a hard-to-maintain monolith.",
    "readTime": "1 min read"
  },
  {
    "slug": "2026-07-23-react-architecture-playbook",
    "locale": "pt-br",
    "title": "Arquitetura React para produtos de longo prazo",
    "description": "Principios de organizacao para React em projetos com multiplas squads e roadmap continuo.",
    "publishedAt": "2026-07-23",
    "category": "React",
    "tags": [
      "React",
      "Arquitetura",
      "Escalabilidade",
      "Frontend"
    ],
    "content": "## Arquitetura React em contexto real\r\n\r\nEm React, escalar nao e apenas criar mais componentes. O principal e definir limites claros entre responsabilidade de tela, logica de dominio e acesso a dados.\r\n\r\nUma estrutura simples e eficiente:\r\n\r\n- **app/**: bootstrap, providers globais, rotas\r\n- **features/**: casos de uso por dominio\r\n- **entities/**: modelos e regras centrais\r\n- **shared/**: componentes base, hooks utilitarios e libs internas\r\n\r\n### Boas praticas para evitar retrabalho\r\n\r\n- Tratar pagina como orquestradora e nao como deposito de regra\r\n- Encapsular chamadas HTTP em camada de client/service\r\n- Evitar estado global para tudo; manter estado perto de onde e usado\r\n- Definir convencoes de naming e estrutura desde o inicio\r\n\r\nEssa abordagem facilita onboard, manutencao e evolucao sem quebrar a experiencia do usuario.",
    "readTime": "1 min read"
  },
  {
    "slug": "2026-07-23-react-architecture-playbook",
    "locale": "en-us",
    "title": "React Architecture for Long-Term Products",
    "description": "Organization principles for React in projects with multiple squads and a continuous roadmap.",
    "publishedAt": "2026-07-23",
    "category": "React",
    "tags": [
      "React",
      "Architecture",
      "Scalability",
      "Frontend"
    ],
    "content": "## React architecture in a real context\r\n\r\nIn React, scaling is not just about creating more components. The key is defining clear boundaries between screen responsibility, domain logic, and data access.\r\n\r\nA simple and effective structure:\r\n\r\n- **app/**: bootstrap, global providers, routes\r\n- **features/**: use cases organized by domain\r\n- **entities/**: core models and business rules\r\n- **shared/**: base components, utility hooks, and internal libraries\r\n\r\n### Best practices to avoid rework\r\n\r\n- Treat the page as an orchestrator, not a rule dump\r\n- Encapsulate HTTP calls in a client/service layer\r\n- Avoid global state for everything; keep state close to where it's used\r\n- Define naming and structure conventions from the start\r\n\r\nThis approach simplifies onboarding, maintenance, and evolution without breaking the user experience.",
    "readTime": "1 min read"
  }
];
