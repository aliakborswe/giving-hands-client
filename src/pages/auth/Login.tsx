import Wrapper from "../common/Wrapper";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import logo from "@/assets/svg/logo.svg";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .refine(
      (value) => /[A-Z]/.test(value), // Must have at least one uppercase letter
      { message: "Password must contain at least one uppercase letter." }
    )
    .refine(
      (value) => /[a-z]/.test(value), // Must have at least one lowercase letter
      { message: "Password must contain at least one lowercase letter." }
    ),
});

const Login = () => {
  const { login } = useAuth();
  const [isCredentials, setIsCredentials] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const defaultEmail = isCredentials ? "admin@gmail.com" : ""; // Conditional default value
  const from = location.state?.from?.pathname || "/";
  // Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: defaultEmail,
      password: "",
    },
  });

  // handle auth credentials for provide clicking button
  useEffect(() => {
    if (isCredentials) {
      form.setValue("email", "admin@gmail.com");
      form.setValue("password","asd123A")
    }
  }, [isCredentials, form]);
  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values.email, values.password)
      .then(() => {
        toast.success("Login Success!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch(() => {
        toast.error("Email or Password not Matched");
      });
  }

  return (
    <Wrapper>
      <Helmet>
        <title>Giving-Hands | Login</title>
      </Helmet>
      <div className='flex justify-center mb-4'>
        <Link
          to='/'
          className='flex gap-2 items-center justify-start animate-pulse'
        >
          <img src={logo} alt='logo' className='w-12' />
          <p className={` font-bold text-xl`}>Giving-Hands</p>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 '>
        <div className='w-full md:w-1/2'>
          <Button
            onClick={() => setIsCredentials(!isCredentials)}
            className='w-full mb-4'
            variant={"secondary"}
          >
            <span className='text-white animate-bounce'>
              Click here! for Provide Login Credentials
            </span>
          </Button>
          <SocialLogin />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-8 border-t-2 border-primary pt-6'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter Your email'
                        {...field}
                        className='border-foreground'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter password'
                        type='password'
                        {...field}
                        className='border-foreground'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='w-full'>
                Login
              </Button>
            </form>
          </Form>
          <p className='mt-8 text-start text-muted-foreground'>
            Not a member?{" "}
            <Link
              to='/register'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Please register first
            </Link>
          </p>
        </div>
        <DotLottieReact
          src='https://lottie.host/b05cbd0b-a072-4614-88e6-ba08663ae6f8/WLR1nXaiBs.lottie'
          loop
          autoplay
          className='w-full md:w-1/2 aspect-square'
        />
      </div>
    </Wrapper>
  );
};

export default Login;
