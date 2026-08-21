# Laxman Sharma — Personal Portfolio & Engineering Platform

A $10,000+ personal digital experience and engineering platform for **Laxman Sharma** (AI/ML & Data Systems Engineer), built with **Next.js 14 App Router, TypeScript, Tailwind CSS, and Lucide React**.

🌐 **Live Site**: [laxman-sharma.com.np](https://laxman-sharma.com.np)

---

## 🚀 Technical Stack

- **Framework**: Next.js 14 (App Router, Server Components, Static Site Generation)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS, PostCSS, Custom Signal & Grid Utilities
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Keyframes
- **Copilot Widget**: Custom React AI Copilot (`AskLaxmanCopilot`)
- **SEO & Metadata**: OpenGraph, Twitter Cards, Schema.org JSON-LD, Sitemap (`sitemap.xml`), Robots (`robots.txt`)

---

## 📁 Project Architecture

```text
Portfolio-Website/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with fonts, SEO & Schema.org JSON-LD
│   │   ├── page.tsx                    # Homepage narrative
│   │   ├── projects/
│   │   │   ├── page.tsx                # Full projects archive
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Deep technical case studies
│   │   ├── experience/
│   │   │   └── page.tsx                # Career & internship breakdown
│   │   ├── resume/
│   │   │   └── page.tsx                # Interactive CV & PDF download
│   │   ├── sitemap.ts                  # Dynamic SEO sitemap
│   │   └── robots.ts                   # Robots configuration
│   ├── components/
│   │   ├── navigation/                 # Navbar & Mobile Menu Drawer
│   │   ├── hero/                       # Hero section with Signal-Model-Pipeline flow
│   │   ├── projects/                   # Selected work & mini case-study cards
│   │   ├── experience/                 # Career & internship timeline
│   │   ├── skills/                     # Capability matrix & stack breakdown
│   │   ├── about/                      # Education & engineering philosophy
│   │   ├── contact/                    # Contact form & verified social terminals
│   │   ├── interactive/                # Ask Laxman AI Copilot widget
│   │   └── ui/                         # Footer
│   ├── data/
│   │   ├── portfolioData.ts            # Single source of truth for verified profile facts
│   │   └── caseStudies.ts              # Detailed technical case study breakdowns
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   └── assets/                         # Static images, PDF resume & icons
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🛠️ Local Development & Build

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production build verification**:
   ```bash
   npm run build
   ```

---

## 📄 License & Contact

- **Author**: Laxman Sharma
- **Email**: `laxman.sharma1811@gmail.com`
- **Phone**: `+977-9848590208`
- **LinkedIn**: [laxmansharma1](https://www.linkedin.com/in/laxmansharma1/)
- **GitHub**: [laxmansharma1811](https://github.com/laxmansharma1811)
