import { Link, useParams, useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import dayjs from "dayjs";
const SinglePost = () => {
  const posts = useStoreState((state) => state.posts);
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();
  const deletePost = (delPostId) => {
    const tmpPosts = posts.filter((post) => post.id.toString() !== delPostId);
    setPosts(tmpPosts);
  };
  function handleDelete() {
    deletePost(id);
    navigate("/");
  }
  return (
    <div className="SinglePost">
      {post ? (
        <>
          <h3>{post.title}</h3>
          <p>Created: {dayjs(post.datetime).format("MMM DD, YYYY")}</p>
          <pre style={{ border: "1px solid", padding: "0.5rem" }}>
            {post.body}
          </pre>
          <Link to={`/editpost/${post.id}`}>
            <button>Edit Post</button>
          </Link>

          <button onClick={handleDelete}>Delete Post</button>
        </>
      ) : (
        <h3>Post Not Found</h3>
      )}
      <Link to="/" style={{ display: "block" }}>
        Back to List of Posts
      </Link>
    </div>
  );
};
export default SinglePost;
