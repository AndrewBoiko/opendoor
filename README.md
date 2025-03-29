# Opendoor

Opendoor is a modern real estate application designed to help users browse, search, and explore properties with ease. Built using the Nx monorepo framework, it leverages React, Material-UI, and Mapbox for a seamless and responsive user experience.

## Features

- **Property Listings**: Browse and search for properties with detailed information.
- **Interactive Maps**: View properties on an interactive map powered by Mapbox.
- **Favorites**: Mark properties as favorites for quick access.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Scalable Architecture**: Built with Nx for modularity and scalability.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Nx CLI](https://nx.dev) (optional, but recommended)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/AndrewBoiko/opendoor.git
   cd opendoor
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Development Server

To start the development server:

```sh
npx nx serve opendoor
```

The application will be available at [http://localhost:4200](http://localhost:4200).

### Building for Production

To create a production-ready build:

```sh
npx nx build opendoor
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

To run unit tests:

```sh
npx nx test opendoor
```

To run end-to-end tests:

```sh
npx nx e2e opendoor
```

## Project Structure

This project uses the Nx monorepo structure. Key directories include:

- `apps/`: Contains the main application (`opendoor`).
- `libs/`: Shared libraries and components.
- `dist/`: Output directory for production builds.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Material-UI**: Component library for responsive and accessible UI.
- **Mapbox**: Interactive maps for property visualization.
- **Redux Toolkit**: State management for the application.
- **Nx**: Monorepo framework for modular and scalable development.

## Adding New Features

To generate a new application:

```sh
npx nx g @nx/react:app <app-name>
```

To generate a new library:

```sh
npx nx g @nx/react:lib <lib-name>
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [Andrew Boiko](https://github.com/AndrewBoiko).
