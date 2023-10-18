import axios from "axios";
import { ErrorToast } from "components/UI/Toast/ErrorToast";
import { SuccessToast } from "components/UI/Toast/SuccessToast";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// authention

const AuthContext = createContext({
  signup: () => {},
  login: () => {},
  token: "",
  user: "",
  logout: () => {},
  isLoggedIn: "",
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const tokenInLocalStorage = localStorage.getItem("token");
  const userInLocalStorage = localStorage.getItem("user");
  const [user, setUser] = useState(userInLocalStorage);
  const [token, setToken] = useState(tokenInLocalStorage);
  const IsUserLoggedIn = !!token;
  const signupHandler = async (formDetails) => {
    const { firstName, lastName, password, email } = formDetails;
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        navigate("/login");
        SuccessToast("Signup  Successfully !");
      }
    } catch (error) {
      ErrorToast(`${error.response.data.errors}`);
    }
  };

  const loginHandler = async (formDetails) => {
    const { email, password } = formDetails;
    try {
      const response = await axios.post("/api/auth/login", {
        ...formDetails,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", response.data.foundUser.firstName);
        setToken(response.data.encodedToken);
        setUser(response.data.foundUser.firstName);
        navigate("/");
        SuccessToast(
          `${response.data.foundUser.firstName} Logged In successfully !`
        );
      }
    } catch (error) {}
  };

  const logoutHandler = () => {
    ErrorToast(`${user} Logged Out !`);
    localStorage.clear();
    setToken(null);
    setUser("");
    navigate("/");
  };

  const ctxValue = {
    signup: signupHandler,
    login: loginHandler,
    token: token,
    user: user,
    logout: logoutHandler,
    isLoggedIn: IsUserLoggedIn,
  };
  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
};

const useAuthCtx = () => useContext(AuthContext);

export { useAuthCtx, AuthProvider };
