const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const {connectSocket} = require('./config/socket');
const cors = require('cors');

const formData = require('express-form-data')

const app = express();
const http = require('http').Server(app);
const socketIO = require('socket.io')(http, {
  cors: {
      origin: "*"
  }
});

const {setSocket} = require('./utils/socket');
// Set socket
setSocket(socketIO);

// Connect Database
connectDB();
// Connect Socket
connectSocket(socketIO);
app.use(formData.parse())
// Init Middleware
app.use(express.json());
app.use(cors({origin: '*'}));
//app.use(fileUpload());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/property', require('./routes/api/property'));
app.use('/api/property_type', require('./routes/api/propertyType'));
app.use('/api/bids', require('./routes/api/bids'));
app.use('/api/my_properties', require('./routes/api/myproperties'));
app.use('/api/cart', require('./routes/api/cart'));
app.use('/api/stripe', require('./routes/api/stripe'));

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

const PORT = process.env.PORT || 80;

http.listen(PORT, () => console.log(`Server started on port ${PORT}`));