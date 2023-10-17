import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { ForgotPassword, Home, Login, Profile, Register } from "./pages";
import { PrivateRoute } from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
