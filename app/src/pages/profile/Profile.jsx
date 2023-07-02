import { useLocation } from "react-router";
import axios from "axios";
import photo from "../../photo/express.jpg";

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
    <secion className="min-h-screen">
      <header className="  flex justify-between  bg-teal-500 ">
        <div className="flex items-center gap-2 ">
          <img className="h-10 w-10 rounded-2xl" src={photo} alt="User Photo" />
          <p className="text-2xl capitalize font-bold">
            {user && user.username}
          </p>
        </div>
        <Link
          to={`/write/${user && user.username}`}
          className=" bg-purple-500 hover:bg-purple-700 text-white font-bold p-2  rounded"
        >
          ADD POST
        </Link>
      </header>
      <div>
        {posts ? (
          posts.map((post) => {
            return (
              <div key={post.id}>
                {user ? (
                  user.username === post.username && (
                    <div className="flex flex-col items-start space-y-2 justify-center bg-teal-400 m-4 rounded-lg p-4 md:max-w-xl ">
                      <h2 className="text-xl font-bold ">
                        <Link to={`/post/${post._id}`}>{post.title}</Link>
                      </h2>

                      <p className="text-lg">
                        {post.descreption && post.descreption.substring(0, 100)}
                        ...
                      </p>

                      <div className=" space-x-2">
                        <Link to={`/edit/${post._id}`}>
                          <button className="">Edit</button>
                        </Link>

                        <button
                          className=""
                          onClick={() => deletePost(post._id)}
                        >
                          Delete
                        </button>
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
    </secion>
  );
}

export default Profile;
