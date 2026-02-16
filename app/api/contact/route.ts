import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { handleContactRequest } from './logic.ts';

export async function POST(request: Request) {
  return handleContactRequest(request, process.env, { NextResponse, nodemailer });
}
