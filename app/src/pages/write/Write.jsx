import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./write.css";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4  } from "uuid";

function Write() {
  const url = process.env.REACT_APP_URL;

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (file) {
        const imageRef = ref(storage, `images/${file.name + v4() }`);
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);
        setImg(imageUrl);
        console.log("🚀 ~ file: Write.jsx:26 ~ handleSubmit ~ imageUrl:", img)

        

        const res = await axios.post(`${url}/posts/`, {
          username: id,
          title,
          descreption : description,
          photo: img,
        });
        console.log("🚀 ~ file: Write.jsx:26 ~ handleSubmit ~ res", res.data)
        // if (res.data) {
        //   window.location.replace(`/post/${res.data._id}`);
        // }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="write-container">
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
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description">Description</label>
            <textarea
              cols="30"
              rows="10"
              name="description"
              id="description"
              placeholder="Enter your description..."
              onChange={(e) => setDescription(e.target.value)}
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
