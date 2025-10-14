import connectDB from '@/lib/db';
import Order from '@/models/Order';
import MenuItem from '@/models/MenuItem';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  const { tableNumber, items } = await req.json();

  let total = 0;
  for (let { item, quantity } of items) {
    const menuItem = await MenuItem.findById(item);
    if (menuItem) total += menuItem.price * quantity;
  }

  const order = await Order.create({
    tableNumber,
    items,
    total,
  });

  return NextResponse.json(order);
}

export async function GET() {
  await connectDB();
  const orders = await Order.find().populate('items.item').sort({ createdAt: 1 });
  return NextResponse.json(orders);
}
