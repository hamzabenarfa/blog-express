import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Write() {
  const url = process.env.REACT_APP_URL;

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [Loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        const imageRef = ref(storage, `images/${file.name + v4()}`);
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);

        const res = await axios.post(`${url}/posts/`, {
          username: id,
          title,
          descreption: description,
          photo: imageUrl,
        });
        setLoading(true);
        if (res.data) {
          window.location.replace(`/post/${res.data._id}`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div className="min-h-screen p-8 mt-8">
      <form className="text-5xl space-y-4">
        <label htmlFor="title" className="text-5xl font-bold ">Title</label>
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

        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="bg-slate-400 " disabled={Loading} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Write;
