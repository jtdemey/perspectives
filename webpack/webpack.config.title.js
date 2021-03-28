const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/title', 'title.jsx');

module.exports = getWdsConfig(entry, 'title.js', 'src/app/scenes/title/title.html');