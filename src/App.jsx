import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import Loader from "./utils/Loader";
import { Toaster } from "react-hot-toast";
import NavigationDashboard from "./components/common/NavigationDashboard";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Scholarship from "./pages/Scholarship";
import ScholarshipDetails from "./components/common/ScholarshipDetails";
import About from "./pages/About";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import PrizeList from "./components/prizes/PrizeList";
import PrizeLists from './components/common/PrizeList'

import VideoSliding from "./pages/VideoSliding";
import TopCandidateList from "./pages/TopCandidateList";
import GetMemberShipCard from "./pages/GetMemberShipCard";

import EliteMentorship from "./pages/EliteMentorship";
import ExclusiveScholarships from "./pages/ExclusiveScholarships";
import OneByOneCoaching from "./pages/OneByOneCoaching";
import FreeMedicalTreatment from "./pages/FreeMedicalTreatment";
import JobFacilities from "./pages/JobFacilities";
import FreeOnlineTuition from "./pages/FreeOnlineTuition";
import FreeSpokenEnglish from "./pages/FreeSpokenEnglish";
import FreeOnlineITClasses from "./pages/FreeOnlineITClasses";
import FreeCareerCounseling from "./pages/FreeCareerCounseling";
import LegalSupport from "./pages/LegalSupport";
import MotivationalAndInspiringClasses from "./pages/MotivationalAndInspiringClasses";
import GetCompetitionExam from "./pages/GetCompetitionExam"
import ScholarshipCupFlow from "./components/common/ScholarshipCupFlow";
import DemoQuestions from "./pages/DemoQuestions";
import WelcomePopup from "./components/common/WelcomePopup";
import Questions from "./pages/Question";
import QuestionPopUp from "./components/common/QuestionPopUp";
const Home = lazy(() => import("./pages/Home"));

const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const ForgotPassword = lazy(() => import("./components/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/auth/ResetPassword"));
const ConfirmOtp = lazy(() => import("./components/auth/ConfirmOtp"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const UserDashboard = lazy(() => import("./pages/user/UserDashboard"));



const AppContent = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // Get current route

  const hideNavbarRoutes = ["/login", "/register", "/forgot-password", "/reset-password", "/confirm-otp"];
  
  const shouldHideFooter = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <Toaster />
      {!user && !hideNavbarRoutes.includes(location.pathname) ? <Navbar /> : user && <NavigationDashboard />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-otp" element={<ConfirmOtp />} />

          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarship/:id" element={<ScholarshipDetails />} />

          <Route path="/about" element={<About />} />

          
         

          <Route path="/events" element={<Events />} />

          <Route path="/contact" element={<ContactUs />} />
          
          <Route path="/prize-list" element={<PrizeList/>} />
                    <Route path="/PrizeLists" element={<PrizeLists/>} />


          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/videosliding" element={<VideoSliding />} />
          {/* <Route path="/PrizeListCompetitionExam" element={<PrizeListCompetitionExam />} /> */}
          <Route path="/ScholarshipCupFlow" element={<ScholarshipCupFlow />} />
          <Route path="/WelcomePopup" element={<WelcomePopup />} />
          <Route path="/QuestionPopUp" element={<QuestionPopUp />} />

          

          <Route path="/GetMemberShipCard" element={<GetMemberShipCard />} />
                    <Route path="/GetCompetitionExam" element={<GetCompetitionExam />} />
                    <Route path="/DemoQuestions" element={<DemoQuestions/>} />
                    <Route path="/Questions" element={<Questions/>} />



          <Route path="/topcandidatelist" element={<TopCandidateList />} />
          <Route path="/elitementorship" element={<EliteMentorship />} />
          <Route path="/exclusivescholarships" element={<ExclusiveScholarships />} />
          <Route path="/onebyonecoaching" element={<OneByOneCoaching />} />
          <Route path="/freemedicaltreatment" element={<FreeMedicalTreatment />} />
          <Route path="/jobfacilities" element={<JobFacilities />} />
          <Route path="/freeonlinetuition" element={<FreeOnlineTuition />} />
          <Route path="/freespokenenglish" element={<FreeSpokenEnglish />} />
          <Route path="/freeonlineitclasses" element={<FreeOnlineITClasses />} />
          <Route path="/freecareercounseling" element={<FreeCareerCounseling />} />
          <Route path="/legalsupport" element={<LegalSupport />} />
          <Route path="/motivationalandinspiringclasses" element={<MotivationalAndInspiringClasses />} />


        </Routes>
      </Suspense>

      {!shouldHideFooter && <Footer />} 
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;
