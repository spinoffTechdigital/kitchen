import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from 'buffer';
function Home() {
  const navigate = useNavigate();
  const noteState = [];
  const [blog, setblog] = useState(noteState);

  const navigateToCreate = () => {
    navigate("/Create");
  };

  const fetchBlogData = () => {
    axios
      .get("http://localhost:5000/getAllBlog")
      .then((response) => {
        console.log("Fetched data:", response.data); // Log the response data for debugging
        setblog(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="Container">
      <div className="cont-1">
        <h1>Welcome to blogs</h1>
      </div>
      <div className="cont-2">
        <button className="homeButton" onClick={navigateToCreate}>
          Create Blogs
        </button>
      </div>
      <div className="cont-3">
        <h2>Latest Blogs</h2>
        <ul>
          {blog.map((blogItem, index) => (
            <li key={index}>
                {blogItem.image && (
                <img
                  width="300"
                  height="300"
                  src={`data:${blogItem.image.contentType};base64, ${Buffer.from(blogItem.image.data).toString('base64')}`}
                  alt="img"
                />
              )}
              <h4>{blogItem.title}</h4>
              <p>{blogItem.description}</p>
            </li>
          ))}
        </ul>
      </div>
      .
    </div>
  );
}

export default Home;
