import { NextRequest, NextResponse } from "next/server";
import { saveFormToHubSpot } from "@/lib/hubspot";

export async function POST(req: NextRequest) {
  try {
    console.log("Contact form submission received");
    
    // Get data from request
    const { firstName, lastName, email, phone, subject, message, source = "website" } = await req.json();

    // Combine firstName and lastName for backward compatibility
    const name = `${firstName} ${lastName}`.trim();

    // Check required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      console.warn("Missing required fields in contact form submission");
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn(`Invalid email format: ${email}`);
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    console.log(`Processing contact form submission for: ${email}`);

    // Логируем данные формы
    console.log("Form data received:", {
      firstName,
      lastName,
      name,
      email,
      phone,
      subject,
      message,
      source,
      date: new Date().toISOString()
    });
    
    // Сохраняем данные в HubSpot
    const hubspotResult = await saveFormToHubSpot('contact', {
      firstName,
      lastName,
      email,
      phone,
      message,
      subject
    });

    console.log(`HubSpot result for ${email}:`, hubspotResult);
    
    // Возвращаем успешный ответ
    console.log(`Contact form processed successfully for: ${email}`);
    return NextResponse.json({ 
      success: true,
      message: "Your message has been received. Thank you for contacting us!",
      hubspot: hubspotResult.success
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}