import express from 'express';
import path from 'path';

const router = express.Router();
const prefix = process.env.NODE_ENV === 'development' ? 'src/app' : 'dist/public';

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'perspectives.html'));
  });

router.route('/towers')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), prefix, 'towers.html'));
  });

export default router;