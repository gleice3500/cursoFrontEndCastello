import connectDB from '@/lib/db';
import Pedido from '@/models/Order';
import MenuItem from '@/models/MenuItem';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const pedidos = await Pedido.find().populate('items.item').sort({ createdAt: -1 });
  return NextResponse.json(pedidos);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  if (!data.tableNumber || !data.items || !data.items.length) {
    return NextResponse.json({ error: 'Número da mesa e itens são obrigatórios' }, { status: 400 });
  }

  const pedido = new Pedido({
    tableNumber: data.tableNumber,
    items: data.items.map(({ itemId, quantity }) => ({ item: itemId, quantity })),
    status: 'Recebido'
  });

  await pedido.save();

  return NextResponse.json(pedido);
}
