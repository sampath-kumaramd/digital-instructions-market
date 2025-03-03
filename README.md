# Digital Instructions Market

## Project Overview

Digital Instructions Market is an Angular-based web application that serves as a marketplace for digital workflows and instruction guides. The platform allows users to discover, search, and access various industrial workflows and guides from different companies and industries.

## Features

- **Workflow Discovery**: Browse through a curated collection of digital instructions and workflows
- **Search Functionality**: Search across companies, names, and categories
- **Dark/Light Theme**: Toggle between dark and light themes with persistent user preference
- **Responsive Design**: Fully responsive UI that works across desktop and mobile devices
- **Workflow Details**: View detailed information about workflows including FAQs
- **Featured Creators**: Discover popular content creators and their guides
- **Category Filtering**: Browse workflows by specific industrial categories

## Technology Stack

- **Frontend Framework**: Angular 16.2
- **CSS Framework**: Tailwind CSS
- **UI Components**: Flowbite
- **State Management**: RxJS (for theme management)
- **Routing**: Angular Router

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/digital-instructions-market.git
cd digital-instructions-market
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
ng serve
```

4. Navigate to `http://localhost:4200/` in your browser

## Development

### Code Structure

- `src/app/home`: Home page components
- `src/app/market`: Market page components
- `src/app/category`: Category page components
- `src/app/shared`: Shared components, services, and types
  - `components`: Reusable UI components (cards, headers, etc.)
  - `services`: Application services (theme service, etc.)
  - `types`: TypeScript interfaces and types

### Key Components

- **WorkflowCard**: Displays workflow information in a card format
- **FeatureCard**: Displays featured creators
- **NavBar**: Main navigation with theme toggle
- **SearchBar**: Search functionality for workflows

### Building for Production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
ng build --configuration production
```

## Testing

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

```bash
ng test
```

### Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
