const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/towers', 'towers.js');

module.exports = getWdsConfig(entry, 'towers.js', 'src/app/scenes/towers/towers.html');