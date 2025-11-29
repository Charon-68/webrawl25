# Hostel Website - Web Brawl General Championship

A modern, high-performance hostel website built with Next.js 14+, featuring stunning animations, dark mode, and a fully responsive design.

## 🚀 Features

- **Next.js 14+ App Router** - Modern React framework with server-side rendering
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Smooth animations and transitions throughout
- **Dark/Light Mode** - Theme toggle with persistent preference
- **Fully Responsive** - Mobile-first design that works on all devices
- **Interactive Components**:
  - Sticky Navbar with smooth scroll navigation
  - Hero section with parallax effect
  - Notice Board with auto-rotating announcements
  - Facilities grid with hover effects
  - Gallery with masonry layout and lightbox
  - Contact form with validation

## 📦 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Theme:** next-themes

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── Navbar.tsx           # Navigation bar with theme toggle
│   ├── Hero.tsx             # Hero section with parallax
│   ├── NoticeBoard.tsx      # Interactive notice board
│   ├── About.tsx            # About us section
│   ├── Facilities.tsx       # Facilities grid
│   ├── Team.tsx             # Team member cards
│   ├── Gallery.tsx          # Image gallery with lightbox
│   ├── Contact.tsx          # Contact form and map
│   ├── Footer.tsx           # Footer component
│   └── ThemeProvider.tsx    # Theme context provider
└── public/                  # Static assets
```

## 🎨 Customization

### Changing the Primary Color

Edit `tailwind.config.ts` to change the primary brand color:

```typescript
colors: {
  primary: {
    DEFAULT: '#1e40af', // Change this to your desired color
    dark: '#1e3a8a',
    light: '#3b82f6',
  },
}
```

### Adding Content

- **Team Members:** Edit the `teamMembers` array in `components/Team.tsx`
- **Facilities:** Edit the `facilities` array in `components/Facilities.tsx`
- **Gallery Images:** Edit the `galleryImages` array in `components/Gallery.tsx`
- **Announcements:** Edit the `announcements` array in `components/NoticeBoard.tsx`

## 🎯 Key Features Implemented

### Core Requirements ✅
- [x] Sticky Navbar with responsive hamburger menu
- [x] Hero section with animated text and CTAs
- [x] About Us section with split-screen layout
- [x] Facilities grid with icons and hover effects
- [x] Team section with profile cards
- [x] Gallery with masonry grid and lightbox
- [x] Contact section with form and map

### Brownie Points ✅
- [x] Notice Board with auto-rotating announcements
- [x] Framer Motion animations throughout
- [x] Parallax effect on Hero section
- [x] Staggered fade-in effects on scroll
- [x] Dark/Light mode toggle
- [x] Smooth page transitions

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- All images are placeholders - replace with actual images
- Google Maps embed uses a placeholder - update with your actual location
- Contact form is visual only - integrate with your backend API
- Theme preference is saved in localStorage

## 🎨 Design System

- **Primary Font:** Inter (Sans-serif)
- **Heading Font:** Poppins (Serif)
- **Color Scheme:** Royal Blue (easily customizable)
- **Spacing:** Consistent 4px grid system
- **Border Radius:** 8px (lg), 12px (xl), 16px (2xl)

## 📄 License

Built for Web Brawl General Championship

---

**Happy Coding! 🎉**

