
const { Router } = require('express');
const { userGet, userPut, userPost, userDelete } = require('../controllers/user');

const router = Router();

router.get('/', userGet );

router.put('/', userPut );

router.post('/api', userPost );

router.delete('/api', userDelete );

module.exports = router;
