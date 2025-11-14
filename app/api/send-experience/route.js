import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, company, designation, experience } = await req.json();

    // Create transporter using your SMTP env variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,     // ⬅ correct
      port: Number(process.env.SMTP_PORT), // ⬅ correct
      secure: process.env.SMTP_SECURE === "true", // ⬅ correct
      auth: {
        user: process.env.SMTP_USER,   // ⬅ correct
        pass: process.env.SMTP_PASS,   // ⬅ correct
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"DigiHire AI" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to hr@digihireai.com
      subject: "New Experience Submission",
      html: `
        <h2>New Experience Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
