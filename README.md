# AI vs AI

This is currently a WIP, nothing much in the app content yet.

Github page link: https://feixie1980.github.io/ai-duel/

This is a React-based AI vs AI frontend application built with modern web technologies, showcasing many of the libraries, frameworks, and tools that have been part of the current web development and fast changing ecosystem!

## Table of Contents

- [Requirements](#requirements)
- [Scripts](#scripts)
- [Development](#development)
- [Component Generation](#component-generation)
- [Making a Release](#making-a-release)
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

## Requirements

- Node.js >= 20.x
- pnpm >= 8.x

## Development

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm dev`
4. Run tests: `pnpm test`
5. Start Storybook: `pnpm storybook`

## Component Generation

The project uses [Plop.js](https://plopjs.com/) to generate new React components with a consistent structure. To create a new component:

```bash
pnpm run generate-component
```

This will prompt you for:

1. Component name (in PascalCase, e.g., Button, UserProfile)
2. Component group (optional, in kebab-case, e.g., form-controls, user-profile)

The generator will create the following files in `src/components/[group]/[ComponentName]/`:

- `ComponentName.tsx` - Main component file
- `ComponentName.types.ts` - TypeScript interfaces and types
- `ComponentName.spec.tsx` - Unit tests
- `ComponentName.stories.tsx` - Storybook stories
- `index.ts` - Barrel file for clean imports

Example usage:

```bash
$ pnpm run generate-component
? Component name (PascalCase): UserCard
? Component group (optional, use kebab-case): user-profile

Created files:
  src/components/user-profile/UserCard/UserCard.tsx
  src/components/user-profile/UserCard/UserCard.types.ts
  src/components/user-profile/UserCard/UserCard.spec.tsx
  src/components/user-profile/UserCard/UserCard.stories.tsx
  src/components/user-profile/UserCard/index.ts
```

## End to end testing

TBD

## Making a Release & deploying to Github Pages

1. Ensure your changes are committed using conventional commit messages
2. Push your changes to the main branch
3. Trigger the "Manual Release" workflow in GitHub Actions
4. The release will be created and deployed automatically to GitHub Pages

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
  - Coming from the world of Java to Javascript, I had thought I would had the shacle of types again with Typescript.  But guess what, it is not bad at all, and probably elimnate 80% of the data integrity and null/undefined run-time errors.  I am loving it now :D
- **React** - UI component library
- **Redux Toolkit** - State management
- **Styled Components** - CSS-in-JS styling solution

### Component Library

- **Radix UI Themes** - Unstyled, accessible component system
- **Radix UI Icons** - Icon set

### Testing Framework

- **Vitest** - Unit and integration testing
- **React Testing Library** - React component testing
- **JSDOM** - Browser environment simulation

### Build Tools

- **Vite** - Next generation frontend tooling
  - The nice thing about Vite is that it comes out of box with many of the now expected features, such as HMR, code spliting with little or no configurations. Yes, the same thing can absolutely be done with Webpac & Babel, and other tools, but it is just a lot easier!
- **SWC** - Super-fast JavaScript/TypeScript compiler
- **ESLint** - Code quality and style checking
- **Prettier** - Code formatting

### Storybook

The project uses Storybook for component development and documentation. It includes:

- Essential addons for controls, docs, and interactions
- Chromatic integration for visual testing
- Component stories with TypeScript support

Storybook has become something that I would really missed if I don't have it. I use it for three essential things:
1. Development - I can easily focus on building invidual components.
2. Documention - I can easily generate documentations and testings of my component for other developers and my future self.  This is essential if we are developing any component libray.
3. Testing - With some setup of Playwright or other e-2-e test framework, I can use storybook stories as my test cases, which greatly enhance the quality of my tests.

### Semantic Release

Automated versioning and changelog generation using conventional commits:

Commit types that trigger releases:

- `feat`: Minor release for new features
- `fix`: Patch release for bug fixes
- `docs(README)`: Patch release for README updates
- `refactor`: Patch release for code refactoring
- `style`: Patch release for style changes
- `BREAKING CHANGE`: Major release for breaking changes

Sematic release is especially great to automate and make easy many of the chores during a release, such as version number update, updating version number in multiple places if needed(such as in package.json, your helm file, your docker file, and etc), change log generation, npm publishing, and many other. 

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
