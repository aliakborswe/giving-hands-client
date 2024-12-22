import Wrapper from "@/pages/common/Wrapper";
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
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";
import { formSchema } from "@/utils/authFromSchema";

const Register = () => {
  // Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      photoURL: "",
      password: "",
    },
  });

  return (
    <div>
      <Wrapper className='flex flex-col md:flex-row items-center justify-between gap-4 '>
        <div className='w-full md:w-1/2'>
          <Form {...form}>
            <form className='space-y-8 border-t-2 border-primary pt-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter Your Name'
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
                name='photoURL'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photo URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter Your Photo url'
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

              <Button type='submit' className='w-full text-white'>
                Submit
              </Button>
            </form>
          </Form>
          <p className='mt-8 text-start text-muted-foreground'>
            Have an account?{" "}
            <Link
              to='/login'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Please Login
            </Link>
          </p>
        </div>
        <DotLottieReact
          src='https://lottie.host/297c1a07-a0bb-4c42-a1a3-16a67e20a863/jY4y2I5TLz.lottie'
          loop
          autoplay
          className='w-full md:w-1/2 aspect-square'
        />
      </Wrapper>
    </div>
  );
};

export default Register;
