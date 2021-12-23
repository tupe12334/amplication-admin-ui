import { PrismaService } from "nestjs-prisma";
import { Prisma, ClusterGroup, Job } from "@prisma/client";

export class ClusterGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ClusterGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClusterGroupFindManyArgs>
  ): Promise<number> {
    return this.prisma.clusterGroup.count(args);
  }

  async findMany<T extends Prisma.ClusterGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClusterGroupFindManyArgs>
  ): Promise<ClusterGroup[]> {
    return this.prisma.clusterGroup.findMany(args);
  }
  async findOne<T extends Prisma.ClusterGroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClusterGroupFindUniqueArgs>
  ): Promise<ClusterGroup | null> {
    return this.prisma.clusterGroup.findUnique(args);
  }
  async create<T extends Prisma.ClusterGroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClusterGroupCreateArgs>
  ): Promise<ClusterGroup> {
    return this.prisma.clusterGroup.create<T>(args);
  }
  async update<T extends Prisma.ClusterGroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClusterGroupUpdateArgs>
  ): Promise<ClusterGroup> {
    return this.prisma.clusterGroup.update<T>(args);
  }
  async delete<T extends Prisma.ClusterGroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClusterGroupDeleteArgs>
  ): Promise<ClusterGroup> {
    return this.prisma.clusterGroup.delete(args);
  }

  async findJobs(
    parentId: string,
    args: Prisma.JobFindManyArgs
  ): Promise<Job[]> {
    return this.prisma.clusterGroup
      .findUnique({
        where: { id: parentId },
      })
      .jobs(args);
  }
}
