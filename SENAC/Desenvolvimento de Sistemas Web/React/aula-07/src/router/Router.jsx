/* Router DOM */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Error } from "../pages/error/Error";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Error title="Page Not Found" code="404" />}/>
      </Routes>
    </BrowserRouter>
  );
}