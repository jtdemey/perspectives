import express from 'express';
import path from 'path';

const router = express.Router();
const prefix = process.env.NODE_ENV === 'development' ? 'src/app' : 'dist/public';

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'perspectives.html'));
  });
router.route('/border')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'border.html'));
  });
router.route('/frame')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'frame.html'));
  });
router.route('/infomercial')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'infomercial.html'));
  });
router.route('/room')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'room.html'));
  });
router.route('/swipe')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'swipe.html'));
  });
router.route('/title')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'title.html'));
  });
router.route('/towers')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'towers.html'));
  });

export default router;