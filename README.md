# GSoC Innovators Club - Frontend

---
## React + TypeScript + Vite
---

A modern, immersive landing page for the GSoC Innovators Club, designed to attract and engage passionate developers.

## 🚀 Features

- **Immersive 3D Hero Section**: A stunning Three.js nebula cloud animation that serves as the background for the landing page.
- **Scroll-Hijacking Animation**: A custom camera transition that shifts the view from a front-facing perspective to a top-down view as the user scrolls, creating a "zoom-in" effect.
- **Dynamic UI Elements**: Text content and floating cards in the hero section fade out smoothly as the scroll animation progresses.
- **About Us Section**: Informative cards with statistics and custom purple-themed icons.
- **Events Section**: Clean and modern display of upcoming events and challenges.
- **Team Page**: A dedicated page showcasing the team members, grouped by department.
- **Events Page**: A full page displaying past and upcoming events in a vertical timeline.
- **Client-Side Routing**: Seamless navigation between pages using React Router.
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes.

## 🛠️ Tech Stack

- **React 19**: Modern component-based architecture.
- **Vite**: Frontend tool.
- **TypeScript**: Static typing.
- **Three.js**: Powerful 3D library for web graphics.
- **Vanilla CSS**: Custom styling.

## 📁 Project Structure

```text
src/
├── components/
│   ├── AboutSection/     # About Us cards and info
│   ├── EventsSection/    # Events list and styling
│   ├── Footer/          # Multi-column footer with branding
│   ├── Header/          # Sticky navigation bar
│   ├── HeroSection/     # Three.js Nebula, scroll hook, and hero content
│   └── TeamMemberCard/  # Reusable card component for team members
├── pages/
│   ├── EventsPage.tsx   # Dedicated Events page
│   ├── HomePage.tsx     # Main landing page
│   └── TeamPage.tsx     # Team overview page
├── App.tsx              # Main application entry point with Routing
├── main.tsx             # React DOM mounting
└── index.css            # Global design tokens and base styles
```

## 🛠️ Getting Started

1.  **Clone the Repository**
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
4.  **Build for Production**:
    ```bash
    npm run build
    ```


---


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## 📜 Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

