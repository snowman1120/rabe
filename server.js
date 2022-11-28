const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const auth = require('./middleware/auth');

const formData = require('express-form-data')

const app = express();

// Connect Database
connectDB();
app.use(formData.parse())
// Init Middleware
app.use(express.json());
//app.use(fileUpload());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

process.env.NODE_ENV = "production";

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.use(express.static('admin/build'));

  app.get('/admin/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'));
  })
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));