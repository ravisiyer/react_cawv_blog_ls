import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div className="App">
      <Header title={"CAP - Blog, w local storage"} />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default SharedLayout;
