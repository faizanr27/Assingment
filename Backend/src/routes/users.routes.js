const express = require('express');
const router = express.Router();
const pool = require('../db/db');


router.get('/', async (req, res) => {
    try {
        const userlist = await pool.query("SELECT * FROM users")
        res.send(userlist.rows)
    } catch (err) {
        console.error(err.message)
    }
});

module.exports = router;