const express = require('express')
const router = express.Router();
const groups = require('../controllers/task-group.controller')

router.get('/task-groups', groups.list)

module.exports = router;