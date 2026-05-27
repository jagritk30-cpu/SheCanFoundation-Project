# She Can Foundation Contact Form

A polished full-stack contact form built for the She Can Foundation internship task.

## What this project includes

- Responsive frontend with accessible form fields
- Client-side and server-side validation
- Engaging NGO-focused visual design with a She Can branded hero background and polished section layout
- Animated entrance effects for the homepage and admin page
- Backend API using Express
- JSON storage for submissions with optional upgrade path to a database
- Admin panel with dashboard summary cards and modern message view
- Simple HTTP Basic authentication for admin access
- Clean styling and modern layout

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. Open the website:

   - Frontend: `http://localhost:4000`
   - Admin panel: `http://localhost:4000/admin`

## Admin login

- Username: `admin`
- Password: `shecan123`

> To override admin credentials, create a `.env` file and set `ADMIN_USER` and `ADMIN_PASS`.

## Project structure

- `server.js` — Express backend with API and authentication
- `public/index.html` — Main contact form page
- `public/admin.html` — Admin panel page
- `public/style.css` — Responsive styles
- `public/app.js` — Form submission logic
- `data/submissions.db` — SQLite database file (created on first run)

## Optional enhancements

If you'd like, I can also add:

- email notification on form submission
- full authentication with login form
- client-side animations
- deployment-ready configuration for Vercel / Render
