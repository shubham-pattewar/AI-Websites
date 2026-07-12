# 100 Essential AI Websites

A beautifully designed, premium, and responsive directory showcasing the **100 most useful, genuine AI websites** for work, study, creativity, and everyday life. Built using clean, semantic HTML5, modern CSS3 (with custom properties, glassmorphism, and smooth animations), and vanilla JavaScript. 

Perfect for hosting on GitHub Pages, Vercel, or any other static hosting service.

## ✨ Live Demo & Visual Design
- **Premium Minimalistic Design**: Sleek background blur layers with monochrome zinc colors, inspired by Apple, Linear, and Vercel.
- **Micro-interactions & Animations**: Animated floating category blobs, smooth button scale effects, and hover transitions.
- **Dual Theme Support**: Native Light and Dark themes with automatic system preference detection and local persistence.

## 🚀 Key Features

1. **Exactly 100 Curated AI Websites**: Highly vetted, genuine tools spanning multiple categories (Chatbots, Images, Video, Audio, Coding, Productivity, Writing, Research, Translation, Education, Presentations, Automation, SEO, Design, Developer Tools, Resume Builders, PDF, Email, Data Analysis, Healthcare, and Finance).
2. **Instant Search & Filters**: Search in real-time by tool names, descriptions, categories, or tags.
3. **Category Scrollbar**: Fast filter chips displaying all 20+ categories dynamically.
4. **Interactive Sorting**: Sort tools by *Most Popular (Score)*, *Newest Added*, or *Alphabetically (A-Z, Z-A)*.
5. **Favorites / Bookmarks System**: Save your favorite tools with a single click. Favorites are saved in your browser's `localStorage` and can be toggled using the "Favorites Only" button.
6. **Recently Visited Panel**: A dynamic sidebar component tracking the 5 most recently explored tools.
7. **Comprehensive Details Modal**: View advanced features, target audience tags, pricing badges (Free / Paid / Freemium), and "best-for" recommendations.
8. **SEO Optimized**: Fully semantic outline structure, optimized viewport setups, metadata, Open Graph labels, and JSON-LD structured data.

## 📁 Project Structure

```
├── index.html     # Main HTML entrypoint (SEO, layout, modal dialog overlays)
├── style.css      # Vanilla CSS stylesheet containing color tokens, dark theme modes, and responsive grid layouts
├── script.js      # Core JS file holding the dataset of 100 AI websites and application controllers
└── README.md      # Project overview and deployment guide
```

## 🛠️ Local Development & Testing

Since this website is completely static (no backend, no database compilation required, no bundlers), you can run it instantly:

### Method 1: Browser Direct
Double click the `index.html` file in your file explorer to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.

### Method 2: Local Static Server
If you want to simulate a real deployment with absolute resource paths:
1. Navigate to the project root directory in your terminal:
   ```bash
   cd "c:/My Projects/AIwebsites"
   ```
2. Run a simple local web server:
   - **Python**: `python -m http.server 8000` (Visit `http://localhost:8000`)
   - **Node.js**: `npx serve` (Visit `http://localhost:3000`)

## 🚢 Deploying to GitHub Pages

Deploying this site is simple and free:

1. Create a new repository on your GitHub account: `AI-Websites`.
2. Initialize Git, add files, and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of 100 Essential AI Websites"
   ```
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/shubham-pattewar/AI-Websites.git
   git branch -M main
   git push -u origin main
   ```
4. Configure Pages:
   - Go to your repository **Settings** on GitHub.
   - Select **Pages** from the left-hand sidebar menu.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select the `main` branch and the `/ (root)` folder.
   - Click **Save**.
5. Your directory will be live at `https://shubham-pattewar.github.io/AI-Websites/` within a couple of minutes!

## 📜 License
This project is licensed under the MIT License - see the LICENSE page/section for details.
