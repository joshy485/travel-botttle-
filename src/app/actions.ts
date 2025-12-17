"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const subscribeSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  honeypot: z.string().optional(),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  // Validate honeypot
  if (formData.get("honeypot")) {
    return {
      message: "Thank you for subscribing!",
      success: true
    };
  }

  const validatedFields = subscribeSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] ?? "Invalid input.",
      success: false
    };
  }

  const { email } = validatedFields.data;

  try {
    await addDoc(collection(db, "emailSignups"), {
      email: email,
      signupDate: serverTimestamp(),
      source: "landing-page",
    });

    return {
      message: "Thank you for subscribing! We'll be in touch.",
      success: true,
    };
  } catch (error) {
    console.error("Subscription error:", error);
    // In a real app, you might want to log this to a service like Sentry
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}
