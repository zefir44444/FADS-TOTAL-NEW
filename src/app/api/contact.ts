import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        const response = await fetch("https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`, // API key from .env
            },
            body: JSON.stringify({
                from: { email: "your-email@example.com", name: "Your Name" }, // Sender
                to: [{ email, name }], // Recipient
                subject: "New Contact Form Submission",
                text: `You have a new message from ${name} (${email}):\n\n${message}`,
                html: `<p><strong>New message from ${name} (${email}):</strong></p><p>${message}</p>`,
            }),
        });

        if (!response.ok) {
            throw new Error(`MailerSend Error: ${response.statusText}`);
        }

        return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
