import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@dakarcjobs.sn' },
    update: {},
    create: {
      email: 'admin@dakarcjobs.sn',
      name: 'Admin Dakar Jobs',
      password: adminPassword,
      role: 'ADMIN',
      image: 'https://i.pravatar.cc/150?img=1',
    },
  });

  // Create test recruiter
  const recruiterPassword = await bcrypt.hash('recruiter123', 10);
  const recruiter = await prisma.user.upsert({
    where: { email: 'recruiter@example.com' },
    update: {},
    create: {
      email: 'recruiter@example.com',
      name: 'Ahmadou Sow',
      password: recruiterPassword,
      role: 'RECRUITER',
      phone: '+221777123456',
      image: 'https://i.pravatar.cc/150?img=2',
      recruiterProfile: {
        create: {
          jobTitle: 'Directeur des Ressources Humaines',
          department: 'RH',
        },
      },
    },
  });

  // Create company
  const company = await prisma.company.upsert({
    where: { slug: 'tech-solutions-dakar' },
    update: {},
    create: {
      name: 'Tech Solutions Dakar',
      slug: 'tech-solutions-dakar',
      description: 'Leader en solutions technologiques au Sénégal',
      website: 'https://techsolutions.sn',
      email: 'contact@techsolutions.sn',
      phone: '+221338240101',
      location: 'Dakar',
      employeeCount: '50-200',
      industry: 'Informatique',
      ownerId: recruiter.id,
    },
  });

  // Update recruiter profile with company
  await prisma.recruiterProfile.update({
    where: { userId: recruiter.id },
    data: { companyId: company.id },
  });

  // Create test jobs
  const job1 = await prisma.job.create({
    data: {
      title: 'Développeur Full Stack React/Node.js',
      slug: 'dev-fullstack-react-nodejs',
      description:
        'Nous recherchons un développeur full stack passionné par les technologies modernes. Vous travaillerez sur nos projets innovants.',
      requirements: [
        '3+ ans d\'expérience',
        'React et Node.js',
        'PostgreSQL',
        'Git',
        'REST API',
      ],
      benefits: [
        'Salaire compétitif',
        'Télétravail possible',
        'Formation continue',
        'Assurance santé',
      ],
      category: 'INFORMATIQUE',
      location: 'Dakar',
      salary: 1500000,
      salaryMax: 2500000,
      contractType: 'CDI',
      companyId: company.id,
      published: true,
      featured: true,
    },
  });

  const job2 = await prisma.job.create({
    data: {
      title: 'Manager Projet IT',
      slug: 'manager-projet-it',
      description:
        'Piloter des projets informatiques de grande envergure. Leadership et gestion de risques essentiels.',
      requirements: [
        '5+ ans d\'expérience',
        'Certification PMP ou Agile',
        'Leadership',
        'Communication',
      ],
      benefits: ['Salaire attractif', 'Bonus annuel', 'Flexibilité horaire'],
      category: 'INFORMATIQUE',
      location: 'Dakar',
      salary: 2000000,
      salaryMax: 3500000,
      contractType: 'CDI',
      companyId: company.id,
      published: true,
    },
  });

  // Create test candidate
  const candidatePassword = await bcrypt.hash('candidate123', 10);
  const candidate = await prisma.user.upsert({
    where: { email: 'candidate@example.com' },
    update: {},
    create: {
      email: 'candidate@example.com',
      name: 'Mariam Diallo',
      password: candidatePassword,
      role: 'CANDIDATE',
      phone: '+221776543210',
      image: 'https://i.pravatar.cc/150?img=3',
      candidateProfile: {
        create: {
          headline: 'Développeuse Full Stack Senior',
          location: 'Dakar',
          category: 'INFORMATIQUE',
          experience: '4 ans d\'expérience',
          education: 'Master Informatique',
          skills: [
            'React',
            'Node.js',
            'TypeScript',
            'PostgreSQL',
            'Docker',
            'AWS',
          ],
          lookingForJob: true,
        },
      },
    },
  });

  // Create saved job
  await prisma.savedJob.create({
    data: {
      jobId: job1.id,
      userId: candidate.id,
    },
  });

  // Create application
  await prisma.application.create({
    data: {
      jobId: job1.id,
      candidateId: candidate.id,
      coverLetter: 'Je suis très intéressée par cette position...',
      status: 'PENDING',
    },
  });

  console.log('✅ Seeding completed!');
  console.log('🔐 Test accounts:');
  console.log('   Admin: admin@dakarcjobs.sn / admin123');
  console.log('   Recruiter: recruiter@example.com / recruiter123');
  console.log('   Candidate: candidate@example.com / candidate123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
