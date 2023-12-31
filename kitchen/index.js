const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const Blog = require("./models/dataSchema");
const router = express.Router();
const BodyParser = require("body-parser");
app.use(express.json());
app.use(BodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://anuragspinoff:anuragspinoff@blogs.cwctkfi.mongodb.net/blog?retryWrites=true&w=majority&ssl=true"
  )
  .catch((error) => handleError(error));
const blog = mongoose.model("Blog");
console.log(blog);
// Configure multer for handling file uploads

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));

app.post("/insert", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file; // This will hold the uploaded image details

  if (!image) {
    return res.status(400).send("No image file provided");
  }

  const formData = new Blog({
    title: title,
    image: image.filename,
    description: description,
  });

  try {
    await formData.save();
    res.send("Data has been submitted");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while saving the data.");
  }
});

app.get("/getAllBlog", async (req, res) => {
  try {
    const allBlog = await Blog.find({});

    const formattedBlogData = allBlog.map((blogItem) => {
      const formattedImage = blogItem.image;
      return {
        _id: blogItem._id,
        title: blogItem.title,
        description: blogItem.description,
        image: formattedImage,
        __v: blogItem.__v,
      };
    });

    res.send({ status: "ok", data: formattedBlogData });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "An error occurred while fetching blogs." });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

module.exports = router;
