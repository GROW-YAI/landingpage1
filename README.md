# 🍄 Helicimush - Mushroom Products Landing Page

> Modern responsive landing page for organic mushroom products company

[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Accessibility](https://img.shields.io/badge/WCAG-Compliant-green)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

---

## 📋 Project Overview

Helicimush is a modern, fully responsive landing page for a premium mushroom products company. We specialize in sustainable organic farming and transforming fresh mushrooms into convenient, nutritious wellness products.

The website demonstrates our commitment to organic farming practices, highlights mushroom health benefits, and serves as the official online presence for the brand.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 📱 **Responsive Design** | Perfectly optimized for desktop, tablet, and mobile devices |
| 🎬 **Smooth Animations** | Professional entrance animations & floating effects using Framer Motion |
| 🔄 **Dynamic Content** | Product information synced automatically from Google Sheets API |
| ♿ **Full Accessibility** | Boafo Accessibility Widget integration for WCAG compliance |
| 🎨 **Modern UI** | Nature-inspired design with organic green & earth tone color palette |

---

## 🚀 Site Sections

1. **Hero Section** - Animated introduction with brand messaging & call to action
2. **About Products** - Organic farming practices and mushroom health benefits
3. **Product Showcase** - Interactive carousel with full product lineup
4. **About The Innovator** - Founder profile and company vision
5. **Client Testimonials** - Social proof & customer reviews
6. **Footer** - Contact details, social media links & company information

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **Vite** | Build tool & development server |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Animation library |
| **Swiper** | Touch-enabled product carousel |
| **Lucide React** | Modern icon library |
| **Axios** | HTTP client for API requests |
| **Boafo Widget** | Accessibility compliance solution |

---

## ♿ Accessibility (Boafo Widget)

This project implements the **Boafo Accessibility Widget** to ensure the website is usable by everyone, including users with visual, motor, or cognitive disabilities.

### Widget Capabilities:
- ✅ Text-to-speech functionality
- ✅ Adjustable font sizes
- ✅ Contrast & color scheme modifications
- ✅ Full keyboard navigation support
- ✅ Screen reader compatibility
- ✅ WCAG 2.1 AA compliance

### Getting Your Boafo API Key:
1. Visit [boafo.co](https://boafo.co)
2. Register for a new account
3. Verify your email address
4. Access your dashboard
5. Generate an API key for this project
6. Store securely in environment variables

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/GROW-YAI/landingpage1.git
cd landingpage1
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Configuration
```bash
# Create environment file
cp .env.example .env
```

Edit `.env` file and add your Boafo API key:
```env
VITE_BOAFO_API_KEY=your_boafo_api_key_here
```

### Step 4: Run Development Server
```bash
npm run dev
```

Application will be available at `http://localhost:5173`

### 🏗️ Build For Production
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Build artifacts are generated in the `dist/` directory.

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|:--------:|
| `VITE_BOAFO_API_KEY` | Boafo Accessibility Widget API Key | ✅ |

---

## 📁 Project Structure

```
landingpage1/
├── app/
│   └── components/
│       └── BoafoWidgetInitializer.tsx
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── Api.js
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutProducts.jsx
│   │   ├── Products.jsx
│   │   ├── AboutInnovator.jsx
│   │   ├── ShowcaseSection.jsx
│   │   └── Footer.jsx
│   ├── types/
│   │   └── global.d.ts
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📜 License

This project is private and proprietary. All rights reserved.

---

<div align="center">
Built with ❤️ by the Helicimush Team
</div>