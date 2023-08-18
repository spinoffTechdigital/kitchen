import React, { useState } from "react";
import Axios from "axios";
function Create() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    setImage(null);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image); 

    Axios.post("http://localhost:5000/insert", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
        document.getElementById("imageInput").value = "";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Container">
      <h1>Create New Blog Here</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="con-1">
          <label htmlFor="Title">Title:</label>
          <input
            type="text"
            placeholder="Enter your blog title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="con-1">
          <label htmlFor="Image"></label>
          <input
            type="file"
            placeholder="put your blog image"
            id="imageInput"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="con-1">
          <label htmlFor="Content">Enter Your Content</label>
          <br />
          <textarea
            name="Content"
            id="Content"
            cols="50"
            rows="10"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="con-1">
          <button className="submit-button">Publish Blog</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
