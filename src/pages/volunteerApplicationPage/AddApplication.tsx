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
import { applicationSchema } from "@/utils/applicationSchema";


const AddApplication = () => {
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
      volunteerEmail: user?.email || "",
      thumbnail: "",
      postTitle: "",
      description: "",
      category: " ",
      location: "",
      volunteersNeeded: 0,
      deadline: " ",
      organizerName: user?.displayName || "",
      organizerEmail: user?.email || "",
    },
  });

  useEffect(() => {
    // initially set default value in form
    if (user) {
      if (user.displayName && user.email) {
        form.setValue("volunteerName", user.displayName);
        form.setValue("volunteerEmail", user.email);
      }
    }
    // load post form server and set default value in form
    const fetchPost = async () => {
      try {
        const response = await axiosSecure.get(`/posts/${id}`);
        const postData = response.data;
        form.setValue("thumbnail", postData.thumbnail);
        form.setValue("postTitle", postData.postTitle);
        form.setValue("description", postData.description);
        form.setValue("category", postData.category);
        form.setValue("location", postData.location);
        form.setValue("volunteersNeeded", postData.volunteersNeeded);
        form.setValue("deadline", postData.deadline);
        form.setValue("organizerName", postData.organizerName);
        form.setValue("organizerEmail", postData.organizerEmail);
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    fetchPost();
  }, [user]);

  // Define a submit handler.
  function onSubmit(data: z.infer<typeof applicationSchema>) {
    setIsSubmitting(true);

    try {
      const applicationData = {
        id,
        volunteerEmail:data.volunteerEmail,
        volunteerName:data.volunteerName,
        suggestion:data.suggestion,
        requestStatus:data.requestStatus,
      };
      axiosSecure
        .post("/applications", applicationData)
        .then(() => {
          toast.success("Application added successfully");
          form.reset();
          navigate("/");
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
        <title>Giving-Hands | Volunteer Application</title>
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
                <FormLabel>Status</FormLabel>
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
          {/* volunteer need post form value */}
          <FormField
            control={form.control}
            name='thumbnail'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail URL</FormLabel>
                <FormControl>
                  <Input {...field} className='border-foreground' disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='postTitle'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Title</FormLabel>
                <FormControl>
                  <Input {...field} className='border-foreground' disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Need Volunteer Description</FormLabel>
                <FormControl>
                  <Textarea {...field} className='border-foreground' disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter location'
                    {...field}
                    className='border-foreground'
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter location'
                    {...field}
                    className='border-foreground'
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='volunteersNeeded'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Volunteers Needed</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    {...field}
                    className='border-foreground'
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='deadline'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deadline</FormLabel>
                <FormControl>
                  <Input
                    type='string'
                    {...field}
                    className='border-foreground'
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='organizerName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organizer Name</FormLabel>
                <FormControl>
                  <Input {...field} className='border-foreground' disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='organizerEmail'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organizer Email</FormLabel>
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

export default AddApplication;
