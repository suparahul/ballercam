# BallerCam 🏈

A modern, responsive React application for sports game tracking and management. Built with TypeScript, Vite, and CSS Modules.

## ✨ Features

- **Responsive Design**: Fully responsive layout that adapts to desktop, tablet, and mobile devices
- **Game Management**: Track upcoming games, scores, and team information
- **Modern UI**: Clean, professional interface with smooth animations
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **TypeScript**: Full type safety and better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/suparahul/ballercam.git
   cd ballercam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📱 Responsive Features

### Desktop (>1400px)
- 3-column game cards grid
- Sidebar with upcoming games widget
- Full navigation menu

### Large Screens (1200-1400px)
- 2-column game cards grid
- Sidebar with upcoming games widget

### Medium Screens (900-1200px)
- 2-column game cards grid
- Sidebar with upcoming games widget

### Small Screens (768-900px)
- 1-column game cards grid
- Sidebar with upcoming games widget

### Mobile (<768px)
- Stacked layout with upcoming games on top
- Horizontal scrolling upcoming games widget
- Hamburger menu navigation
- Game cards in single column

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/          # Local image assets
│   ├── images.ts        # Image imports
│   └── images.d.ts      # TypeScript declarations
├── components/
│   ├── common/          # Reusable UI components
│   ├── games/           # Game-related components
│   └── layout/          # Layout components
├── pages/               # Page components
├── styles/
│   ├── global.css       # Global styles and CSS variables
│   └── theme.ts         # Design tokens
└── utils/               # Utility functions
```

## 🎨 Design System

The application uses a centralized design system with:

- **CSS Custom Properties** for consistent theming
- **Design Tokens** in `theme.ts` for colors, spacing, fonts
- **Responsive Breakpoints** for mobile-first design
- **Component-Based Architecture** for reusability

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Repository**: https://github.com/suparahul/ballercam
- **Issues**: https://github.com/suparahul/ballercam/issues

---

Built with ❤️ using React and TypeScript
