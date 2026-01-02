# Demo Nx Monorepo

A demonstration Nx monorepo with 2 applications and 3 libraries.

## Project Structure

```
demo-nx-monorepo/
├── apps/
│   ├── app1/          # Application 1 (uses lib1, lib2)
│   └── app2/          # Application 2 (uses lib2, lib3)
└── libs/
    ├── lib1/          # Library 1 (greeting utilities)
    ├── lib2/          # Library 2 (math utilities)
    └── lib3/          # Library 3 (string utilities)
```

## Applications

### App1
Located in `apps/app1/`

**Dependencies:** lib1, lib2

**Functionality:**
- Uses `lib1` for greeting functionality
- Uses `lib2` for math operations (addition, multiplication)

### App2
Located in `apps/app2/`

**Dependencies:** lib2, lib3

**Functionality:**
- Uses `lib2` for math operations (addition, multiplication)
- Uses `lib3` for string formatting and manipulation

## Libraries

### Lib1 (Greeting Utilities)
Located in `libs/lib1/`

**Exports:**
- `greet(name: string): string` - Returns a greeting message

### Lib2 (Math Utilities)
Located in `libs/lib2/`

**Exports:**
- `add(a: number, b: number): number` - Adds two numbers
- `multiply(a: number, b: number): number` - Multiplies two numbers

### Lib3 (String Utilities)
Located in `libs/lib3/`

**Exports:**
- `formatString(text: string): string` - Converts text to uppercase and trims whitespace
- `reverseString(text: string): string` - Reverses a string

## Getting Started

### Prerequisites
- Node.js (v20 or later)
- npm (v10 or later)

### Installation

```bash
npm install
```

## Build

Build all projects:
```bash
npx nx run-many --target=build --all
```

Build a specific app:
```bash
npx nx build app1
npx nx build app2
```

Build a specific library:
```bash
npx nx build lib1
npx nx build lib2
npx nx build lib3
```

## Test

Run all tests:
```bash
npx nx run-many --target=test --all
```

Test specific libraries:
```bash
npx nx test lib1
npx nx test lib2
npx nx test lib3
```

## Run Applications

### Run App1
```bash
npx nx build app1
node dist/apps/app1/main.js
```

Expected output:
```
=== App1 Demo ===
Hello, World! Welcome from lib1.
5 + 3 = 8
5 * 3 = 15
```

### Run App2
```bash
npx nx build app2
node dist/apps/app2/main.js
```

Expected output:
```
=== App2 Demo ===
10 + 20 = 30
10 * 20 = 200
HELLO NX MONOREPO
tpircSepyT
```

## Dependency Graph

View the project dependency graph:
```bash
npx nx graph
```

The dependency structure:
- **app1** → lib1, lib2
- **app2** → lib2, lib3

## Development

### Linting
```bash
npx nx run-many --target=lint --all
```

### Running Affected Commands
Nx can run commands only on projects affected by your changes:

```bash
# Build only affected projects
npx nx affected --target=build

# Test only affected projects
npx nx affected --target=test
```

## Learn More

- [Nx Documentation](https://nx.dev)
- [Nx Cloud](https://nx.app)
