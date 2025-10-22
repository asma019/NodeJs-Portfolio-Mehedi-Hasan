import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    const formName = "MehediMS"; // Adding the form name

    // Validate form inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP configuration missing');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Add timeout settings for better reliability
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify SMTP connection before sending
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service connection failed. Please try again later.' },
        { status: 500 }
      );
    }

    // Send to both email addresses
    const recipients = ['mehedims2005@gmail.com', 'hello@mehedims.com'];

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: recipients.join(', '), // Send to both addresses
      subject: `${formName} Contact: ${subject}`,
      replyTo: email,
      text: `
Form: ${formName}
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
  <!-- Logo Header -->
  <div style="text-align: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eaeaea;">
    <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
      <tr>
        <td>
          <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #3b82f6, #60a5fa); border-radius: 8px; display: inline-block; text-align: center; line-height: 50px; color: white; font-weight: bold; position: relative; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            MH
            <div style="position: absolute; bottom: -5px; right: -5px; width: 20px; height: 20px; background: linear-gradient(135deg, #8b5cf6, #ec4899); border-radius: 4px; opacity: 0.8;"></div>
          </div>
        </td>
        <td style="padding-left: 15px; text-align: left;">
          <div style="font-size: 18px; font-weight: bold; color: #333;">Mehedi Hasan</div>
          <div style="font-size: 12px; color: #666;">Web Developer</div>
        </td>
      </tr>
    </table>
  </div>

  <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Form Submission</h2>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">
    The following message was submitted through the ${formName} contact form:
  </p>
  
  <div style="margin-bottom: 25px;">
    <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
    <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
    <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
  </div>
  
  <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin-top: 20px; border-left: 4px solid #3b82f6;">
    <h3 style="margin-top: 0; color: #4b5563; font-size: 16px;">Message:</h3>
    <p style="white-space: pre-line; color: #4b5563; font-size: 14px;">${message}</p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center;">
    <p style="margin-top: 10px; font-size: 12px; color: #6b7280;">© ${new Date().getFullYear()} ${formName}. All rights reserved.</p>
    <p style="font-size: 11px; color: #9ca3af;">This is an automated email sent from your portfolio contact form.</p>
  </div>
</div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        recipients: recipients,
        messageId: info.messageId
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error instanceof Error) {
      // Check for common SMTP errors
      if (error.message.includes('EAUTH')) {
        errorMessage = 'Email authentication failed. Please check SMTP credentials.';
      } else if (error.message.includes('ECONNECTION') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Could not connect to email server. Please try again.';
      } else if (error.message.includes('Invalid login')) {
        errorMessage = 'Invalid email credentials. Please contact administrator.';
      }
      
      console.error('Detailed error:', error.message);
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 