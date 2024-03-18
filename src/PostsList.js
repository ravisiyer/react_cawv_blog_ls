import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import dayjs from "dayjs";
const PostsList = ({ displayPosts }) => {
  const searchPosts = useStoreState((state) => state.searchPosts);
  return (
    <div>
      {displayPosts.length > 0 ? (
        displayPosts.map((post) => {
          return (
            <div className="posts-list-item" key={post.id}>
              <Link to={`posts/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>Created: {dayjs(post.datetime).format("MMM DD, YYYY")}</p>
              <p>
                {(post.body.length > 50 ? post.body.slice(0, 50) : post.body) +
                  " ..."}
              </p>
            </div>
          );
        })
      ) : (
        <p style={{ marginTop: "2rem", fontSize: "2rem" }}>
          No {searchPosts && "matching "}posts
        </p>
      )}
    </div>
  );
};
export default PostsList;
