import { Outlet } from "react-router-dom";
import Nav from "../components/sharedItems/Nav";
import Footer from "../components/sharedItems/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-[calc(100vh-352px)] ">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
