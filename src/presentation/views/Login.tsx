import { Form } from "../../shared/components/molecules/Form";
import { toast, ToastContainer } from "react-toastify";
import { FaEye } from "react-icons/fa6";
import { useAuth } from "../../hooks/useAuth.hooks";
import { User } from "../../types";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/Auth/auth.api";

const Login = () => {
  const { setUser } = useAuth();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (data: Record<string, string>) => {
    try {
      const audioElement = audioRef.current;
      const users = await login(data);

      const userFound = users.find(
        (user: User) =>
          user.email === data.email && user.password === data.password,
      );
      if (!userFound) {
        toast("Invalid credentials", { type: "error", position: "top-center" });
        return;
      }
      toast("Login successful", { type: "success", position: "top-center" });
      if (audioElement) {
        audioElement.play();
      }

      userFound.authenticated = true;
      localStorage.setItem("user", JSON.stringify(userFound));

      setTimeout(() => {
        setUser(userFound);
        navigate("/profile-selector");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-[url('/img/jakeflix-login-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute w-full">
        <div className="h-[10rem] w-full overflow-hidden">
          <img src="/img/JAKEFLIX/logo.png" className="ml-10 w-40" alt="" />
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="bg-form flex h-[70%] w-[90%] flex-col items-center justify-between px-10 py-10 text-white sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
            <h1 className="self-baseline text-3xl font-bold">Login</h1>
            <Form
              fields={[
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email",
                  required: true,
                },
                {
                  name: "password",
                  type: "password",
                  placeholder: "Password",
                  required: true,
                  icon: <FaEye />,
                  iconPosition: "right",
                },
              ]}
              initialValues={{
                email: "jakeflix@correo.com",
                password: "Password",
              }}
              mainButtontext="Login"
              hasSecondaryButton={true}
              secondaryButtonText="Uae Login code"
              isLoginForm={true}
              onSubmit={(data) => {
                handleLogin(data);
              }}
              onRegister={() => {
                console.log("register");
              }}
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src="/sound/netflix-sound.mp3"></audio>
      <ToastContainer />
    </div>
  );
};

export default Login;
