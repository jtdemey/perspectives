const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/banner', 'banner.jsx');

module.exports = getWdsConfig(entry, 'banner.js', 'src/app/scenes/banner/banner.html');