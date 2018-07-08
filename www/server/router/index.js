
const sql_api = require('../api/index');
const express = require('express')
const router = express.Router()
 
router.get('/user_info', (req, res) => sql_api.sql_user_info(res) )

router.get('/article/:id', (req, res) => sql_api.sql_art_info(req, res) )

module.exports = router
