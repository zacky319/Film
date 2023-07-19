import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Login2 from "../login2/index";
import logo from "../Logo/LOGO.svg";
import { Icon } from "react-materialize";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import Menu, { MenuItem } from "../../components/Menu";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";


const cx = classNames.bind(styles);

export default function Header() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState(localStorage.getItem("DarkMode"));

  const toan = localStorage.getItem("DarkMode");

  useEffect(() => {}, [mode, loading]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className={toan ? cx(toan) : cx("light")}>
      
      <Menu>
        <div className={cx("inner")}>
         

          <div className={cx("active")}>
            <MenuItem
              title="Home"
              to="/"
              icon={<Icon>home</Icon>}
              activeIcon={<Icon>home</Icon>}
            ></MenuItem>
            <MenuItem
              title="Movie"
              to="/Movie"
              icon={<Icon>dvr</Icon>}
              activeIcon={<Icon>dvr</Icon>}
            ></MenuItem>
            <MenuItem
              title="contacts"
              to="/Contact"
              icon={<Icon>contacts</Icon>}
              activeIcon={<Icon>contacts</Icon>}
            ></MenuItem>{" "}
            <MenuItem
              title="About"
              to="/about"
              icon={<Icon>info_outline</Icon>}
              activeIcon={<Icon>info_outline</Icon>}
            ></MenuItem>
            {data ? (
              <MenuItem
                title="add"
                to="/Add"
                icon={<NoteAddIcon />}
                activeIcon={<NoteAddIcon />}
              ></MenuItem>
            ) : (
              <></>
            )}
          </div>

          
          <div className="toans">
            <Button  variant="contained"
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
                localStorage.setItem(
                  "DarkMode",
                  toan === "dark" ? "light" : "dark"
                );
              }}
            >
              {toan ? <>{toan}</> : <>light</>}
            </Button>
          </div><div className={cx("search-result")}>
            <Login2
              data={data}
              setData={setData}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
        </div>
      </Menu>
    </header>
  );
}
