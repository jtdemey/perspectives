const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/infomercial', 'infomercial.jsx');

module.exports = getWdsConfig(entry, 'infomercial.js', 'src/app/scenes/infomercial/infomercial.html');