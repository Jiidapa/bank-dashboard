# Bank Dashboard

This is a bank dashboard to manage and monitor financial activities using a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Storybook](#storybook)
4. [Testing](#testing)

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── .husky                              # Pre-commit script
├── .storybook                          # Storybook configurations file
├── .playwright-report                  # Auto generated file after completing visual testing
├── src
│   └── app                             # Next.js app router
│   └── components                      # Shared componets
│   └── constant                        # All constants
│   └── mock                            # For mocking data/components
│   └── modules                         # Module
│       └── mainBank
│           └── components              # All components that using only in this module
│               └── Exmaple.tsx
│           └── MainBank.tsx            # A components in module
│           └── MainBank.test.tsx       # A test file of component in mobule
│           └── MainBank.stories.tsx    # A storybook of component in module
│   └── styles                          # Styling
│   └── services                        # Api
│   └── store                           # Redux store
│       └── sagas
│       └── slices
├── visual-tests                        # Visual test and snapshot results
└── playwright.config.ts                # Playwright test configuration file
└── jest.config.ts                      # Jest configuration file
```

## Storybook

A UI development, testing, and documentation application. Run it with this command:

```bash
pnpm storybook
```

## Testing

### Unit testing

This project uses Jest as a test runner and assertion library and uses React Testing Library for UI testing

To run unit testing

```bash
pnpm run test
```

To check code coverage

```bash
pnpm run coverage
```

### Visual Testing

This project uses [playwright](https://playwright.dev/) to do visual testing in Storybook environment.

To run visual testing:

```bash
pnpm visual
```

To update screenshot, when you're updating UI:

```bash
pnpm visual:update
```
