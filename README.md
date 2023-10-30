# Kickstart - React App

## Getting Started

### Dependencies

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [pnpm](https://pnpm.js.org/) - Package manager
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io/) - Opinionated Code Formatter
- [Husky](https://typicode.github.io/husky/#/) - Git hooks made easy
- [Commitlint](https://commitlint.js.org/#/) - Lint commit messages

### Colaboration

- **Installation:** `pnpm install`
- **Development:** `pnpm dev`
- **Test:** `pnpm test`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Format:** `pnpm format`

## Project Structure

```
.
├── CHANGELOG.md
├── CODEOWNERS
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
├── src
│   ├── App.tsx
│   ├── application
│   │   └── feature
│   │       ├── README.md
│   │       ├── components
│   │       │   └── FeatureComponent.ts
│   │       ├── containers
│   │       │   └── FeatureContainer.ts
│   │       └── modules
│   │           ├── README.md
│   │           ├── dtos
│   │           ├── enums
│   │           ├── graphql
│   │           │   ├── README.md
│   │           │   ├── mutations.ts
│   │           │   └── queries.ts
│   │           ├── hocs
│   │           ├── hooks
│   │           ├── interfaces
│   │           ├── mocks
│   │           ├── repositories
│   │           ├── routes.ts
│   │           └── services
│   ├── assets
│   │   └── react.svg
│   ├── infra
│   │   ├── providers
│   │   └── routes
│   ├── main.tsx
│   ├── shared
│   │   ├── components
│   │   ├── constants
│   │   ├── layout
│   │   │   └── app.tsx
│   │   └── utils
│   │       ├── date.ts
│   │       ├── number.ts
│   │       └── string.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
