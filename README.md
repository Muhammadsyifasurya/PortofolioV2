![My Website View](/src/assets/img/screenshots/webpage.PNG)

# 👋 Introduction

Hello! My name is **Muhammad Syifa Surya Saputra**, a Front-End Developer with a strong passion for creating digital experiences that are user-friendly, efficient, and accessible. I'm currently focusing on enhancing my skills in Software Engineering, particularly front-end development, and continuously learning to improve my craft. This website is a personal portfolio showcasing my skills, projects, and journey as a developer.

- **Email**: syifamuhammad3139@example.com
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/muhammadsyifasuryasaputra/)
- **GitHub**: [GitHub Profile](https://github.com/Muhammadsyifasurya)

---

## 🌐 About This Website

This portfolio showcases my journey as a software engineer, highlighting my skills in front-end development, problem-solving, and collaboration. The site provides an intuitive experience where visitors can explore my projects, technical expertise, and career aspirations. It also serves as a glimpse into my commitment to building accessible, user-centered digital experiences. [View the live version here](https://muhammadsyifasurya.github.io/PortofolioV2/)

## 🗂 Website Structure

The website is organized into several key sections:

1. **Header**: Contains the main navigation links and branding.
2. **Home**: The main landing page that welcomes visitors.
3. **About Section**: A brief introduction to who I am and my technical background.
4. **Experience**: Highlights my work experience, showcasing key roles, responsibilities, and achievements.
5. **Work Section**: Showcases my projects and work samples.
6. **Social Links (Aside)**: Contains links to my social media profiles.
7. **Contact Section**: Provides various methods to get in touch with me.
8. **Footer**: Contains additional contact details and personal information.

## 🛠 Tools Used

- **Text Editor**: Visual Studio Code
- **Version Control**: Git, GitHub
- **Figma**: For UI/UX design mockups

## 🧑‍💻 Technologies Used

- **ReactJS**: For building interactive and dynamic user interfaces.
- **Vite**: A fast and lightweight development server for building and serving the website.
- **Tailwind CSS**: A utility-first CSS framework to build custom styles quickly and efficiently.
- **HTML5**: Structuring the content and elements of the website.
- **CSS3**: Styling the website with a responsive layout and animations.
- **JavaScript**: For interactive features like smooth scrolling and dynamic content.
- **Font Awesome**: For the social media icons used across the site.

## 📝 Semantic Implementation

The website follows semantic HTML principles for better accessibility and SEO optimization. Here are a few key practices implemented:

- **`<header>`**: Defines the header section with the main navigation links.
- **`<nav>`**: Contains the navigation links for easy access to different sections.
- **`<main>`**: Encompasses the primary content of the website.
- **`<section>`**: Used for distinct content areas like About, Projects, and Contact.
- **`<footer>`**: Marks the footer section that contains site-wide information and links.
- **`<ul>`**, **`<li>`**: Used for lists, such as services and contact methods.

## 🎨 CSS Structure

- **Tailwind CSS**: Used for utility-based styling, allowing rapid development and customization of the website layout and appearance.
- **Responsive Layouts**: Media queries are used to ensure the website adapts to various screen sizes.
- **Animations**: Simple CSS transitions and hover effects are applied to enhance user interaction.
- **Custom Classes**: For more specific styles not covered by Tailwind, custom CSS classes are used to achieve the desired look.

## 🚀 Lighthouse Performance

![Lighthouse Performance](/src/assets/img/screenshots/Capture1.PNG)
This website has been tested using Google Lighthouse, and here are the results:

- **Performance**: 100
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

These results indicate that the website performs well across various metrics, including load speed, accessibility for users with disabilities, adherence to best practices, and SEO optimization.

## ⚙️ How to Setup

To get this project running on your local machine, follow these steps:

1. **Clone the Repository**  
   Use the following command to clone the repository:

   ```bash
   git clone https://github.com/muhammadsyifasurya/PortofolioV2.git

   ```

2. **Enter to the folder**

   ```bash
   cd PortofolioV2
   ```

3. **Open with Visual Studio Code**

   ```bash
   code .
   ```

4. **Install the project dependencies**

   ```bash
   pnpm install
   ```

5. **Running Locally**

   ```bash
   pnpm run dev
   ```

## 🚀 Deploy

You can deploy your site using services like Netlify, GitHub Pages, or Vercel.

### Example deployment on GitHub Pages:

1. **Install the gh-pages package:**

   ```bash
   pnpm add gh-pages --save-dev
   ```

2. **Add deployment scripts to the package.json file:**

   ```bash
   "scripts": {
   "deploy": "gh-pages -d dist",
   "predeploy": "pnpm run build"
   }
   ```

3. \***\*Deploy to GitHub Pages:**

   ```bash
   pnpm run deploy
   ```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
