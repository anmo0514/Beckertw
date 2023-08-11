import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.js";

//import 路由
import Home from "./pages/home";
import About from "./pages/about";
import Becker from "./pages/becker";
import Cpa from "./pages/cpa";
import Cma from "./pages/cma";
import Share from "./pages/share";
import Faq from "./pages/faq";


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="becker" element={<Becker/>}/>
            <Route path="cpa" element={<Cpa/>}/>
            <Route path="cma" element={<Cma/>}/>
            <Route path="share" element={<Share/>}/>
            <Route path="faq" element={<Faq/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
