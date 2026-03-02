const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const db = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/messages', require('./routes/messages'));
app.use('/conversations', require('./routes/conversations'));
app.use('/groups', require('./routes/groups'));
app.use('/communities', require('./routes/communities'));

// Socket.IO
io.on('connection', (socket) => {
    console.log('New client connected');
    // Handle other socket events
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});