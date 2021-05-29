const path = require('path');
const getWdsConfig = require("./webpack.config.dev");

const entry = path.join(process.cwd(), 'src/app/scenes/scorecards', 'scorecards.jsx');

module.exports = getWdsConfig(entry, 'scorecards.js', 'src/app/scenes/scorecards/scorecards.html');