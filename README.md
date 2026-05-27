# She Can Foundation Contact Form

This repository contains a polished She Can Foundation contact form project built for the internship task.

The application is designed to stand out with a clean NGO-focused interface, animated interactions, responsive layout, and an admin dashboard for reviewing submissions.

## Features

- Responsive and modern frontend with strong NGO styling
- Animated entrance transitions for homepage and dashboard sections
- Accessible contact form with Name, Email, Message fields, and validation
- Express backend API for form submission
- JSON-based persistence for contact entries
- Admin panel with summary cards and recent submission display
- HTTP Basic authentication for admin access
- Custom logo, branded header, and She Can hero background image

## Demo setup

### Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. Open the app in your browser:

   - Frontend: `https://shecanfoundation-project.vercel.app`
   - Admin panel: `https://shecanfoundation-project.vercel.app/admin`

### Admin credentials

- Username: `admin`
- Password: `shecan123`

> To override these values, create a `.env` file with `ADMIN_USER` and `ADMIN_PASS`.

## Project structure

- `server.js` — Node.js + Express backend with API and admin protection
- `public/index.html` — Main contact form page
- `public/admin.html` — Admin dashboard for submissions
- `public/style.css` — Modern responsive styles
- `public/app.js` — Frontend form submission logic
- `public/assets/` — local branding and hero image assets
- `data/submissions.json` — persisted contact submissions

## GitHub repository

- Repository: `https://github.com/jagritk30-cpu/SheCanFoundation-Project`

## Live demo

- Production: `https://shecanfoundation-project.vercel.app`

## Deployment

This app is ready to deploy to Vercel.

1. Install Vercel CLI if needed:

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy from the project folder:

   ```bash
   vercel --prod
   ```

> During deployment, choose the current project directory as the root. The front-end will deploy successfully, and the backend API will be available when running the project locally.

## Notes for interviewers

This project demonstrates:

- a complete full-stack implementation for a real NGO task
- functional form submission and data persistence
- improved user experience with polished visuals and animations
- thoughtful deployment readiness
- practical use of JavaScript, HTML, CSS, and Express

If you'd like, I can also extend this project with email notifications, real database storage, authentication flows, or a hosted production deployment link.
