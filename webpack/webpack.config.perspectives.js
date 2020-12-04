const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app', 'perspectives.jsx');

module.exports = getWdsConfig(entry, 'perspectives.js', 'src/app/perspectives.html');