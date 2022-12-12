const { users } = require('../config/socket');
let socketIO = null;

exports.setSocket = (skt) => {
    socketIO = skt;
}

exports.sendMessage = (data) => {
    if(!socketIO) return;
    console.log(users)
    console.log(usres[data.id])
    socketIO.to(users[data.id]).emit(data.type, data.messge);
}