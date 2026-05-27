const express = require('express');
const path = require('path');
const fs = require('fs');
const basicAuth = require('basic-auth');
const helmet = require('helmet');
const validator = require('validator');

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'submissions.json');
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'shecan123';

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, '[]', 'utf8');
}

function getSubmissions() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function saveSubmissions(submissions) {
  fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2), 'utf8');
}


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

function validateContact(data) {
  const errors = {};
  if (!data.name || !data.name.trim()) {
    errors.name = 'Name is required.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!data.email || !validator.isEmail(data.email)) {
    errors.email = 'A valid email address is required.';
  }

  if (!data.message || !data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters long.';
  }

  return errors;
}

function requireAdmin(req, res, next) {
  const credentials = basicAuth(req);
  if (!credentials || credentials.name !== ADMIN_USER || credentials.pass !== ADMIN_PASS) {
    res.set('WWW-Authenticate', 'Basic realm="She Can Admin"');
    return res.status(401).send('Authentication required.');
  }
  next();
}

app.post('/api/contact', (req, res) => {
  const submission = {
    id: Date.now(),
    name: String(req.body.name || '').trim(),
    email: String(req.body.email || '').trim(),
    message: String(req.body.message || '').trim(),
    created_at: new Date().toISOString()
  };

  const errors = validateContact(submission);
  if (Object.keys(errors).length) {
    return res.status(400).json({ status: 'error', errors });
  }

  const submissions = getSubmissions();
  submissions.push(submission);
  saveSubmissions(submissions);

  res.json({ status: 'success', message: 'Form Submitted Successfully' });
});

app.get('/api/admin/submissions', requireAdmin, (req, res) => {
  const submissions = getSubmissions().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  res.json(submissions);
});

app.get('/admin', requireAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Admin area available at http://localhost:' + PORT + '/admin');
});
