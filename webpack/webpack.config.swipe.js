const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/swipe', 'swipe.jsx');

module.exports = getWdsConfig(entry, 'swipe.js', 'src/app/scenes/swipe/swipe.html');