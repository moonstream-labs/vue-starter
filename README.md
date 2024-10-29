# Vue Starter Template

A modular Vue.js template system offering three levels of complexity to match your project needs.

## 🌱 Template Structure

This repository maintains three template branches, each building upon the previous:

### `lite` - Core Foundation

[![Lite Branch Status](https://img.shields.io/badge/status-maintained-brightgreen)]()

A minimal Vue.js setup with essential dependencies and configurations. Perfect for:

- Proof of concept projects
- Learning and experimentation
- Starting fresh with maximum flexibility
- Testing core dependency updates

**Key Features:**

- Vue 3 with TypeScript
- NuxtUI v3
- Tailwind v4
- Vite
- Basic folder structure
- Git configuration
- Essential dependencies only

### `lab` - Design Sandbox

[![Lab Branch Status](https://img.shields.io/badge/status-maintained-brightgreen)]()

Builds on `lite` by adding design system integration and development tooling. Ideal for:

- UI/UX exploration
- Component development
- Design system integration
- Rapid prototyping

**Add-Ons:**

- Design system integration
- ESLint + Prettier setup
- Component development environment
- Additional development tools
- Extended TypeScript setup

### `launch` - Production Ready

[![Launch Branch Status](https://img.shields.io/badge/status-maintained-brightgreen)]()

A fully configured template ready for production applications. Perfect for:

- Production applications
- Storybook integration
- Client projects
- Team collaborations
- Enterprise development

**Add-Ons:**

- Production optimizations
- Deployment configurations
- CI/CD setup
- Testing framework
- Documentation structure
- Environment management
- Security configurations

## 📦 Getting Started

### Choose Your Template

1. **For minimal setup:**

```bash
git clone -b lite https://github.com/moonstream-labs/vue-starter.git my-project
```

2. **For design system development:**

```bash
git clone -b lab https://github.com/moonstream-labs/vue-starter.git my-project
```

3. **For production projects:**

```bash
git clone -b launch https://github.com/moonstream-labs/vue-starter.git my-project
```

### Initialize Your Project

After cloning your chosen template:

```bash
# Navigate to project directory
cd my-project

# Remove template git history
rm -rf .git

# Initialize new git repository
git init

# Install dependencies
npm install

# Set up development branches
git checkout -b develop
git branch main
git branch staging

# Make initial commit
git add .
git commit -m "init: project setup from vue-starter template"
```

## 🔄 Upgrading Templates

### Moving from `lite` to `lab`

If you started with `lite` and need design system features:

```bash
# Add the template repository as a remote
git remote add template https://github.com/moonstream-labs/vue-starter.git

# Fetch template branches
git fetch template

# Merge lab template
git merge template/lab

# Resolve any conflicts and commit
git add .
git commit -m "upgrade: integrate lab template features"

# Remove template remote
git remote remove template
```

### Moving from `lab` to `launch`

If you need to upgrade a `lab` project to full production setup:

```bash
# Same process as above, but merge launch
git remote add template https://github.com/moonstream-labs/vue-starter.git
git fetch template
git merge template/launch
```

## 📝 Template Maintenance

### Branch Structure

```
lite (core dependencies)
  ↓
lab (design system integration)
  ↓
launch (production configuration)
```

Updates flow from `lite` → `lab` → `launch` to maintain consistency across templates.

### Development Process

1. Create feature branch from appropriate template branch
2. Develop and test changes
3. Submit pull request to template branch
4. After merge, changes will be propagated to dependent templates

## 📜 License

MIT

## 💬 Support

- Create an issue for bug reports
- Start a discussion for questions
- Submit a pull request for improvements

---
Built with ❤️ by [Moonstream Labs](https://github.com/moonstream-labs)