import PostsList from "./PostsList";

const Home = ({ displayPosts }) => {
  return (
    <div className="posts-list">
      <h2>List of Posts</h2>
      <PostsList displayPosts={displayPosts} />
    </div>
  );
};
export default Home;
