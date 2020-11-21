import http from 'http';
import expressApp from './server';

const port = 5260;
const app = http.createServer(expressApp);
const getTime = () => new Date().toString().replace(/T/, ':').replace(/\.\w*/, '');

app.on('error', err => {
  process.stdout.write(`ERR@${getTime()}`, err);
});
process.on('SIGINT', () => {
  process.exit();
});
expressApp.listen(port);

process.stdout.write('HTTP server listening on port 5260\n');