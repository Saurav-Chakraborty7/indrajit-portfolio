"use server";

import Pageclip from "pageclip";

export async function sendContactMessage(data: Record<string, any>) {
  const apiKey = process.env.PAGECLIP_API_KEY;
  if (!apiKey) {
    return { success: false, error: "PAGECLIP_API_KEY is not configured in .env.local" };
  }
  
  const pageclip = new Pageclip(apiKey);
  
  try {
    const response = await pageclip.send(data);
    if (response.status === 200) {
      return { success: true, status: response.status, data: response.data };
    } else {
      const errorMsg = response.errors?.[0]?.message || "Failed to send message";
      return { success: false, error: errorMsg };
    }
  } catch (error: any) {
    console.error("Pageclip send error:", error);
    return { success: false, error: error.message || "Failed to send message" };
  }
}
