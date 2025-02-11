/* eslint-disable react-hooks/exhaustive-deps */
import useAuth from "@/hooks/useAuth";
import Wrapper from "../common/Wrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addVolunteerNeedPostSchema } from "@/utils/addVolunteerNeedPostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateVolunteerNeedPost = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // For the date range
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  // Define form.
  const form = useForm<z.infer<typeof addVolunteerNeedPostSchema>>({
    resolver: zodResolver(addVolunteerNeedPostSchema),
    defaultValues: {
      thumbnail: "",
      postTitle: "",
      description: "",
      category: "Social",
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
        form.setValue("organizerName", user.displayName);
        form.setValue("organizerEmail", user.email);
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
  function onSubmit(data: z.infer<typeof addVolunteerNeedPostSchema>) {
    setIsSubmitting(true);
    try {
      const newPostData = {
        ...data,
      };
      axiosSecure
        .put(`/posts?id=${id}`, newPostData)
        .then(() => {
          toast.success("Post Updated successfully");
          form.reset();
          setIsSubmitting(false);
          navigate("/myPosts");
        })
        .catch((err) => {
          toast.error(err.message);
          setIsSubmitting(false);
        });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Format deadline value
  const formattedDeadline =
    dateRange.from && dateRange.to
      ? `${format(dateRange.from, "yyyy-MM-dd")} to ${format(
          dateRange.to,
          "yyyy-MM-dd"
        )}`
      : "Select a deadline range";

  //   Update deadline in the form whenever the date range changes
  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      const deadlineValue = `${format(
        dateRange.from,
        "yyyy-MM-dd"
      )} to ${format(dateRange.to, "yyyy-MM-dd")}`;
      form.setValue("deadline", deadlineValue);
    }
  }, [dateRange, form]);

  //   Handle date range selection
  const handleDateRangeSelect = (range: DateRange | undefined) => {
    if (range) {
      setDateRange({
        from: range.from || undefined,
        to: range.to || undefined,
      });
    }
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Giving-Hands | Update Volunteer Need Post</title>
      </Helmet>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 max-w-2xl mx-auto p-4'
        >
          <FormField
            control={form.control}
            name='thumbnail'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder='https://example.com/game-cover.jpg'
                    {...field}
                    className='border-foreground'
                  />
                </FormControl>
                <FormDescription>
                  Enter the URL of the Thumbnail image.
                </FormDescription>
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
                  <Input
                    placeholder='Enter Post title'
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
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Need Volunteer Description</FormLabel>
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
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='border-foreground'>
                      <SelectValue placeholder='Select a category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      "Education",
                      "Social",
                      "Health",
                      "Environment",
                      "Animals",
                      "Others",
                    ].map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                    min={0}
                    placeholder='Enter volunteers Needed'
                    {...field}
                    className='border-foreground'
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date Range Picker */}
          <FormField
            control={form.control}
            name='deadline'
            render={() => (
              <FormItem>
                <FormLabel>Deadline</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant='outline'
                        className='w-full justify-between border-foreground'
                      >
                        {formattedDeadline}
                        <CalendarIcon className='ml-2 h-4 w-4' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align='start' className='w-auto p-0'>
                    <Calendar
                      mode='range'
                      selected={dateRange}
                      onSelect={handleDateRangeSelect}
                      numberOfMonths={2}
                      className='p-2'
                    />
                  </PopoverContent>
                </Popover>
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
            {isSubmitting ? "Submitting..." : "Submit Post"}
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
};

export default UpdateVolunteerNeedPost;
