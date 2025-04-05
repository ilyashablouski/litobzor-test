# Litobzor Test Task

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js) ![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript) ![Yarn](https://img.shields.io/badge/Yarn-Package%20Manager-2C8EBB?style=flat&logo=yarn)

This is a test task project built with **Next.js 15**, **React 19**, and **TypeScript**, designed to demonstrate a
scalable and maintainable frontend application. The project implements a product catalog with features like product
listing, user listing from an API, form handling, and local storage persistence.

---

## Features

- **Product List**: Displays a list of products with highlighting for items above a price threshold.
- **User List**: Fetches and displays user data from a mock API.
- **Form Handling**: Add new products via a popup form with client-side validation.
- **Routing**: Navigation between `/products` and `/users` pages using Next.js App Router.
- **State Management**: Uses Zustand for managing product state with persistence in `localStorage`.
- **Styling**: Modular SCSS with responsive design.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **Yarn**: This project uses Yarn as the package manager. Install it globally if you haven't already:
  ```bash
  npm install -g yarn
  ```

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/litobzor-test-task.git
   ```
    ```bash
   cd litobzor-test-task
   ```

2. Install dependencies: The project uses Yarn as its package manager. Install all required dependencies with:

   ```bash
   yarn install
   ```

---

## Running the Application

The project includes several scripts defined in package.json for development, building, and linting. Use the following
commands:

### Development Mode

Run the app in development mode:

```bash
yarn dev
```

* Open http://localhost:3000 in your browser to view the app.
* Changes will hot-reload automatically.

### Production Build

Build the app for production:

```bash
yarn build
```

* This generates an optimized production build in the `.next` directory.

### Start Production Server

Run the production build locally:

```bash
yarn start
```

* Open http://localhost:3000 to see the production version.

### Linting

Check the code for linting errors using ESLint:

```bash
yarn lint
```

* This ensures code quality and adherence to configured rules.

---

## Notes

- **Local Storage**: Added products are saved in localStorage and persist across page reloads. To reset, clear
  localStorage in
  your browser console:
  `localStorage.clear();`

---

## License

This project is licensed under the MIT License.  
Built with ❤️ by Ilya Shablouski for Litobzor Test Task.

