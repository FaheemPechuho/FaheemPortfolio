# Design Guidelines for Abdul Faheem's Portfolio

## Design Approach
**Reference-Based Approach**: Inspired by GitHub's developer portfolios and Linear's website design, emphasizing clean, technical aesthetics with excellent information hierarchy.

## Color Palette
- **Primary Background**: #0D1117 (GitHub dark)
- **Secondary Background**: #21262D (dark grey)
- **Accent/Interactive**: #58A6FF (bright blue)
- **Success/Positive**: #238636 (green)
- **Text**: #F0F6FC (off-white)
- **Borders/Dividers**: #30363D (subtle grey)

## Typography
- **Monospace/Code**: SF Mono or JetBrains Mono for technical elements, code snippets, and terminal-inspired UI
- **Body/UI**: Inter for readable body text and interface elements
- **Hierarchy**: Large, bold headings for sections; medium weights for project titles; lighter weights for descriptions

## Layout System
**Spacing**: Use Tailwind units of 4, 8, 12, 16, and 24 for consistent vertical and horizontal rhythm
**Container**: max-w-7xl for main content areas
**Grid System**: 12-column grid for flexible layouts; 2-3 column project cards on desktop, stack on mobile

## Core Sections & Components

### 1. Hero Section
- Full-width section (not full viewport height) with generous vertical padding
- Name in large, bold typography
- Subtitle: "Software Engineering Student | Full Stack Developer | AI/ML Engineer"
- Brief introduction paragraph highlighting voice AI, multi-agent systems, and commercial project experience
- Key expertise tags displayed as inline code-style badges
- Primary CTA button linking to projects section
- Background: Subtle grid pattern or terminal-style gradient overlay
- **No hero image** - focus on typography and technical aesthetic

### 2. Interactive Project Showcase
- Filterable grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Filter buttons for categories: All, AI/ML, Full Stack, Commercial, DevOps
- **Project Cards**: Dark (#21262D) background with subtle border (#30363D), hover state with blue accent border
  - Project title in bold
  - Technology tags as small code-style badges
  - Brief description (2-3 lines)
  - Key metrics or impact statement
  - "View Details" link with arrow icon
- Featured projects to highlight:
  - Generative AI (Pixel RNN/CNN)
  - Sign Language Recognition (CNN/ResNet/Attention)
  - BERT Transformers & NLP
  - CRM/HRM Solutions (Pakistani Real Estate)
  - Voice AI Restaurant Management System
  - React Native Firebase Mobile Apps

### 3. Skills Matrix
- Organized by 5 categories in grid layout
- **Categories**: Frontend | Backend | AI/ML | DevOps & Testing | Databases & Mobile
- Each skill with visual proficiency indicator (horizontal bar or percentage)
- Skills listed:
  - **Frontend**: React, React Native, TypeScript, Tailwind CSS
  - **Backend**: Node.js, SpringBoot, RESTful APIs
  - **AI/ML**: Generative AI, NLP, BERT, CNN/ResNet, Transformers
  - **DevOps**: Docker, Kubernetes, GitHub Actions, CI/CD, SonarCube, Cypress, Jest
  - **Databases & Mobile**: MongoDB, PostgreSQL, Firebase, React Native

### 4. Professional Experience Timeline
- Vertical timeline with alternating left/right layout on desktop
- Each entry includes:
  - Company/Project name
  - Role and duration
  - Impact statement with metrics
  - Technologies used as badges
  - Brief description of achievements
- Highlight commercial projects: CRM/HRM solutions sold, Voice AI integration

### 5. Contact Section
- Simple, centered layout
- Email and LinkedIn links with icon
- GitHub profile link
- Optional contact form (Name, Email, Message fields)

## Component Library

### Buttons
- Primary: Bright blue (#58A6FF) background, white text, rounded corners (rounded-lg)
- Secondary: Transparent with blue border, blue text
- Hover states: Slightly lighter/darker shade, subtle scale transform

### Cards
- Dark background (#21262D) with border (#30363D)
- Padding: p-6
- Rounded corners: rounded-lg
- Hover: Blue border accent, subtle lift shadow

### Badges/Tags
- Code-style appearance with monospace font
- Small padding (px-2 py-1), rounded corners
- Dark background with colored text or colored background with dark text
- Technology-specific colors where appropriate

### Terminal-Inspired Elements
- Command prompt symbols (>, $, ~) for decorative elements
- Blinking cursor animation for hero typing effect
- Code block styling for technical content sections

## Animations
Use sparingly and purposefully:
- Smooth scroll behavior for navigation
- Fade-in on scroll for project cards (staggered)
- Typing animation for hero subtitle
- Hover scale transforms on interactive elements
- Progress bar fill animations for skills

## Responsive Behavior
- **Mobile-first approach**
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Stack columns on mobile
- Reduce padding/spacing proportionally
- Hamburger menu for mobile navigation
- Touch-friendly button sizes (min 44px height)

## Images
No large hero image. Use icons and small project thumbnails/screenshots within project cards to showcase work visually while maintaining the technical, code-focused aesthetic.