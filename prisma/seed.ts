import { PrismaClient } from "../lib/generated/prisma";
const prisma = new PrismaClient();
async function main() {
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  await prisma.experience.create({
    data: {
      company: "CSES Dev",
      title: "Developer",
      location: "Remote",
      startDate: new Date("2023-09-01"),
      description: "Built features and improved site performance.",
    },
  });
  await prisma.project.create({
    data: {
      name: "About Me Site",
      startDate: new Date("2024-01-01"),
      description: "Personal site with Prisma + MongoDB.",
      deploymentLink: "https://example.com",
      githubLink: "https://github.com/you/repo",
    },
  });
}
main().finally(() => prisma.$disconnect());
