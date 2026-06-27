import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const demoUser = {
  name: "Shruti Patil",
  role: "Progressive Farmer",
  phone: "+91 98765 43210",
  location: "Nashik, Maharashtra",
  farmSize: "12 acres",
  currentCrop: "Soybean",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("smart-farmer-user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (values) => {
    const nextUser = {
      ...demoUser,
      email: values.email,
    };
    localStorage.setItem("smart-farmer-user", JSON.stringify(nextUser));
    localStorage.setItem("smart-farmer-token", "mock-auth-token");
    setUser(nextUser);
  };

  const logout = () => {
    localStorage.removeItem("smart-farmer-user");
    localStorage.removeItem("smart-farmer-token");
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      register: login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
