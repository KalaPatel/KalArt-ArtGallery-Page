import Header from "../header";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
