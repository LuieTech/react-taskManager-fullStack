const express = require('express')
const router = express.Router();
const groups = require('../controllers/task-group.controller')

router.get('/task-groups', groups.list)
router.post('/task-groups', groups.create)
router.delete('/task-groups/:id', groups.delete)
router.get('/task-groups/:id', groups.detail)


module.exports = router;