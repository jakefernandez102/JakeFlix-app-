import { useEffect, useState } from "react";
import { useAuth } from "./shared/hooks/useAuth";
import LogoAnimation from "./modules/ui/components/animation/LogoAnimation";
import { useNavigate } from "react-router-dom";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogoAnimation(false);
      if (user?.authenticated) {
        navigate("/profile-selector");
      } else {
        navigate("/auth/login");
      }
    }, 6000);
  }, [user?.authenticated, navigate]);

  return (
    <>
      <div>{showLogoAnimation ? <LogoAnimation /> : null}</div>
    </>
  );
}

export default App;
