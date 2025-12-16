"use server";

import { z } from "zod";
// I will assume firebase config exists, but won't create it as it contains secrets.
// import { db } from "@/lib/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
    // ---- Firebase Integration ----
    // This is where you would add the logic to save to Firebase.
    // Example using Firestore:
    //
    // await addDoc(collection(db, "subscribers"), {
    //   email: email,
    //   subscribedAt: serverTimestamp(),
    // });
    //
    // Since I can't configure Firebase, I'll simulate a successful submission.
    console.log(`New subscription from: ${email}`);

    return {
      message: "Thank you for subscribing! We'll be in touch.",
      success: true,
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}
