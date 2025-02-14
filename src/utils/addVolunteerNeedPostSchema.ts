import { z } from "zod";

export const addVolunteerNeedPostSchema =z.object({
  thumbnail: z.string().url("Invalid URL format."),
  postTitle: z.string().min(5, "Title must be at least 5 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  category: z.enum(["Education", "Social", "Health", "Environment", "Animals", "Others"]),
  location: z.string().min(1, "Location is required"),
  volunteersNeeded: z.number().min(0, { message: "Must be 0 or greater" }),
  deadline: z.string().min(1, "Deadline is required"),
  organizerName: z.string().min(1, "Organizer name is required"),
  organizerEmail: z.string().email("Invalid email address"),
})
