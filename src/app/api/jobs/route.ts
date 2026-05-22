import { NextRequest, NextResponse } from 'next/server';
import { JobSearchSchema } from '@/lib/schemas';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const query = {
      search: searchParams.get('search'),
      category: searchParams.get('category'),
      location: searchParams.get('location'),
      contractType: searchParams.get('contractType'),
      salaryMin: searchParams.get('salaryMin'),
      salaryMax: searchParams.get('salaryMax'),
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '10',
    };

    const validation = JobSearchSchema.safeParse(query);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid query parameters' },
        { status: 400 }
      );
    }

    const { page, limit, search, category, location, contractType, salaryMin, salaryMax } = validation.data;
    const skip = (page - 1) * limit;

    // Build filters
    const where: any = {
      published: true,
    };

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { company: { name: { contains: search, mode: 'insensitive' } } },
      ];
    }

    if (category) where.category = category;
    if (location) where.location = location;
    if (contractType) where.contractType = contractType;
    
    if (salaryMin || salaryMax) {
      where.salary = {
        ...(salaryMin && { gte: salaryMin }),
        ...(salaryMax && { lte: salaryMax }),
      };
    }

    // Fetch jobs with company info
    const jobs = await prisma.job.findMany({
      where,
      include: { company: true },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    });

    // Get total count
    const total = await prisma.job.count({ where });

    return NextResponse.json({
      jobs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get jobs error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
