import Package, { insertPackages } from '../models/package';
import express from 'express';

const router = new express.Router();

router.post('/', (req, res) => {
  insertPackages(req.body).then(x => res.json(x));
})

// router.post('/shelter-form', (req, res) => {
//   deliveryValidate(req.body).then(x => res.json(x));
// })

export default router;