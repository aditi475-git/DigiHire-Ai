import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { fullName, company, email, phone, inquiryType, message } = data;

    if (!fullName || !email || !inquiryType) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // ✅ Gmail SMTP transporter setup with self-signed cert fix
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // 🔧 Fixes "self-signed certificate in certificate chain"
      },
    });

    // ✅ Email message details
    const mailOptions = {
      from: `"DigiHire Contact Form" <${process.env.SMTP_USER}>`,
      to: "hr@digihireai.com",
      subject: `This is an inquiry: ${inquiryType || "General"}`,
      text: `
You have received a new inquiry from the DigiHire contact form.

Full Name: ${fullName}
Company / Organization: ${company || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Inquiry Type: ${inquiryType || "N/A"}

Message:
${message || "N/A"}

----------------------
This email was sent automatically from the DigiHire contact form.
      `,
    };

    // ✅ Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "✅ Thank you for reaching out — our team will connect with you shortly!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
