import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./config/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resetpassword from "./pages/ResetPassword";
import ShowApartment from "./pages/ShowApartment";
import NewApartment from "./pages/NewApartment";
import MyApartments from "./pages/MyApartments";
import EditApartment from "./pages/EditApartment";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Apartments from "./pages/Apartments";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/apartments/:id" element={<ShowApartment />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route element={<PrivateRoute />}>
            <Route path="/newapartment" element={<NewApartment />} />
            <Route path="/myapartments" element={<MyApartments />} />
            <Route path="/editapartment/:id" element={<EditApartment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
