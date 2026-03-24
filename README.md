# Helicimush - Mushroom Products Landing Page

## Project Overview

Helicimush is a modern, responsive landing page for a mushroom products company that specializes in growing fresh mushrooms and transforming them into convenient, nutritious products. The website showcases the company's commitment to organic, sustainable farming practices and highlights the health benefits of mushroom-based products.

### What the Site Does

The Helicimush website serves as an online presence for the company, featuring:

- **Hero Section**: A visually appealing introduction with animated mushroom imagery and a compelling tagline about nature's finest mushrooms for wellness
- **About Products**: Detailed information about the organic and natural mushroom products, highlighting health benefits and sustainable practices
- **Product Showcase**: A carousel/slider displaying the company's product lineup with images and descriptions
- **About the Innovator**: Information about the company's founder and their vision for mushroom-based nutrition
- **Client Showcase**: Testimonials and social proof from satisfied customers
- **Footer**: Contact information, social media links, and company branding

### Main Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful entrance animations and floating effects using Framer Motion
- **Dynamic Content**: Product information and descriptions fetched from external API (Google Sheets)
- **Accessible Design**: Integrated with the Boafo accessibility widget to ensure the site is accessible to all users, including those with disabilities
- **Modern UI**: Clean, nature-inspired design with green and orange color palette reflecting organic mushroom products

### Technologies Used

- **React 19**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth, performant animations
- **Swiper**: Modern touch slider for product carousels
- **Lucide React**: Beautiful, customizable icons
- **Axios**: Promise-based HTTP client for API requests
- **Boafo Accessibility Widget**: Makes the site accessible to all users (see integration details below)

### Accessibility with Boafo Widget

This project uses the **Boafo Accessibility Widget** to make the website accessible to all users, including those with visual, motor, or cognitive disabilities. The widget provides features such as:

- Text-to-speech functionality
- Font size adjustment
- Contrast and color adjustments
- Keyboard navigation support
- Screen reader compatibility

The Boafo widget ensures compliance with WCAG (Web Content Accessibility Guidelines) standards, making the site inclusive and user-friendly for everyone.

---

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget in your project, you need to obtain an API key from Boafo. Follow these steps:

1. **Visit the Boafo Website**: Go to [boafo.co](https://boafo.co)

2. **Create an Account**: Click on the registration or sign-up button to create a new account

3. **Verify Your Email**: Check your email inbox and verify your account by clicking the verification link

4. **Access the Dashboard**: Log in to your Boafo account and navigate to the dashboard

5. **Generate API Key**: In the dashboard, locate the API key section and generate a new API key for your project

6. **Copy Your API Key**: Copy the generated API key (it will look something like `boafo_xxxxxxxxxxxx`)

> **Important**: Keep your API key secure and never commit it to version control. Use environment variables to store sensitive credentials.

---

## How to Integrate the Boafo Widget

Follow these steps to integrate the Boafo Accessibility Widget into your Next.js/React project:

### Step 1: Install the Package

Install the Boafo accessibility widget package using npm:

```bash
npm install boafo-accessibility-widget
```

### Step 2: Create a Client Component

Create a new client component at `app/components/BoafoWidgetInitializer.tsx` that reads the API key from the environment variable:

```tsx
"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_BOAFO_API_KEY;
    if (apiKey) {
      initializeBoafoWidget(apiKey);
    }
  }, []);

  return null; // nothing to render
}
```

### Step 3: Import and Use in Layout

Import and use the `BoafoWidgetInitializer` component inside `app/layout.tsx`:

```tsx
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BoafoWidgetInitializer />
        {children}
      </body>
    </html>
  );
}
```

### Step 4: TypeScript Support (Optional)

For TypeScript support, create `src/types/global.d.ts` with the module declaration:

```typescript
declare module 'boafo-accessibility-widget' {
  export function initializeBoafoWidget(apiKey: string): void;
}
```

Update `tsconfig.json` to include the types directory:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}
```

### Step 5: For Static HTML Integration

If you're using a static HTML setup instead of a React/Next.js framework, add the Boafo script tag directly to your HTML file using the `data-api-key` attribute pointing to your environment variable:

```html
<script
  src="https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js"
  data-api-key="YOUR_BOAFO_API_KEY"
  defer
></script>
```

> **Note**: For static HTML, you'll need to use a build tool or server-side processing to replace `YOUR_BOAFO_API_KEY` with the actual environment variable value at build time.

---

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/GROW-YAI/landingpage1.git
   cd landingpage1
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Copy the example environment file to create your own `.env` file:

   ```bash
   cp .env.example .env
   ```

   > **Note**: If `.env.example` doesn't exist, create a `.env` file manually in the root directory.

4. **Add Your API Key**

   Open the `.env` file and add your Boafo API key:

   ```env
   VITE_BOAFO_API_KEY=your_boafo_api_key_here
   ```

   Replace `your_boafo_api_key_here` with the actual API key you obtained from the Boafo dashboard.

5. **Run the Development Server**

   Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or the port shown in your terminal).

6. **Build for Production**

   To create a production build:

   ```bash
   npm run build
   ```

   The built files will be in the `dist` directory.

7. **Preview Production Build**

   To preview the production build locally:

   ```bash
   npm run preview
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo Accessibility Widget API key | Yes |

---

## Project Structure

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
│   │   ├── AboutInnovator.jsx
│   │   ├── AboutProducts.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavBar.jsx
│   │   ├── Products.jsx
│   │   └── ShowcaseSection.jsx
│   ├── types/
│   │   └── global.d.ts
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

---

**Built with ❤️ by the Helicimush Team**