import connectDB from '@/lib/db';
import MenuItem from '@/models/MenuItem';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = params;
  await MenuItem.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
