import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' });

  return NextResponse.json({ token, user: { name: user.name, role: user.role } });
}
