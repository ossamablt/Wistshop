import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
})

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create welcome email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Wistshop! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6; margin-bottom: 10px;">Welcome to Wistshop!</h1>
            <p style="color: #6b7280; font-size: 18px;">You're now part of our amazing community!</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; text-align: center; margin-bottom: 30px;">
            <h2 style="margin-bottom: 15px;">🎁 Your Welcome Gift</h2>
            <p style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">10% OFF</p>
            <p style="font-size: 18px; margin-bottom: 20px;">Use code: <strong>WELCOME10</strong></p>
            <p style="font-size: 14px; opacity: 0.9;">Valid for your first purchase</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="color: #1f2937; margin-bottom: 15px;">What you'll get:</h3>
            <ul style="color: #4b5563; line-height: 1.6;">
              <li>✨ Exclusive deals and early access to sales</li>
              <li>🚀 First notifications about new products</li>
              <li>🤖 AI-powered personalized recommendations</li>
              <li>💎 Special subscriber-only discounts</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}" 
               style="background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Start Shopping Now
            </a>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Thank you for joining Wistshop!<br>
              If you have any questions, feel free to reply to this email.
            </p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Welcome email sent successfully!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
} 