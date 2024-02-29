const express = require('express')
const router = express.Router();
const groups = require('../controllers/task-group.controller')

router.get('/task-groups', groups.list)
router.post('/task-groups', groups.create)


module.exports = router;