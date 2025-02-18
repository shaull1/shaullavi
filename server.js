const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
playButton = document.getElementById('playButton');
const introScreen = document.getElementById('introScreen');
const gameScreen = document.getElementById('gameScreen');

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
            return ext === '.jpg' || ext === '.png';
        });

        res.json(images);
    });
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

