# Vue 3 + Nuxt UI Starter Template

A modern Vue.js starter template featuring Vue 3, TypeScript, Vite, and Nuxt UI.

## Features

- ⚡️ [Vue 3](https://vuejs.org/) with [Vite](https://vitejs.dev/)
- 🔧 [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Nuxt UI v3](https://ui3.nuxt.dev/) - Beautiful and accessible components
- 📦 Auto-imports and component registration
- 🛠️ [pnpm](https://pnpm.io/) for fast, disk-efficient package management

## Prerequisites

- Node.js (v22)
- pnpm

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd starter
```

2. Create a `.npmrc` file in the project root
```bash
echo "shamefully-hoist=true" > .npmrc
```

3. Install dependencies
```bash
pnpm install
```

4. Start the development server
```bash
pnpm dev
```

## Project Structure

```
.
├── src/
│   ├── components/     # Vue components
│   ├── App.vue        # Root component
│   └── main.ts        # Application entry point
├── public/            # Static assets
├── .npmrc            # pnpm configuration
├── tsconfig.app.json # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## Type Support

The template includes TypeScript support with:
- Vue 3 + TypeScript
- Auto-generated component types
- Auto-generated auto-import types

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Dependencies

### Core
- Vue 3.5.x
- Vue Router 4.4.x
- Nuxt UI (v3 alpha)

### Development
- Vite 5.4.x
- TypeScript 5.5.x
- Vue TypeScript Compiler (vue-tsc)
- Various auto-import plugins

## Notes

- Uses the experimental v3 version of Nuxt UI
- Requires `shamefully-hoist=true` in `.npmrc` for proper dependency resolution
- Auto-generates type declarations for components and imports

## License

[MIT](LICENSE)