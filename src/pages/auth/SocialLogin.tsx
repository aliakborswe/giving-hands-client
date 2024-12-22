import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import googleIcon from "@/assets/svg/google.svg";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlePopup = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Success to login");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <Button
      onClick={handlePopup}
      className='flex items-center gap-2 w-full mb-4'
    >
      <img src={googleIcon} alt='google' className='w-6' />
      <p>Sign With Google</p>
    </Button>
  );
};

export default SocialLogin;
