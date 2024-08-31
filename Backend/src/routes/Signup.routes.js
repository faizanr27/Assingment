const express = require('express');
const router = express.Router();
const pool = require('../db/db');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('resume'), async (req, res) => {
    try {
        const {name, email} = req.body;
        const resume = req.file.filename;
        const newUser = await pool.query("INSERT INTO users (name, email, resume) values($1, $2, $3) RETURNING *", [name, email, resume])
        console.log(newUser.rows[0]);
        res.status(200).json(`${newUser.rows[0].name} registered successfully`)
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
