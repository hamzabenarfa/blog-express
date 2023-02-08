import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./edit.css";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
function Edit() {
  const { id } = useParams();

  const { data } = useAxios(`http://localhost:4000/api/posts/${id}`, "get");
  
  const [title, seTtitle] = useState("");
  const [descreption, setdescreption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/posts/${id}`, {
        username: data.username,
        title,
        descreption,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <div className=" write-container">
          <div class="write-card">
            <form>
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

              <Link to={"/"}>
                <button type="submit" className="write" onClick={handleSubmit}>
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
