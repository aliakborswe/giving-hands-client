import { z } from "zod";
export const applicationSchema = z.object({
  volunteerName: z.string().min(1, "Organizer name is required"),
  volunteerEmail: z.string().email("Invalid email address"),
  suggestion: z.string().min(1, "Suggestion is required"),
  requestStatus: z.enum(["requested", "approved", "rejected"]),
  thumbnail: z.string().url("Invalid URL format."),
  postTitle: z.string().min(5, "Title must be at least 5 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  category: z.string(),
  location: z.string().min(1, "Location is required"),
  volunteersNeeded: z.number().min(0, { message: "Must be 0 or greater" }),
  deadline: z.string().min(1, "Deadline is required"),
  organizerName: z.string().min(1, "Organizer name is required"),
  organizerEmail: z.string().email("Invalid email address"),
});