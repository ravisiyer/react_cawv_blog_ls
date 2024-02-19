import { Link, useLocation } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const Navbar = () => {
  const searchPosts = useStoreState((state) => state.searchPosts);
  const setSearchPosts = useStoreActions((actions) => actions.setSearchPosts);

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="Navbar">
      <Link to="/">List of Posts</Link>
      <Link to="/newpost">New Post</Link>
      <form
        className="SearchPostsForm"
        style={pathname !== "/" ? { visibility: "hidden" } : null}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          id="searchPosts"
          placeholder="Search by post title or body"
          value={searchPosts}
          onChange={(e) => {
            setSearchPosts(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
export default Navbar;
