import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email)
      return new Response(JSON.stringify({ error: "Missing email" }), {
        status: 400,
      });

    // ✅ Gmail SMTP setup with secure TLS fix
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ✅ Fix self-signed certificate issue
      },
    });

    // ✅ Mail content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "hr@digihireai.com",
      subject: "Stay Ahead in the Future of Hiring",
      text: `A new user has subscribed to the newsletter.\n\nEmail: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
    });
  }
}
