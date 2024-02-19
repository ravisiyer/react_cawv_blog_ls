import { createStore, action, computed } from "easy-peasy";

const store = createStore({
  posts: JSON.parse(localStorage.getItem("posts")) || [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),
  searchPosts: "",
  setSearchPosts: action((state, payload) => {
    state.searchPosts = payload;
  }),
  countPosts: computed((state) => state.posts.length),
});

export default store;
