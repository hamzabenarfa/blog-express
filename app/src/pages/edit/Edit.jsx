import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./edit.css";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
function Edit() {
  const { id } = useParams();
  const url = process.env.REACT_APP_URL

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
    <div>
      <div>
        <div className=" write-container">
          <div className="write-card">
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

                <button type="submit" className="write" onClick={handleSubmit}>
                
              <Link to={"/"}>Submit</Link>  
                </button>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
