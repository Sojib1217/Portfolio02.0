# Sojib Hossain - Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark/light mode support
- 📱 Fully responsive layout
- ⚡ Built with React.js for optimal performance
- 🎯 Tailwind CSS for styling
- 📧 Contact integration
- 🌙 Dark mode toggle

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Customization

### Personal Information
Update the following in the components:
- Name and title in `src/components/Hero.js`
- Contact information in `src/components/Navbar.js`
- Profile image URL in `src/components/Hero.js`
- Email addresses throughout the components

### Styling
The design uses Tailwind CSS with custom color scheme:
- Primary: `#FF6B4A` (Red-Orange)
- Secondary: `#FFC247` (Yellow-Orange)
- Dark Accent: `#2D2829`

Colors can be modified in `public/index.html` in the Tailwind config.

## Deployment

To deploy to production:

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

## License

This project is open source and available under the [MIT License](LICENSE).