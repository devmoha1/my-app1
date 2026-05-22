import { NextRequest, NextResponse } from 'next/server';
import { ApplicationSchema } from '@/lib/schemas';
import { getSession } from '@/lib/auth/session';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validation = ApplicationSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    const { jobId, coverLetter, cvUrl } = validation.data;

    // Check if already applied
    const existing = await prisma.application.findUnique({
      where: {
        jobId_candidateId: {
          jobId,
          candidateId: session.id,
        },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Already applied to this job' },
        { status: 409 }
      );
    }

    const application = await prisma.application.create({
      data: {
        jobId,
        candidateId: session.id,
        coverLetter,
        cvUrl,
        status: 'PENDING',
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error('Create application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
