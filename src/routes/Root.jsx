import { Outlet } from "react-router-dom";
import Nav from "../components/sharedItems/Nav";

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      {/* footer */}
    </div>
  );
};

export default Root;
