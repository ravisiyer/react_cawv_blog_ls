import "./App.css";
import { useEffect } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import SinglePost from "./SinglePost";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import NotFound from "./NotFound";
import { useStoreState } from "easy-peasy";

function App() {
  const posts = useStoreState((state) => state.posts);
  const searchPosts = useStoreState((state) => state.searchPosts);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const displayPosts =
    searchPosts.trim().length === 0
      ? [...posts]
      : posts.filter((post) => {
          return (
            post.title.toLowerCase().includes(searchPosts.toLowerCase()) ||
            post.body.toLowerCase().includes(searchPosts.toLowerCase())
          );
        });
  displayPosts.reverse();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home displayPosts={displayPosts} />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="newpost" element={<NewPost />}></Route>
          <Route path="editpost/:id" element={<EditPost />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
