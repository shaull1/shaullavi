const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// These variables were referencing DOM elements which do not exist in the
// Node.js environment. They caused a ReferenceError when the server started.
// Removing them ensures the server runs correctly.

// משרת קבצים סטטיים
app.use(express.static(path.join(__dirname)));

// API לטעינת תמונות
app.get('/get-images', (req, res) => {
    const folder = req.query.folder;
    const folderPath = path.join(__dirname, folder);

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            res.status(500).send('Error reading folder');
            return;
        }

        const images = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png'].includes(ext);
        });

        res.json(images);
    });
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

