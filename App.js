import styles from "./App.module.scss";
import classNames from "classnames/bind";
import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';
import Content from "./components/NoiDung/Noidung";
import Footer from "../src/layouts/Footer/Footer";
import { ToastContainer } from "react-toastify";
const cx = classNames.bind(styles);

function App() {


  return (
    <div className={cx("light")}>
      <ToastContainer />
      <Header />
      <div className={cx("light")}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
