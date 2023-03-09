import { useLocation } from "react-router";
import axios from "axios";
import photo from "../../photo/express.jpg";
import "./profile.css";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

function Profile() {
  const url = process.env.REACT_APP_URL;

  const location = useLocation();
  const id = location.state.id;
  const { data: user } = useAxios(`${url}/users/${id}`, "get");

  const { data: posts } = useAxios(`${url}/posts/`, "get");

  // delete post
  const deletePost = async (id) => {
    try {
      await axios.delete(`${url}/posts/${id}`, {
        data: { username: user.username },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="user-profile">
        <div className="user-photo-name-container">
          <img className="user-photo" src={photo} alt="User Photo" />
          <h1 className="user-name">{user && user.username}</h1>
        </div>
      </div>

      <div className="mc">
        <div className="map">
          {posts ? (
            posts.map((post) => {
              return (
                <div key={post.id}>
                  {user ? (
                    user.username === post.username && (
                      <div>
                        <div className="user-profile">
                          {/* posts */}
                          <div className="kcontainer">
                            <div className="user-posts-section">
                              <div className="post">
                                <h2 className="post-title">
                                  <Link to={`/post/${post._id}`}>
                                    {post.title}
                                  </Link>
                                </h2>

                                <p className="post-content">
                                  {post.descreption.substring(0, 100)}...
                                </p>
                                <div className="post-buttons">
                                  <Link to={`/edit/${post._id}`}>
                                    <button className="edit-button">
                                      Edit
                                    </button>
                                  </Link>
                                  <button
                                    className="delete-button"
                                    onClick={() => deletePost(post._id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    <h1>no posts</h1>
                  )}
                </div>
              );
            })
          ) : (
            <h1>no posts</h1>
          )}
        </div>

        <div className="user-info">
          <div className="link-container">
            <Link
              to={`/write/${user && user.username}`}
              className="add-post-btn"
            >
              ADD POST
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
