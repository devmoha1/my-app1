import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const job = await prisma.job.findUnique({
      where: { slug: params.slug },
      include: { company: true, applications: true },
    });

    if (!job) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await prisma.job.update({
      where: { id: job.id },
      data: { viewCount: job.viewCount + 1 },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error('Get job error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
