import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./edit.css";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
function Edit() {
  const { id } = useParams();
  const url = process.env.REACT_APP_URL;

  const { data } = useAxios(`${url}/posts/${id}`, "get");

  const [title, seTtitle] = useState("");
  const [descreption, setdescreption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}posts/${id}`, {
        username: data.username,
        title,
        descreption,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center write-container">
      <div className="write-card w-1/2">
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="p-2 text-sm"
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
            className="p-2 text-sm"
            id="descreption"
            placeholder="Enter your descreption..."
            onChange={(e) => setdescreption(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="write bg-red-400"
            onClick={handleSubmit}
          >
            <Link to={"/"}>Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
