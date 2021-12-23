import { PrismaService } from "nestjs-prisma";
import { Prisma, Job, ClusterGroup } from "@prisma/client";

export class JobServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindManyArgs>
  ): Promise<number> {
    return this.prisma.job.count(args);
  }

  async findMany<T extends Prisma.JobFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindManyArgs>
  ): Promise<Job[]> {
    return this.prisma.job.findMany(args);
  }
  async findOne<T extends Prisma.JobFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobFindUniqueArgs>
  ): Promise<Job | null> {
    return this.prisma.job.findUnique(args);
  }
  async create<T extends Prisma.JobCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobCreateArgs>
  ): Promise<Job> {
    return this.prisma.job.create<T>(args);
  }
  async update<T extends Prisma.JobUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobUpdateArgs>
  ): Promise<Job> {
    return this.prisma.job.update<T>(args);
  }
  async delete<T extends Prisma.JobDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobDeleteArgs>
  ): Promise<Job> {
    return this.prisma.job.delete(args);
  }

  async getClusterGroup(parentId: string): Promise<ClusterGroup | null> {
    return this.prisma.job
      .findUnique({
        where: { id: parentId },
      })
      .clusterGroup();
  }
}
