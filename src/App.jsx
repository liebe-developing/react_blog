import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { Home } from "./pages";

export default function App() {
  return <Routes>
    <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    </Route>
  </Routes>;
}
