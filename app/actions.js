"use server";

import { supabase } from "@/app/lib/supabase";
import { Resend } from "resend";

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// --- 1. RESERVATION LOGIC (Supabase) ---
export async function submitReservation(formData) {
  const rawData = {
    date: formData.get("date"),
    time: formData.get("time"),
    guests: formData.get("guests"),
    occasion: formData.get("occasion"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  };

  // Basic Validation
  if (!rawData.name || !rawData.email || !rawData.phone || !rawData.date) {
    return { success: false, message: "Missing required fields" };
  }

  // Insert into Supabase
  const { error } = await supabase.from("reservations").insert([
    {
      date: rawData.date,
      time: rawData.time,
      guests: Number(rawData.guests),
      occasion: rawData.occasion,
      name: rawData.name,
      email: rawData.email,
      phone: rawData.phone,
      status: "pending",
    },
  ]);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false, message: "Failed to save booking." };
  }

  return { success: true, message: "Booking confirmed!" };
}

// --- 2. CONTACT FORM LOGIC (Resend) ---
export async function submitContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, message: "Missing fields" };
  }

  try {
    // Send the email using Resend
    const data = await resend.emails.send({
      from: "Shadow Grill Website <onboarding@resend.dev>", // Default testing domain
      to: "onyxdigital26@gmail.com", // ⚠️ REPLACE THIS with your personal email to receive messages
      subject: `New Message from ${name}: ${subject}`,
      text: `
        You received a new message from the Shadow Grill Contact Form.
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return { success: false, message: "Failed to send email." };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Server Error:", error);
    return { success: false, message: "Server error occurred." };
  }
}
