import NewnEditForm from "./NewnEditForm";
import { useStoreActions, useStoreState } from "easy-peasy";

const NewPost = () => {
  const posts = useStoreState((state) => state.posts);
  const setPosts = useStoreActions((actions) => actions.setPosts);
  function addNewPost(postTitle, postBody) {
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const datetime = Date();
    const tmpPosts = [...posts];
    tmpPosts[posts.length] = {
      id: newId,
      datetime: datetime,
      title: postTitle,
      body: postBody,
    };
    setPosts(tmpPosts);
  }

  return (
    <NewnEditForm
      postTitle={""}
      postBody={""}
      newPostChosen={true}
      addOrSavePost={addNewPost}
    />
  );
};
export default NewPost;
