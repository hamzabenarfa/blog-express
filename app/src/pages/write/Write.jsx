import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./write.css";
function Write() {
  const url = process.env.REACT_APP_URL;

  const { id } = useParams();

  const [title, seTtitle] = useState("");
  const [descreption, setdescreption] = useState("");
  const [file, setFile] = useState(null);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      await axios.post(`${url}/upload`, formData);
    } catch (err2) {
      console.log(err2);
    }
    try {
      const res = await axios.post(`${url}/posts/`, {
        username: id,
        title,
        descreption,
        photo: `${url}/images/${file.name}`,
      });

      res.data && window.location.replace(`/post/${res.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className=" write-container">
        <div className="write-card">
          <form>
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter your title..."
              onChange={(e) => seTtitle(e.target.value)}
            />

            <label htmlFor="descreption">Descreption</label>
            <textarea
              cols="30"
              rows="10"
              name="descreption"
              id="descreption"
              placeholder="Enter your descreption..."
              onChange={(e) => setdescreption(e.target.value)}
            ></textarea>

            <button type="submit" className="write" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Write;
