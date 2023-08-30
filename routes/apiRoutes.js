const fs = require("fs")
const path = require('path');
const notes = require("../db/db.json")
const express = require("express")
const router = express.Router()

const saveNotes = () => {
    fs.writeFileSync(path.resolve(__dirname, "../db/db.json"), JSON.stringify(notes))
}

router.get("/notes", (req, res) => {
    res.json(notes)
})

router.post("/notes", (req, res) => {
})

module.exports = router;