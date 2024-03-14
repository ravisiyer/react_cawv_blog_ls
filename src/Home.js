import { useRef, useEffect } from "react";
import PostsList from "./PostsList";

const Home = ({ displayPosts }) => {
  const homePageDiv = useRef();
  useEffect(() => {
    if (homePageDiv.current !== undefined) {
      const sharedLayoutMainDiv = homePageDiv.current.parentElement;
      if (sharedLayoutMainDiv !== undefined) {
        sharedLayoutMainDiv.scrollTo({
          top: 0,
        });
      }
    }
  }, []);

  return (
    <div ref={homePageDiv} className="posts-list">
      <PostsList displayPosts={displayPosts} />
    </div>
  );
};
export default Home;
