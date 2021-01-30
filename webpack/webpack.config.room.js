const path = require('path');
const getWdsConfig = require('./webpack.config.dev');

const entry = path.join(process.cwd(), 'src/app/scenes/room', 'room.js');

module.exports = getWdsConfig(entry, 'room.js', 'src/app/scenes/room/room.html');