const { Router } = require('express');
const upload = require('../middleware/upload.middleware.js');
const songController = require('../controllers/song.controller.js');
const { authUser } = require('../middleware/auth.middleware.js');

const router = Router();

router.post('/', authUser, upload.single('song'), songController.uploadSong);

router.get('/', authUser, songController.getSong);

module.exports = router;
