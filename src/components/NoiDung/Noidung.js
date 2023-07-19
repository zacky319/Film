import { Route, Routes } from "react-router-dom";
import Movie from "../../layouts/Movie/Movie";
import Contact from "../../layouts/Contact/Contact";
import Add from "../../layouts/Add/Add";
import Home from "../../layouts/Home/Home";

import About from "../../layouts/About/About";

export default function Noidung() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
}