import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRedirect = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 10000); 

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default AuthRedirect;
