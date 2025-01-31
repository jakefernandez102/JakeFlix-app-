import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../../App";
import Login from "../../modules/ui/pages/Login/Login";
import Home from "../../modules/ui/pages/Home/Home";
import { useAuth } from "../hooks/useAuth";
import { HeaderLayout } from "../layouts/HeaderLayout";
import { Register } from "../../modules/ui/pages/Register/Register";
import { ProfileSelector } from "../../modules/ui";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  return user?.authenticated ? children : <Navigate to="/auth/login" />;
}

export default function Router() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />} />
        <Route
          path="/auth/login"
          element={
            !user?.authenticated ? (
              <Login />
            ) : (
              <Navigate to="/profile-selector" />
            )
          }
        />
        <Route path="/auth/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={<PrivateRoute>{<HeaderLayout />}</PrivateRoute>}
        >
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/profile-selector"
          element={
            <PrivateRoute>
              <ProfileSelector />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
