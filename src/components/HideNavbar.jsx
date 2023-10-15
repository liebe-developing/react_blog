import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register"|| location.pathname === "/forgot-password") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return showNavbar && children;
};

export default HideNavbar;
