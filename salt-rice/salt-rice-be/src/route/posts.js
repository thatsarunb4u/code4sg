import Router from 'express';
import models from '../models';

const router = Router();

router.get('/', (req,res) => {
    res.send(Object.values(models.users));
});

router.get('/:userId', (req,res) => {
    res.send(models.users[req.params.userId]);
});
router.put('/', (req,res) => {
    res.send('Received a put request.');
});

router.post('/', (req,res) => {
    res.send('Received a POST request.');
});

router.delete('/', (req,res) => {
    res.send('Received a DELETE request.');
});

export default router;