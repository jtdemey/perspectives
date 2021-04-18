const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/corner', 'corner.js');

module.exports = getWdsConfig(entry, 'corner.js', 'src/app/scenes/corner/corner.html');