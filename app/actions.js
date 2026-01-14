"use server";

import { supabase } from "@/app/lib/supabase";

export async function submitReservation(formData) {
  const rawData = {
    date: formData.get("date"),
    time: formData.get("time"),
    guests: formData.get("guests"),
    occasion: formData.get("occasion"),
    name: formData.get("name"),
    phone: formData.get("phone"),
  };

  const { error } = await supabase.from("reservations").insert([
    {
      date: rawData.date,
      time: rawData.time,
      guests: Number(rawData.guests),
      occasion: rawData.occasion,
      name: rawData.name,
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
