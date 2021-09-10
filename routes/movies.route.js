var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();

const movieController = require('../controllers/movie.controller');

router.get('/', movieController.index);
router.get('/create', movieController.create);
router.post('/', movieController.store);
router.get('/:id', movieController.show);
// router.get('/:id/edit', movieController.edit);
router.put('/:id', movieController.update);
router.delete('/:id', movieController.destroy);

router.get('/all', movieController.getAll);
router.patch('/:id', movieController.updateStatus);
router.delete('/:id/delete', movieController.hardDestroy);

router.post('/upload/', upload.single('images'), movieController.upload);

module.exports = router;
