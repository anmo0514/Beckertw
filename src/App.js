import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout.js";
import Admlayout from "./components/admlayout.js";
import { AuthProvider } from "./pages/login/AuthProvider";

// 前台路由
import Home from "./pages/home";
import Newdetail from "./pages/home/newdetail";
import Origin from "./pages/about/origin";
import Glory from "./pages/about/glory";
import Duty from "./pages/about/duty";
import Becker from "./pages/becker";
import Cpa from "./pages/cpa";
import Cma from "./pages/cma";
import Registration from "./pages/registration";
import Plan from "./pages/registration/plan";
import Payinfo from "./pages/registration/payinfo";
import Pay from "./pages/registration/pay";
import Success from "./pages/registration/success";
import Share from "./pages/share";
import Detail from "./pages/share/detail";
import Service from "./pages/service";
import Video from "./pages/video";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import Consult from "./pages/consult";
import Form from "./pages/consult/form";
import Audition from "./pages/audition";
import Member from "./pages/member";
import Memarea from "./pages/member/memarea";
import Memberlogin from "./pages/member/memberlogin";

//後台路由
import AdmH from "./pages/admh";
import AdmStaff from "./pages/admstaff";
import AdmTeacher from "./pages/admteacher";
import AdmMember from "./pages/admmember";
import AdmQa from "./pages/admqa";
import AdmCrm from "./pages/admcrm";
import AdmProduct from "./pages/admproduct";
import AdmDiscount from "./pages/admdiscount";
import AdmPartner from "./pages/admpartner";
import AdmMemberView from "./pages/admmemberview";
import AdmReport from "./pages/admreport";
import AdmLogin from "./pages/admlogin";
import AdmNews from "./pages/admnews";
import AdmVideo from "./pages/admvideo";
import AdmShare from "./pages/admshare";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              {/* 在所有以 "/adm" 開頭的路由使用 Admlayout */}
              <Route
                path="/adm/*"
                element={
                  <Admlayout>
                    <Routes>
                      <Route index element={<Navigate to="/adm" />} />
                      <Route path="admh" element={<AdmH />} />
                      <Route path="admlogin" element={<AdmLogin />} />
                      <Route path="admstaff" element={<AdmStaff />} />
                      <Route path="admteacher" element={<AdmTeacher />} />
                      <Route path="admmember" element={<AdmMember />} />
                      <Route path="admcrm" element={<AdmCrm />} />
                      <Route path="admqa" element={<AdmQa />} />
                      <Route path="admproduct" element={<AdmProduct />} />
                      <Route path="admdiscount" element={<AdmDiscount />} />
                      <Route path="admpartner" element={<AdmPartner />} />
                      <Route path="admmemberview" element={<AdmMemberView />} />
                      <Route path="admreport" element={<AdmReport />} />
                      <Route path="admnews" element={<AdmNews />} />
                      <Route path="admvideo" element={<AdmVideo />} />
                      <Route path="admShare" element={<AdmShare />} />
                      {/* 在這裡添加其他管理員路由 */}
                    </Routes>
                  </Admlayout>
                }
              />
              {/* 在所有其他路由使用 Layout */}
              <Route
                path="/*"
                element={
                  <Layout>
                    <Routes>
                      <Route index element={<Home />} />
                      <Route path="/home/newdetail/:new_id" element={<Newdetail />}/>
                      <Route path="/about/*">
                        <Route index element={<Navigate to="/about/origin" />} />
                        <Route path="origin" element={<Origin />} />
                        <Route path="glory" element={<Glory />} />
                        <Route path="duty" element={<Duty />} />
                      </Route>
                      <Route path="/becker" element={<Becker />} />
                      <Route path="/cpa" element={<Cpa />}/>
                      <Route path="/cma" element={<Cma />} />
                      <Route path="/registration" element={<Registration />} />
                      <Route path="/registration/plan" element={<Plan />} />
                      <Route path="/registration/payinfo" element={<Payinfo />} />
                      <Route path="/registration/pay" element={<Pay />} />
                      <Route path="/registration/success" element={<Success />} />
                      <Route path="/service" element={<Service />} />
                      <Route path="/share" element={<Share />} />
                      <Route path="/share/detail/:artId" element={<Detail />} />
                      <Route path="/video" element={<Video />} />
                      <Route path="/faq" element={<Faq />} />
                      <Route path="/audition" element={<Audition />} />
                      <Route path="/consult" element={<Consult />} />
                      <Route path="/consult/form" element={<Form />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/member" element={<Member />} />
                      <Route path="/member/memarea" element={<Memarea />} />
                      <Route path="/member/memberlogin" element={<Memberlogin />} />
                    </Routes>
                  </Layout>
                }
              />
            </Routes>
        </AuthProvider>  
      </BrowserRouter>
    </>
  );
}

export default App;