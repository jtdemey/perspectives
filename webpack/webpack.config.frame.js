const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/frame', 'frame.jsx');

module.exports = getWdsConfig(entry, 'frame.js', 'src/app/scenes/frame/frame.html');