# Njoroge Muigai – Portfolio Website

This is the personal portfolio website of **Njoroge Muigai**, a Senior Journalist at BBC, showcasing services, portfolio, testimonials, gallery, and contact information. The site features a modern, dark theme with a minimalist design optimized for readability and responsiveness.

Deployed on [Vercel](https://vercel.com/) for fast, serverless hosting.

## 🔗 Live Demo: [Visit the live site](https://njoroge-react-portfolio.vercel.app/)

## 📦 Project Structure

```src/
├─ assets/ # Images, logos, resume PDF
├─ components/ # React components for each section
│ ├─ Navbar.jsx
│ ├─ ProfileSection.jsx
│ ├─ ServiceSection.jsx
│ ├─ PortfolioSection.jsx
│ ├─ TestimonialsSection.jsx
│ ├─ GallerySection.jsx
│ └─ ContactSection.jsx
├─ App.jsx # Main app layout
└─ index.jsx # Entry point
```

## 💻 Features

- **Responsive design**: Works across desktop, tablet, and mobile screens.
- **Dark theme with subtle neon accents** for a modern look.
- **Frosted glass cards** for profile and content sections.
- **Interactive elements**:
  - Hover effects on buttons and portfolio items.
  - Expandable gallery with Pinterest-style layout.
  - Smooth scroll for navigation links.
- **SEO-friendly** structure with semantic HTML tags.
- **Vercel deployment** for fast performance and automatic HTTPS.


## ⚙️ Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion (animations)
- **Hosting**: Vercel
- **Icons**: Lucide React
- **Fonts**: Apple system font stack for headings and Inter for body (customizable)

---

## 🛠 Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```
2. Install dependencies:

```bash
npm install
```
3. Run locally:

```bash
npm start
```
4. Build for production:
```bash
npm run build
```

## 🚀 Deployment
The project is deployed on Vercel:
```bash
vercel
Vercel automatically detects React projects and serves the build folder.
Each push to the main branch triggers an automatic deployment.
```

## 📝 Notes
Update the resumePDF and asset images in src/assets as needed.

Update navigation links in Navbar.jsx if you add/remove sections.

Font settings can be modified in tailwind.config.js or globals.css.

## 📄 License
This project is open-source and free to use under the MIT License.

