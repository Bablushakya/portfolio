# 📊 Bablu — Data Analytics & Business Intelligence Portfolio

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> **"Turning complex datasets into clear visual insights and smarter business decisions."**

A premium, modern, responsive, and production-ready personal portfolio website for **Bablu**, a Data Analytics and Business Intelligence professional actively seeking entry-level opportunities in the **UAE (Dubai / Abu Dhabi)**.

Designed with a high-end enterprise SaaS aesthetic, this portfolio showcases real analytical case studies, technical competencies, data pipelines, and business acumen across SQL, Power BI, Advanced Excel, and Python.

---

## 🌟 Key Highlights & Features

### 1. 🚀 Executive Hero & Live Analytics Command Center
- **Interactive Analytics Composition:** Live interactive KPI metric cards, an Area Chart tracking revenue and profit trends, and a Donut Chart showing expense breakdowns.
- **Availability & Relocation Badge:** Clear indicator highlighting readiness for immediate relocation to the UAE.
- **Direct Action CTAs:** Quick access to projects, resume download, and contact channels.

### 2. ⚡ Dual-Direction Infinite Horizontal Marquee Ticker
- **Row 1 (Right-to-Left):** SQL, Microsoft Power BI, Advanced Excel, Python (Pandas/Seaborn), and Data Cleaning & ETL.
- **Row 2 (Left-to-Right):** Interactive Dashboards, KPI Monitoring, MIS Reporting, Business Intelligence, and Financial & Market Analytics.
- **Interactive UX:** Smooth gradient edge masks, custom tool icons, domain sub-tags, and automatic pause-on-hover.

### 3. 🧠 Interactive Capabilities Matrix (`/skills`)
- **Bento Matrix View:** 25+ verified skills with terminal-style code/formula snippets (`XLOOKUP`, `DAX CALCULATE`, `SQL CTEs`, `Pandas`), tool badges, and direct links to corresponding case studies.
- **Lifecycle Pipeline View:** Visual 5-stage data journey from *Ingestion & SQL* → *Cleaning & ETL* → *Exploration & Modeling* → *BI Dashboards* → *Executive Decision Storytelling*.
- **Real-Time Search & Filter:** Instant search bar and domain filter pills with dynamic count badges.
- **Integrity Policy:** No arbitrary percentage bars (e.g., "90% SQL"); all capabilities are evidenced by working projects and case studies.

### 4. 📈 Interactive Analytics Case Studies (`/projects` & `/projects/:id`)
Comprehensive case studies covering end-to-end analytical methodologies, business questions, exploratory data analysis, interactive charts, and commercial recommendations:
1. **Financial Performance Dashboard:** Power BI & DAX model examining revenue, operating expenses, and profitability trends across business quarters.
2. **Customer Churn Analysis:** SQL and Python-driven churn prediction identifying retention bottlenecks and high-risk customer segments.
3. **UAE Real Estate Market Analysis:** Property transaction trends, price per sq.ft., and geographic volume distributions in Dubai & Abu Dhabi.
4. **E-commerce Sales & Profitability Analysis:** Category margin discrepancies, discount impact, and regional profitability optimization.
5. **VantageTube AI:** Software product development case study highlighting API metadata engines and analytical data modeling.

### 5. 💼 Professional Experience & Education (`/experience`)
- **Data Analyst Intern** at *Ziion Technology* (Jan 2026 – Jun 2026, Chandigarh, India).
- **Data Analytics Training** at *IDEMA* (Aug 2026).
- **Bachelor of Technology (B.Tech)** in Information Technology from *Malout Institute of Management and Information Technology (MIMIT)*, CGPA: **7.9** (August 2026).

### 6. 📄 Tailored Resumes & CV Formats (`/resume`)
- **Data Analyst Resume (Primary):** SQL queries, EDA, Power BI, and Python workflows.
- **Business Intelligence & Reporting CV:** DAX architecture, star schema modeling, and dashboard UX.
- **MIS Executive & Analytics CV:** Advanced Excel, pivot models, XLOOKUP, and operational data integrity.
- Direct download button for the official PDF resume (`Bablu-Resume.pdf`).

### 7. 📬 Validated Contact Form (`/contact`)
- Type-safe form validation using **Zod** and **React Hook Form**.
- Integration with **EmailJS** for instant delivery to email.
- Bot prevention using a hidden honeypot field.
- Direct communication channels: Email, LinkedIn, and GitHub.

### 8. 🔍 Search Engine Optimization (SEO) & Performance
- Full meta tag suite: OpenGraph, Twitter Cards, canonical URLs, and mobile viewport optimizations.
- **Schema.org Structured Data (JSON-LD)** for `Person` and `WebSite` entities.
- Automatically served `sitemap.xml`, `robots.txt`, and SPA routing fallback (`_redirects`).

---

## 🛠️ Tech Stack & Architecture

| Category | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` variables |
| **Motion & Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Data Visualizations** | [Recharts](https://recharts.org/) (Responsive Area, Bar, Line & Pie Charts) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Form Handling & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **SEO & Head Management** | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| **Typography** | Space Grotesk (Headings), Inter (Body), JetBrains Mono (Technical/Data) |

---

## 📂 Project Structure

```text
portfolio/
├── .vscode/
│   └── settings.json            # VS Code CSS linter rules for Tailwind v4
├── public/
│   ├── images/projects/         # SVG mockups for analytical case studies
│   ├── resume/                  # Verified PDF resumes (Bablu-Resume.pdf)
│   ├── _redirects               # SPA routing support for Netlify/Cloudflare
│   ├── favicon.svg              # Custom brand favicon
│   ├── robots.txt               # Search crawler indexing configuration
│   └── sitemap.xml              # XML sitemap with all routes
├── src/
│   ├── components/
│   │   ├── layout/              # App header, navigation, and footer
│   │   ├── ui/                  # Reusable UI primitives (Button, Container, SectionHeading)
│   │   ├── Footer.tsx           # Global footer with quick links & social channels
│   │   └── Navbar.tsx           # Responsive navbar with mobile drawer
│   ├── data/
│   │   ├── certifications.ts    # Credentials & coursework data
│   │   ├── education.ts         # Degree & academic milestones
│   │   ├── experience.ts        # Internship & professional roles
│   │   ├── navigation.ts        # Routes, contact details & personal info
│   │   ├── projects.ts          # Detailed case studies with Recharts datasets
│   │   └── skills.ts            # 25+ competencies with code snippets & tool tags
│   ├── hooks/
│   │   └── useTheme.tsx         # Dark / Light theme context hook
│   ├── pages/
│   │   ├── AboutPage.tsx        # Personal narrative, career objectives & approach
│   │   ├── CertificationsPage.tsx # Training credentials & verified certificates
│   │   ├── ContactPage.tsx      # Validated message form & direct contact links
│   │   ├── ExperiencePage.tsx   # Structured timeline of roles and academics
│   │   ├── HomePage.tsx         # Hero command center, marquee ticker, featured projects
│   │   ├── NotFoundPage.tsx     # Custom 404 page
│   │   ├── ProjectDetailPage.tsx# Interactive case study view with dynamic charts
│   │   ├── ProjectsPage.tsx     # Filterable gallery of analytical projects
│   │   ├── ResumePage.tsx       # Tailored CV selector & PDF download
│   │   └── SkillsPage.tsx       # Bento matrix & analytical lifecycle pipeline
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for projects, skills, and experience
│   ├── App.tsx                  # App root with HelmetProvider & Router
│   ├── index.css                # Tailwind v4 import, fonts, keyframes & design tokens
│   └── main.tsx                 # React DOM bootstrap
├── index.html                   # HTML entry point with metadata & Schema.org JSON-LD
├── package.json                 # Project dependencies & build scripts
├── tsconfig.json                # TypeScript project configuration
└── vite.config.ts               # Vite configuration with chunk splitting
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or higher) installed on your system:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bablushakya/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional for Contact Form):**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your [EmailJS](https://www.emailjs.com/) credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   *(If not provided, the contact form operates in simulated success mode without breaking).*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

6. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

The project is built to deploy seamlessly on modern static hosting platforms:

### Deploy to Netlify / Cloudflare Pages / Vercel
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- The included `public/_redirects` file ensures that all routes redirect to `/index.html` for client-side SPA routing (`/* /index.html 200`).

---

## 📬 Contact & Connect

- **Name:** Bablu
- **Role:** Data Analyst | Business Intelligence | MIS Reporting
- **Target Location:** Open to Relocation to the UAE 🇦🇪 (Dubai / Abu Dhabi)
- **Email:** [bablu.flutter.dev@gmail.com](mailto:bablu.flutter.dev@gmail.com)
- **LinkedIn:** [linkedin.com/in/bablu-data-analyst](https://linkedin.com/in/bablu-data-analyst)
- **GitHub:** [github.com/Bablushakya](https://github.com/Bablushakya)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
