import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div className="App">
      <Header
        title={process.env.REACT_APP_HEADER_CAPTION || "React Blog Local Storage"}
      />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default SharedLayout;
