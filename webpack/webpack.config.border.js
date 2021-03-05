const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/border', 'border.jsx');

module.exports = getWdsConfig(entry, 'border.js', 'src/app/scenes/border/border.html');