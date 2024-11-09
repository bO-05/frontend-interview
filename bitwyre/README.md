# E-Commerce Platform

A modern e-commerce platform built with Next.js, TypeScript, and Docker.

## Prerequisites

- Docker
- Docker Compose
- Node.js 20+ (for local development)
- Yarn

## Quick Start

### Development Mode

Run the app with hot-reload:

```powershell
# Start development container
docker compose up web-dev

# Stop development container
docker compose down
```

The app will be available at http://localhost:3000 with hot-reload enabled.

### Production Mode

Run the production-optimized build:

```powershell
# Build and start production container
docker compose up web

# Stop production container
docker compose down
```

The app will be available at http://localhost:3000.

## Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Local Development (Without Docker)

```powershell
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## Testing

```powershell
# Run e2e tests
yarn test:e2e
```

## Project Structure

```
├── src
│   ├── app                 # Next.js app router pages and API routes
│   ├── components          # Reusable React components
│   ├── hooks              # Custom React hooks
│   ├── mocks              # Mock data for development
│   ├── providers          # React context providers
│   ├── store              # Zustand state management
├── public                 # Static assets and images
├── tests
│   └── e2e               # End-to-end tests using Playwright
└── docker-compose.yml    # Docker compose configuration
```

## Docker Commands

```powershell
# View logs
docker compose logs -f

# Rebuild containers
docker compose build

# Remove all containers and volumes
docker compose down -v
```
