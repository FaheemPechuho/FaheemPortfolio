# Abdul Faheem's Portfolio

A modern, dark-themed portfolio website showcasing full-stack development, AI/ML projects, and commercial solutions.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (you have v22.0.0 ✅)
- PostgreSQL database (optional for basic frontend)

### Installation

```bash
# 1. Install dependencies (already done ✅)
npm install

# 2. Create .env file (already done ✅)
# The .env file is already set up with basic config

# 3. Start development server
npm run dev
```

The site will be available at **http://localhost:5000**

### ⚠️ Windows Users
If you get an error `'NODE_ENV' is not recognized`, use one of these solutions:

**Option 1: Use PowerShell Set Command (Current Setup)**
```bash
npm run dev
```

**Option 2: Install cross-env (Recommended)**
```bash
npm install --save-dev cross-env
```
Then update `package.json` scripts to use `cross-env`:
```json
"dev": "cross-env NODE_ENV=development tsx server/index.ts"
```

**Option 3: Use .env file (Current Setup)**
The `.env` file already sets `NODE_ENV=development`, so the server should read it automatically.

**Option 4: Set environment variable manually**
```powershell
$env:NODE_ENV="development"; npm run dev
```

## 📁 Project Structure

```
FaheemFolioPro/
├── client/              # React frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
│   └── public/          # Static assets
├── server/              # Express backend
├── shared/              # Shared types & schema
└── .env                 # Environment variables
```

## 🎨 Recent Improvements

### ✅ Just Added
- **Navigation Bar**: Sticky header with smooth scroll, active section detection
- **Scroll Progress Bar**: Visual progress indicator at the top
- **Enhanced SEO**: Open Graph tags, Twitter cards, meta descriptions
- **Section IDs**: All sections now have proper IDs for navigation

### 📋 To-Do (See FRONTEND_IMPROVEMENTS.md)
- [ ] Add project images/screenshots
- [ ] Replace placeholder URLs with real links
- [ ] Create Open Graph image (1200x630px)
- [ ] Add resume download functionality
- [ ] Implement dark/light theme toggle
- [ ] Add contact form with validation
- [ ] Create project detail modals

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server (Windows compatible)
npm run dev:unix     # Start dev server (Linux/Mac)

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run start:unix   # Start production (Linux/Mac)

# Utilities
npm run check        # TypeScript type checking
npm run db:push      # Push database schema changes
```

## 🗄️ Database Setup (Optional)

For full functionality with the backend:

1. Get a free PostgreSQL database from [Neon](https://neon.tech)
2. Update `.env` with your database URL:
   ```env
   DATABASE_URL=postgresql://user:pass@host/database?sslmode=require
   ```
3. Push the schema:
   ```bash
   npm run db:push
   ```

> **Note**: The portfolio works perfectly fine without a database for now, as it's frontend-focused.

## 🎯 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** for accessible components
- **shadcn/ui** component library

### Backend
- **Node.js** with Express
- **Drizzle ORM** for database
- **PostgreSQL** (Neon serverless)
- **Passport.js** for auth (not implemented yet)

## 📖 Documentation

- **FRONTEND_IMPROVEMENTS.md**: Comprehensive guide for improving the frontend
- **design_guidelines.md**: Design system and color palette

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

### Manual Deployment
```bash
# Build
npm run build

# Deploy dist/ folder to your hosting service
```

## 🤝 Contributing

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!

## 📝 License

MIT License - feel free to use this as a template for your own portfolio.

## 📧 Contact

- **Email**: abdul.faheem@example.com (update with real email)
- **GitHub**: [github.com/abdulfaheem](https://github.com/abdulfaheem)
- **LinkedIn**: [linkedin.com/in/abdulfaheem](https://linkedin.com/in/abdulfaheem)

---

**Pro Tips:**
1. Update all placeholder URLs in `client/src/pages/Home.tsx`
2. Add your real project screenshots to `client/public/projects/`
3. Create an Open Graph image for social media shares
4. Read `FRONTEND_IMPROVEMENTS.md` for 26 actionable improvements

**Next Steps:**
1. Run `npm run dev` to start the development server
2. Visit `http://localhost:5000`
3. Check `FRONTEND_IMPROVEMENTS.md` for enhancement ideas
4. Update content in `Home.tsx` with your real information

Happy coding! 🎉

