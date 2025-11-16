# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring a dark theme with neon blue accents.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
cursor-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/          # Place your images here
│   │   └── resume.pdf       # Place your resume PDF here
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## ✨ Features

- ✅ Responsive design (mobile & desktop)
- ✅ Smooth scrolling navigation
- ✅ Dark theme with neon blue accents
- ✅ Fade-in animations
- ✅ Sticky navbar with backdrop blur
- ✅ Interactive project cards
- ✅ Skills with progress bars
- ✅ Contact form
- ✅ Social media links

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, tagline, and description
   - Replace profile image placeholder

2. **About Section** (`src/components/About.jsx`):
   - Update introduction text
   - Modify highlights as needed

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skill categories and proficiency levels
   - Add or remove skills

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace project data with your actual projects
   - Update links to GitHub repos and live demos

5. **Achievements Section** (`src/components/Achievements.jsx`):
   - Update with your certifications, internships, and achievements

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Update social media links (GitHub, LinkedIn, Twitter)

7. **Footer** (`src/components/Footer.jsx`):
   - Update copyright name

### Add Resume PDF

1. Replace `src/assets/resume.pdf` with your actual resume PDF file
2. The "Download Resume" button in Hero section will automatically work

### Customize Colors

Edit `tailwind.config.js` to change the neon blue color scheme:
```js
colors: {
  neon: {
    blue: '#00f0ff',      // Main neon blue
    'blue-dark': '#0099cc', // Darker variant
  },
}
```

## 📝 Notes

- The contact form currently shows an alert on submission. You'll need to integrate it with a backend service (like Formspree, EmailJS, or your own API) for actual functionality.
- All project links and social media URLs are placeholders - update them with your actual links.
- Images in the projects section use emoji placeholders - replace with actual project screenshots.

## 🔧 Troubleshooting

If you encounter issues:

1. **Tailwind styles not applying**: Make sure PostCSS and Tailwind are properly installed
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Build errors**: Clear node_modules and reinstall
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📄 License

This project is open source and available for personal use.

---

**Happy Coding! 🎉**

