import { useParams } from "react-router-dom";
import NewnEditForm from "./NewnEditForm";
import NotFound from "./NotFound";
import { useStoreActions, useStoreState } from "easy-peasy";

const EditPost = () => {
  const posts = useStoreState((state) => state.posts);
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  function savePost(postTitle, postBody, postId) {
    const tmpPosts = posts.map((post) => {
      return post.id === postId
        ? {
            id: postId,
            datetime: post.datetime,
            title: postTitle,
            body: postBody,
          }
        : post;
    });
    setPosts(tmpPosts);
  }

  return post ? (
    <NewnEditForm
      postId={post.id}
      postTitle={post.title}
      postBody={post.body}
      newPostChosen={false}
      addOrSavePost={savePost}
    />
  ) : (
    <NotFound />
  );
};

export default EditPost;
