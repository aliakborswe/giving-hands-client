/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router";
import Wrapper from "../common/Wrapper";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const applicationSchema = z.object({
  volunteerName: z.string().min(1, "Organizer name is required"),
  volunteerEmail: z.string().email("Invalid email address"),
  suggestion: z.string().min(1, "Suggestion is required"),
  requestStatus: z.enum(["requested", "approved", "rejected"]),
});


const UpdateApplication = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Define form.
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      suggestion: "",
      requestStatus: "requested",
      volunteerName: user?.displayName || "",
      volunteerEmail: user?.email || ""
    },
  });

  useEffect(() => {
    if (user) {
      if (user.displayName && user.email) {
        form.setValue("volunteerName", user.displayName);
        form.setValue("volunteerEmail", user.email);
      }
    }

    // load application by id for setting default values
    const fetchApplication = async () => {
      try {
        const response = await axiosSecure.get(`/applications/${id}`);
        const applicationData = response.data;
        form.setValue("suggestion", applicationData.suggestion);
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    fetchApplication();
  }, [user]);



  // Define a submit handler.
  function onSubmit(data: z.infer<typeof applicationSchema>) {
    setIsSubmitting(true);

    try {
      const applicationData = {
        suggestion:data.suggestion,
      };
      axiosSecure
        .put(`/applications?id=${id}`, applicationData)
        .then(() => {
          toast.success("Application updated successfully");
          form.reset();
          navigate("/myPosts");
        })
        .catch(() => {
          toast.error("Application already exists");
        });
    } catch (error: any) {
      toast.error(error.message);
    }

    setIsSubmitting(false);
  }

  return (
    <Wrapper>
      <Helmet>
        <title>Giving-Hands | Update Volunteer Application</title>
      </Helmet>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 max-w-2xl mx-auto p-4'
        >
          <FormField
            control={form.control}
            name='suggestion'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Give Suggestion</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Write your description here (minimum 10 characters)'
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
            name='requestStatus'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Request Status</FormLabel>
                <FormControl>
                  <Input {...field} className='border-foreground' disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='volunteerName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Volunteer Name</FormLabel>
                <FormControl>
                  <Input {...field} className='border-foreground' disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='volunteerEmail'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Volunteer Email</FormLabel>
                <FormControl>
                  <Input {...field} className='border-foreground' disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Form Submit Button is here */}
          <Button type='submit' disabled={isSubmitting} className='w-full'>
            {isSubmitting ? "Requesting..." : "Request"}
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
};
export default UpdateApplication;
