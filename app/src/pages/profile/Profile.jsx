import { useLocation } from "react-router";
import axios from "axios";
import photo from "../../photo/express.jpg";

import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Card from './components/card'

function Profile() {
  const url = process.env.REACT_APP_URL;
  const location = useLocation();
  const id = location.state?.id;
  const { data: user } = useAxios(`${url}/users/${id}`, "get");
  const { data: posts } = useAxios(`${url}/posts/`, "get");

  // delete post
  const deletePost = async (postId) => {
    try {
      await axios.delete(`${url}/posts/${postId}`, {
        data: { username: user?.username },
      });
      // Refresh the list of posts
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex items-center justify-between flex-row bg-white shadow-md p-6 m-4 rounded-2xl">
        <div className="flex items-center  space-x-4">
          <img
            className="h-24 w-24 rounded-full border-2 border-gray-300"
            src={photo}
            alt={user?.username}
          />
          <div>
            <h1 className="text-3xl font-bold">{user?.username}</h1>
            <p className="text-gray-600">@{user?.username}</p>
          </div>
        </div>
        <Link
          to={`/write/${user?.username}`}
          className="mt-4 inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Post
        </Link>
      </header>
      
      <main className="  container flex items-center justify-center flex-col " >
        {posts && posts.length > 0 ? (
          posts
            .filter(post => user?.username === post.username)
            .map(post => (
              <Card key={post._id} post={post} deletePost={deletePost} />
            ))
        ) : (
          <p className="text-center text-gray-500">No posts available</p>
        )}
      </main>
    </section>
  );
}

export default Profile;
