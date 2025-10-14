import connectDB from '@/lib/db';
import MenuItem from '@/models/MenuItem';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';


export async function GET() {
  await connectDB();
  const items = await MenuItem.find();
  return NextResponse.json(items);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const item = await MenuItem.create(data);
  return NextResponse.json(item);
}
