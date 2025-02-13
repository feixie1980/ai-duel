# Coding AI Chat

A React-based chat application built with modern web technologies.

## Table of Contents

- [Requirements](#requirements)
- [Scripts](#scripts)
- [Tech Stack](#tech-stack)
  - [Core Libraries](#core-libraries)
  - [Component Library](#component-library)
  - [Testing Framework](#testing-framework)
  - [Build Tools](#build-tools)
  - [Storybook](#storybook)
  - [Semantic Release](#semantic-release)
  - [CI/CD with GitHub Actions](#cicd-with-github-actions)
    - [Release Process](#release-process)
    - [Deployment](#deployment)
- [Development](#development)
- [Making a Release](#making-a-release)

## Requirements

- Node.js >= 20.x
- pnpm >= 8.x

## Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build production bundle with TypeScript compilation and Vite
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm preview` - Preview production build locally
- `pnpm deploy` - Copy build files to docs directory for GitHub Pages deployment
- `pnpm storybook` - Start Storybook development server on port 6006
- `pnpm build-storybook` - Build static Storybook site
- `pnpm test` - Run Vitest tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Generate test coverage report
- `pnpm test:ui` - Run tests with UI interface
- `pnpm release` - Create a new release using semantic-release
- `pnpm release-dry` - Dry run of the release process

## Tech Stack

### Core Libraries

- **TypeScript** - Static typing and modern JavaScript features
- **React** - UI component library
- **Redux Toolkit** - State management
- **Styled Components** - CSS-in-JS styling solution
- **UUID** - Unique ID generation
- **Crypto-js** - Cryptographic functions

### Component Library

- **Radix UI Themes** - Unstyled, accessible component system
- **Radix UI Icons** - Icon set

### Testing Framework

- **Vitest** - Unit and integration testing
- **Testing Library** - React component testing
- **JSDOM** - Browser environment simulation
- **@storybook/test** - Storybook testing utilities

### Build Tools

- **Vite** - Next generation frontend tooling
- **SWC** - Super-fast JavaScript/TypeScript compiler
- **ESLint** - Code quality and style checking
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

### Storybook

The project uses Storybook for component development and documentation. It includes:

- Essential addons for controls, docs, and interactions
- Chromatic integration for visual testing
- Component stories with TypeScript support

### Semantic Release

Automated versioning and changelog generation using conventional commits:

Commit types that trigger releases:

- `feat`: Minor release for new features
- `fix`: Patch release for bug fixes
- `docs(README)`: Patch release for README updates
- `refactor`: Patch release for code refactoring
- `style`: Patch release for style changes
- `BREAKING CHANGE`: Major release for breaking changes

### CI/CD with GitHub Actions

The project uses GitHub Actions for automated workflows:

#### Release Process

1. Manually triggered through GitHub Actions UI
2. Pre-release build verification
3. Semantic release creation with:
   - Version bump based on conventional commits
   - Changelog generation
   - Git tag creation
   - GitHub release creation
4. Post-release build and artifact generation
5. Automatic deployment to GitHub Pages

#### Deployment

- Automatically deploys to GitHub Pages after successful release
- Uses GitHub's secure deployment environment
- Artifacts are uploaded and served through GitHub Pages
- Preview URL is provided in the workflow output

## Development

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm dev`
4. Run tests: `pnpm test`
5. Start Storybook: `pnpm storybook`

## Making a Release

1. Ensure your changes are committed using conventional commit messages
2. Push your changes to the main branch
3. Trigger the "Manual Release" workflow in GitHub Actions
4. The release will be created and deployed automatically to GitHub Pages
