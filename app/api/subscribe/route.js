import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, subscribed } = data;

    // ✅ Gmail SMTP setup (fixed TLS config)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER, // your Gmail or business email
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
      tls: {
        rejectUnauthorized: false, // ✅ Fix for self-signed certificate error
      },
    });

    // ✅ Email content
    const subject = "Stay Connected. Stay Informed.";
    const action = subscribed ? "Subscription" : "Unsubscription";

    const text = `
${action} Notification

Email: ${email}
Status: ${subscribed ? "Subscribed to newsletter" : "Unsubscribed from newsletter"}

-------------------------
This message was sent automatically from DigiHire's Stay Connected form.
`;

    // ✅ Send the email
    await transporter.sendMail({
      from: `"DigiHire Newsletter" <${process.env.SMTP_USER}>`,
      to: "hr@digihireai.com",
      subject,
      text,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: subscribed
          ? "Subscription email sent successfully!"
          : "Unsubscription email sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send subscription email",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
