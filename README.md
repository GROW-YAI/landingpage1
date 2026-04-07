# Helicimush - Mushroom Products 

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

## Boafo Widget Integration Guide

For the complete official integration guide, please refer to the documentation:

📄 [Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/landingpage1.git
   cd landingpage1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Verify the widget loads**
   
   Open your browser to `http://localhost:5173` (or the port shown in your terminal). The Boafo accessibility widget should appear on the page, typically as a floating button in the bottom corner of the screen.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.



**Built with ❤️ by the Helicimush Team**