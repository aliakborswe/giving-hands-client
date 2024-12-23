import useAuth from "@/hooks/useAuth";
import Wrapper from "../common/Wrapper";
import { useContext, useState } from "react";
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

const AddVolunteerNeedPost = () => {
    const { user } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form.
  const form = useForm<z.infer<typeof addVolunteerNeedPostSchema>>({
    resolver: zodResolver(addVolunteerNeedPostSchema),
    defaultValues: {
      thumbnail: "",
      postTitle: "",
      description: "",
      category: "Social",
      location: "",
      volunteersNeeded: 1,
      deadline: "",
      organizerName: user?.displayName || "",
      organizerEmail: user?.email || "",
    },
  });

  // Define a submit handler.
 function onSubmit(data: z.infer<typeof addVolunteerNeedPostSchema>) {
    console.log(data)
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
                    min={1}
                    max={300}
                    placeholder='Enter volunteers Needed'
                    {...field}
                    className='border-foreground'
                    //   onChange={(e) => field.onChange(Number(e.target.value))}
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
                    {...field}
                    className='border-foreground'
                    placeholder='yy-mm-dd'
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
            {isSubmitting ? "Submitting..." : "Submit Post"}
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
};

export default AddVolunteerNeedPost;
