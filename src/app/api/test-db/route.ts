import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const count = await prisma.user.count();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful!',
      userCount: count 
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return NextResponse.json(
      { success: false, message: 'Error connecting to the database', error: String(error) },
      { status: 500 }
    );
  }
}