import express from 'express';
import path from 'path';

const router = express.Router();
const prefix = process.env.NODE_ENV === 'development' ? 'src/app' : 'dist/public';

const respond = (res, scene) => res.sendFile(path.join(process.cwd(), prefix, `${scene}.html`));

const scenes = [
  'perspectives',
  'banner',
  'border',
  'corner',
  'frame',
  'infomercial',
  'room',
  'scorecards',
  'swipe',
  'textphaser',
  'title',
  'towers'
];

router.route('/').get((req, res) => respond(res, 'perspectives'));
scenes.forEach(scene => {
  router.route(`/${scene}`).get((req, res) => respond(res, scene));
});

export default router;