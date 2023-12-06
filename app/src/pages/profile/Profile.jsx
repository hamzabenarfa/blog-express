import { useLocation } from "react-router";
import axios from "axios";
import photo from "../../photo/express.jpg";

import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Card from "./components/card";
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
    <secion className="flex flex-row min-h-screen">
      <header className="flex flex-col justify-arounds items-center w-30 space-y-4 p-4   ">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <h1 className="font-bold text-3xl ">Menu</h1>
          <img
            className="h-16 w-16 rounded-full"
            src={photo}
            alt="User Photo"
          />
          <p className="text-xl capitalize font-bold">
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
                    <Card key={post._id} post={post} deletePost={deletePost} />
                  )
                ) : (
                  <h1 className="text-5xl">no posts</h1>
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
