import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./edit.css";
function Edit() {
  const [user, setUser] = useState("");
  const [title, seTtitle] = useState("");
  const [descreption, setdescreption] = useState("");


  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/api/posts/${id}`, {
       
        username:user,
        title,
        descreption
      
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
                <label htmlFor="user">User</label>
                <input type="text" name="user" id="user" placeholder="Enter your user..." onChange={e => setUser(e.target.value)} />
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
    </div>
  );
}

export default Edit;
