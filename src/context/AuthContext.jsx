import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => setUser(res.dta.user))
        .catch(() => logout())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // const login = async (credentials) => {
  //   try {
  //     const res = await API.post("/auth/login", credentials);
  //     localStorage.setItem("token", res.data.token);
  //     console.log(res.data.token)
  //     setUser(res.data.user);
  //     toast.success("Login Successful");
  //     navigate(res.data.user.userType === "ADMIN" ? "/admin" : "/dashboard");
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Login Failed");
  //   }
  // };
const login = async (credentials) => {
  try {
    const res = await API.post("/auth/login", credentials);

    const token = res.data.token;
    const user = res.data.user;

    localStorage.setItem("token", token);
    setUser(user);

    toast.success("Login Successful");

    // Redirect based on userType
    if (user.userType === "SUPER_ADMIN") {
      navigate("/super-admin");
    } else if (user.userType === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/dashboard"); // STUDENT
    }

  } catch (error) {
    toast.error(error.response?.data?.message || "Login Failed");
  }
};
const loginSuperAdmin = async (credentials) => {
  try {
    const res = await API.post("/auth/login", credentials);

    const token = res.data.token;
    const user = res.data.user;

    localStorage.setItem("token", token);
    setUser(user);

    toast.success("Login Successful");

    // Redirect based on userType
    if (user.userType === "SUPER_ADMIN") {
      navigate("/super-admin");
    } else if (user.userType === "ADMIN") {
      toast.success("Login For Only Super Admin");
    } else {
      toast.success("Login For Only Super Admin");
    }

  } catch (error) {
    toast.error(error.response?.data?.message || "Login Failed");
  }
};
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, loginSuperAdmin ,logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

