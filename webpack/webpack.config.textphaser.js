const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/textphaser', 'textphaser.jsx');

module.exports = getWdsConfig(entry, 'textphaser.js', 'src/app/scenes/textphaser/textphaser.html');