/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router";
import Wrapper from "../common/Wrapper";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const applicationSchema = z.object({
  organizerName: z.string().min(1, "Organizer name is required"),
  organizerEmail: z.string().email("Invalid email address"),
  suggestion: z.string().min(1, "Suggestion is required"),
  requestStatus: z.enum(["requested", "approved", "rejected"]),
});



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
      organizerName: user?.displayName || "",
      organizerEmail: user?.email || "",
    },
  });

  useEffect(() => {
    if (user) {
      if (user.displayName && user.email) {
        form.setValue("organizerName", user.displayName);
        form.setValue("organizerEmail", user.email);
      }
    }
  }, [user]);

  // Define a submit handler.
  function onSubmit(data: z.infer<typeof applicationSchema>) {
    setIsSubmitting(true);

    try{
      axiosSecure
        .post("/application", { id, ...data })
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