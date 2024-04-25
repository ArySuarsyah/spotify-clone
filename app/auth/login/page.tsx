import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import Header from "@/app/components/header/LoginHeader";
import LoginForm from "@/app/components/loginForm/LoginForm";
import Link from "next/link";
import Footer from "@/app/components/footer/LoginFooter";

const Login = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#282828] to-[#010101] font-circular py-10 grid justify-center">
        <div className="bg-primary flex flex-col justify-center rounded-lg">
          <div className="w-[45rem] grid justify-center pt-20 text-white">
            <h1 className="font-semibold text-[3rem] mb-14 text-center">
              Log in to Spotify
            </h1>
            <div className="flex flex-col gap-2 font-bold items-center">
              <div className="flex px-[8%] py-3 rounded-full border-[1px] border-slate-600 gap-10 w-80 text-center hover:border-white cursor-pointer">
                <FcGoogle size={25} />
                <h1>Login With Google</h1>
              </div>
              <div className="flex px-[8%] py-3 rounded-full border-[1px] border-slate-600 gap-10 w-80 text-center hover:border-white cursor-pointer">
                <FaFacebook size={25} color="#1877F2" />
                <h1>Login With Faceebook</h1>
              </div>
              <div className="flex px-[8%] py-3 rounded-full border-[1px] border-slate-600 gap-10 w-80 text-center hover:border-white cursor-pointer">
                <FaApple size={25} color="#fff" />
                <h1>Login With Apple</h1>
              </div>
              <div className="flex py-3 rounded-full border-[1px] border-slate-600 w-80 text-center hover:border-white cursor-pointer justify-center">
                <h1 className="text-center">Continue With Phone Number</h1>
              </div>
            </div>
          </div>
          <hr className="my-7 w-9/12 self-center border-[#1E293B]" />
          <LoginForm />
          <Link
            href={"#"}
            className="m-5 text-center font-semibold text-white underline underline-offset-2 hover:text-[#1AD760]"
          >
            Forgot your password
          </Link>
          <hr className="my-7 w-9/12 self-center border-[#1E293B]" />
          <span className="text-center pb-10">
            Don&rsquo;t have an account{" "}
            <Link
              href={"#"}
              className="text-white underline underline-offset-2 hover:text-[#1AD760] font-semibold"
            >
              Sign up for Spotify
            </Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
