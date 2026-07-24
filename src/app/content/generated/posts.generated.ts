// Auto-generated — do not edit manually.
// Run: pnpm run posts:generate

import { Post } from '../posts.models';

export const POSTS: ReadonlyArray<Post> = [
  {
    "slug": "2026-07-24-feature-posts",
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
    "slug": "2026-07-23-react-architecture-playbook",
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
  }
];
