import { useStoreState } from "easy-peasy";

const Footer = () => {
  const countPosts = useStoreState((state) => state.countPosts);
  return (
    <footer>
      {countPosts} blog
      {countPosts === 1 ? ` post` : ` posts`}
    </footer>
  );
};

export default Footer;
