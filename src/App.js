import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.js";

//import 路由
import Home from "./pages/home";
import Origin from "./pages/about/origin";
import Glory from "./pages/about/glory";
import Duty from "./pages/about/duty";
import Becker from "./pages/becker";
import Cpa from "./pages/cpa";
import Cma from "./pages/cma";
import Share from "./pages/share";
import Service from "./pages/service";
import Video from "./pages/video";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import Consult from "./pages/consult";
import Audition from "./pages/audition";
import Member from "./pages/member";


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes path="/">
            <Route index element={<Home/>}/>
            <Route path="about">
              <Route path="origin" element={<Origin/>}/>
              <Route path="glory" element={<Glory/>}/>
              <Route path="duty" element={<Duty/>}/>
            </Route>
            <Route path="becker" element={<Becker/>}/>
            <Route path="cpa" element={<Cpa/>}/>
            <Route path="cma" element={<Cma/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="share" element={<Share/>}/>
            <Route path="video" element={<Video/>}/>
            <Route path="faq" element={<Faq/>}/>
            <Route path="audition" element={<Audition/>}/>
            <Route path="consult" element={<Consult/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="member" element={<Member/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
