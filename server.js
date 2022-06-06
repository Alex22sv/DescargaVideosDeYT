const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(4000, () => {
    console.log('El servidor inició correctamente con el puerto 4000');
});
app.get('/downloadmp4', (req,res) => {
var URL = req.query.URL;
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
});

app.get('/downloadmp3', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
    ytdl(URL, {
        format: 'mp3'
        }).pipe(res);
    });
    
    