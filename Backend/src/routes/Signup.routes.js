const express = require('express');
const router = express.Router();
const pool = require('../db/db');
const upload = require('../middlewares/multerConfig');

router.get('/', (req, res)=>{
    res.status(200).send("Hello this is backend for Assignment")
})

router.delete('/', async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM users RETURNING *");

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'No rows were deleted' });
        }
        res.status(200).json({
            message: `${result.rowCount} rows deleted successfully`,
            deletedRows: result.rows
        });
    } catch (error) {
        console.error('Error deleting rows:', error);
        res.status(500).json({ message: 'Error deleting rows', error: error.message });
    }
});

router.post('/', upload, async (req, res) => {
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
