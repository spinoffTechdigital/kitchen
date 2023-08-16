const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer'); // Import multer
const path = require('path');
const app = express();
const Blog = require('./models/dataSchema');
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Blog', { useNewUrlParser: true });


// Configure multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

app.post('/insert', upload.single('image'), async (req, res) => {
    const { title, description,image } = req.body;
    
 

    const formData = new Blog({
        title: title,
        image: image,
        description: description,
    });

    try {
        await formData.save();
        res.send('data has been submitted');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while saving the data.');
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});
